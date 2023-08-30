import React,{useState,useEffect,useRef} from 'react'
import Userreqitem from './Userreqitem'
import Loading from './Loading'
import jwt_decode from 'jwt-decode'
import useSWR from "swr";
import Driverreqitem from './Driverreqitem';
import {
  
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  
} from "firebase/auth";
import { auth } from "./firebase";
import {motion} from "framer-motion";


const Dreq = (props) => {
  const [driver,setdriver]=useState();
  const [price,setPrice]=useState("")
  const [no,setno]=useState("NA")
  const [load,setload]=useState(true)
  const refclose=useRef();

  useEffect(()=>{
    // setload(true)
    
    onAuthStateChanged(auth,(data)=>{
  if(data){
    setno(data.phoneNumber)
    setTimeout(() => {
      setload(false)
      
    }, 4000);

  }
     
     

      
    
     
    })


  },[])

  const addreq= async (object)=>{
    await fetch("http://localhost:5000/api/addRequest/recievedreq", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify(object)
    }).then((data)=>{
      return data.json()
  
  
    }).then((json)=>{
      console.log(json)
       setTimeout(() => {
        props.showAlert("Offer posted successfuly","success")
        
       }, 300);
       
        

     

      // console.log(driver);
      
      
      
    
    
     
     
  
    });
   
  
  }


  const getdriver= async (numberf)=>{
    await fetch(`http://localhost:5000/api/addDriver/get/${numberf}`, {
      method: 'GET',
    }).then((data)=>{
      return data.json()
  
  
    }).then((json)=>{
      // console.log(json.name)
      if(json.name==undefined){
        setdriver("")
        

      }
      else{
        console.log("else",json.name);
        let  driverget = json.name;
        let  object ={user:details.user,pickup:details.pickup,destination:details.destination,time:details.time,date:details.date,driver:{name:driverget,phone:props.info.phoneNumber},price:price,img:details.img}
        console.log("img")
        console.log(details.img)
        addreq(object);
        
      }

      // console.log(driver);
      
      
      
    
    
     
     
  
    });
    
    
  
  }


  const [details,Setdetails]=useState({img:"",user:"",pickup:"",destination:"",time:"",date:"",postdate:"",price:"",driver:""})
  const ref=useRef()
    let reqs=[]
    let reqs2=[]
    let reqs3=[]
    const fetcher = async (url) => {
      
      // console.log(email)
    
      return fetch(url, {
        method: 'GET',
        headers: {
  
          phone: no
        }
      })
      .then((res) => res.json())
      .then((data) => data.reverse()); // Reverse the array here
    };
    
    const { data, error, isLoading } = useSWR(
      "http://localhost:5000/api/fetchRequest/request/driver",
      fetcher,
      {
        refreshInterval: 2000
      }
    );
    const { data:data2, error:error2, isLoading:isLoading2 } = useSWR(
      "http://localhost:5000/api/fetchRequest/recievedreq/driver",
      fetcher,
      {
        refreshInterval: 2000
      }
    );
    const { data:data3, error:error3, isLoading:isLoading3 } = useSWR(
      "http://localhost:5000/api/fetchRequest/confirmedreq/driver",
      fetcher,
      {
        refreshInterval: 2000
      }
    );
  
   console.log(data2)
  
   reqs=data
   reqs2=data2;
   reqs3=data3
  //  data2=undefined;
   console.log("data",data)
   console.log("data2",reqs2)
   console.log("data3",data3)
   console.log("error",error)
   console.log("error",error2)
   console.log("error",error3)
  //  reqs=data3
   const click =async(req)=>{
    ref.current.click()
    console.log(props.info)
    Setdetails({img:req.img,user:req.user,pickup:req.pickup,destination:req.destination,time:req.time,date:req.date,postdate:req.postdate,driver:{name:"",phone:props.info.phoneNumber},price:""})

    //geting user 
    

    
    // adddetails(object)
    

   

    

   
    console.log(details);


  }




  return (
    <div>
      {props.type=="requested" && <div class="row row-cols-1 row-cols-md-3 g-4" id='cardbox'>
      

      {data && !isLoading && reqs.map((req)=>{
       return(<Driverreqitem  type={props.type} destination={req.destination} pickup={req.pickup} time={req.time} date={req.date} user={req.user.name} req={req} click={click}></Driverreqitem>)
     })}
     {
      data &&reqs.length==0 && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><h5>No Requested rides</h5></div>
    }
     
     
     {
      !data && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
   
 </div> }

      {props.type=="recieved" && <div class="row row-cols-1 row-cols-md-3 g-4"id='cardbox' >
      

      
      {!load&& data2 && reqs2.map((req)=>{
       return(<Driverreqitem  type={props.type} destination={req.destination} pickup={req.pickup} time={req.time} date={req.date}  req={req} click={click}></Driverreqitem>)
     })}
    
    {
      load &&<div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
    {
      !load && data2 &&reqs2.length==0 && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><h5>No Offered rides</h5></div>
    }
   
 </div> }
 

      {props.type=="confirmed" && <div class="row row-cols-1 row-cols-md-3 g-4"id='cardbox'>
      

      {!load && data3&&reqs3.map((req)=>{
       return(<Driverreqitem  type={props.type} destination={req.destination} pickup={req.pickup} time={req.time} date={req.date} user={req.user.name} req={req} click={click}></Driverreqitem>)
     })}
     
     {
      load && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
  {
      !load && data3 &&reqs3.length==0 && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><h5>No Scheduled rides</h5></div>
    }
 </div> }
     



















<button type="button" style={{display:"none"}} ref={ref}class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"black",color:"white"}}>
        <h5 class="modal-title" id="staticBackdropLabel">Requested Ride Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"white",color:"white"}}></button>
      </div>
      <form onSubmit={async (e)=>{
        refclose.current.click();
        e.preventDefault();

      getdriver(props.info.phoneNumber);
       





      }}>
      <div class="modal-body container">

        <div class="reqdetails">
          
   
      <div class="card-body " style={{position:"relative",minWidth:213+"px",marginBottom:0+"px",width:100+"%"}}>
      <h6 class="card-title" style={{justifyContent:"space-between"}}> <b> <img src={details.img} class="me-3" style={{marginBottom:11+"px",borderRadius:100+"%",height:70+"px",width:70+"px",display:"inline-block",opacity:1,marginLeft:0+"px"}}/><span style={{whiteSpace:"nowrap"}}> {details.user.name}</span></b> <br /> <hr />
      <span className='ml-5' style={{marginTop:7.4+"px",marginLeft:10+"px"}} ></span>  </h6> 
      <p class="card-text"><i class="fa-solid fa-clock mx-3"></i>{details.time} , <span className='d-inline ml-3' style={{whiteSpace:"nowrap"}}>{details.date}</span> </p>
        <h6 class="card-title my-3"><i class="fa-solid fa-location-dot fa-2xl " style={{color: "green",marginLeft:10.5+"px",marginRight:15+"px"}}></i>    {details.pickup} to {details.destination} </h6>
        
     
    
      
        <p class="card-text"><h6 style={{marginLeft:15+"px"}}>   Requested on {details.postdate}</h6> </p> <br /> <hr />
       
        
        
       
       
        
      </div>
      
  
  
  
        
 <div>
 
 <div class="input-group mb-3">
  <span  style={{border:"2px solid black",borderRight:"0px solid black"}}class="input-group-text">₹</span>
  <input type="number" style={{border:"2px solid black"}} class="form-control" value={price} onChange={(e)=>{
    setPrice(e.target.value);
  }} placeholder="Enter the fare of the ride"aria-label="Dollar amount (with dot and two decimal places)" required min={50} />
</div>

<div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required style={{backgroundColor:"green"}}/>
      <label class="form-check-label" for="invalidCheck2">
        You agree that this fare is the final price and there will be no further negotiations.
      </label>
    </div>

 </div>



      

 </div> 
      </div>
      <div class="modal-footer">
        <button type="button" ref={refclose} class="btn btn-secondary"style={{backgroundColor:"black"}} data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-success">Offer</button>
      </div>
      </form>
      
    </div>
  </div>
</div>
 
  
 
  


  
      
    </div>
  )
}

export default Dreq
