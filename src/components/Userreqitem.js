import React from 'react'
import {motion} from "framer-motion"

const Userreqitem = (props) => {
  const {req}=props;

  const addreq= async (object)=>{
    await fetch("http://localhost:5000/api/addRequest/confirmedreq", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify(object)
    }).then((data)=>{
      return data.json()
  
  
    }).then((json)=>{
      console.log(json)
  props.showAlert(json.message,"success");


       
        
        
      
       });
   
  
  }


  const changestatus= async (object)=>{
    props.setload(true);
    await fetch("http://localhost:5000/api/reqstatus", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify(object)
    }).then((data)=>{
      return data.json()
  
  
    }).then((json)=>{
      console.log(json)
      props.setload(false)
      
      
      
       
       });
   
  
  }
  const changestatus2= async (object)=>{
    props.setload(true);
    await fetch("http://localhost:5000/api/reqstatus/2", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify(object)
    }).then((data)=>{
      return data.json()
  
  
    }).then((json)=>{
      console.log(json)
      props.setload(false)
      
      
      
       
       });
   
  
  }
  
  return (
    <>
    {props.type=="pending" &&  <motion.div 
     whileHover={{scale:1.02}}
     whileTap={{scale:0.9}} animate={{duration:1,delay:0}} 
     class="col-sm-6 px-3">
    <div class="card m-3 px-0 pending" style={{minWidth:217+"px",borderRadius:0+"%",border:"2px solid black"}}>
      <div class="card-body " style={{position:"relative",minWidth:213+"px",marginBottom:0+"px"}}>
      <h6 class="card-title" style={{justifyContent:"space-between"}}> <b> <i class="fa-solid fa-car-side fa-2xl m-3" style={{marginBottom:11+"px",color:"red"}}></i> <span style={{whiteSpace:"nowrap"}}> Requested Ride</span></b>
      <span className='ml-5' style={{marginTop:7.4+"px",marginLeft:10+"px"}} ></span>  </h6> <br/>
      <p class="card-text"><i class="fa-solid fa-clock mx-3"></i>{props.time} , <span className='d-inline ml-3' style={{whiteSpace:"nowrap"}}>{props.date}</span> </p><hr /> 
        <h6 class="card-title my-3"><i class="fa-solid fa-location-dot fa-2xl " style={{color: "green",marginLeft:10.5+"px",marginRight:15+"px"}}></i>    {props.pickup} to {props.destination} </h6>
        
     
       
        <hr />

        
      
        <p class="card-text"><h6 style={{marginLeft:15+"px"}}>   Requested on  {req.postdate}</h6> </p>
        
       
       
        
      </div>
      
    </div>
  </motion.div>}
    {props.type=="recieved" &&  <motion.div 
     whileHover={{scale:1.02}}
     whileTap={{scale:0.9}} animate={{duration:1,delay:0}} class="col-sm-6 px-3">
    <div class="card m-3 px-0 recieved" style={{minWidth:217+"px",borderRadius:0+"%",border:"2px solid black"}}>
      <div class="card-body " style={{position:"relative",minWidth:213+"px",marginBottom:0+"px"}}>
      <h6 class="card-title d-flex" style={{justifyContent:"space-between"}}> <b> <i class="fa-solid fa-taxi fa-2xl m-3" style={{marginBottom:11+"px",color:"#d7d725"}}></i><span className='ml-5 mb-3' style={{marginLeft:8+"px"}}>{req.driver.name}</span></b>
      <span className='ml-5' style={{marginTop:7.4+"px",marginLeft:10+"px"}} >{props.driver.phone}</span>  </h6> <hr />
        
      <p class="card-text"><i class="fa-solid fa-indian-rupee-sign mx-3 fa-lg"></i> {props.price}  </p>
        <p class="card-text"><i class="fa-solid fa-clock mx-3"></i>{props.time} , <span className='d-inline ml-3' style={{whiteSpace:"nowrap"}}>{props.date}</span> </p>
        <hr />

        
        <h6 class="card-title"><i class="fa-solid fa-location-dot fa-2xl " style={{color: "green",marginLeft:10.5+"px",marginRight:15+"px"}}></i>    {props.pickup} to {props.destination} </h6> <hr />
        <div className='d-flex' style={{justifyContent:"space-around"}}>
        <button className='btn btn-danger text-center' style={{width:85+"px",backgroundColor:"grey",border:"2px solid grey"}} onClick={()=>{
          
            changestatus(req);
          
              
              setTimeout(() => {
                props.showAlert("Request Declined","danger")
                
              }, 300);
              
         
            
         
        }}>Decline</button>
        <button className='btn btn-success text-center mx-3'style={{width:85+"px"}} onClick={()=>{
          // alert("Ride Scheduled U should contact the driver to confirm your ride and to be on the safe side")

       
        let object = req;
        console.log(object);
        addreq(object);

       
          changestatus(object);
          
      
        


      
      
      
      }} >Accept</button>

        </div>
       
       
        
      </div>
      
    </div>
  </motion.div>}
    {props.type=="confirmed" && <motion.div 
     whileHover={{scale:1.02}}
     whileTap={{scale:0.9}} animate={{duration:1,delay:0}} class="col-sm-6 px-3">
    <div class="card m-3 px-0 confirmed"style={{minWidth:217+"px",borderRadius:0+"%",border:"2px solid black"}}>
      <div class="card-body " style={{position:"relative",minWidth:213+"px",marginBottom:0+"px"}}>
      <h6 class="card-title d-flex" style={{justifyContent:"space-between"}}> <b> <i class="fa-solid fa-circle-check fa-2xl m-3" style={{marginBottom:11+"px",color:"green"}}></i><span className='ml-5 mb-3' style={{marginLeft:8+"px"}}>Confirmed Ride</span></b>
        </h6> <hr />

      <b> <i class="fa-solid fa-taxi fa-lg" style={{marginBottom:15+"px",marginLeft:13+"px",marginRight:8+"px"}}></i><span className='ml-5 mb-3' style={{marginLeft:8+"px"}}>{req.driver.name}</span></b>
      <span className='ml-5' style={{marginTop:7.4+"px",marginLeft:10+"px"}} >{props.driver.phone}</span> 
        
      <p class="card-text"><i class="fa-solid fa-indian-rupee-sign mx-3 mt-4 fa-lg"></i> {req.price}  </p>
        <p class="card-text"><i class="fa-solid fa-clock mx-3"></i>{props.time} , <span className='d-inline ml-3' style={{whiteSpace:"nowrap"}}>{props.date}</span> </p>
        <hr />

        
        <h6 class="card-title"><i class="fa-solid fa-location-dot fa-2xl " style={{color: "green",marginLeft:10.5+"px",marginRight:15+"px"}}></i>    {props.pickup} to {props.destination} </h6> 
        
       
       
        
      </div>
      
    </div>
  </motion.div>}
      
     
  </>
  )
}

export default Userreqitem
