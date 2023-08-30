import React,{useRef} from 'react'
import {motion} from "framer-motion"

const Driverreqitem = (props) => {
  const {req}=props;
  // const ref=useRef()
  return (<>
    
     {props.type==="requested" && <motion.div whileHover={{scale:1.02}}
     whileTap={{scale:0.9}} animate={{duration:1,delay:0}}   class="col-sm-6" onClick={()=>{
        props.click(req)
      }}>
    <div class="card m-3 px-0 pending" style={{minWidth:215+"px",borderRadius:0+"%",border:"2px solid black"}}>
      <div class="card-body " style={{position:"relative",minWidth:213+"px",marginBottom:0+"px"}}>
      <h6 class="card-title" style={{justifyContent:"space-between"}}> <b> <img src={req.img} class=" m-3" style={{marginBottom:11+"px",borderRadius:100+"%",height:40+"px",width:40+"px",display:"inline-block",opacity:1,border:"0px solid black"}}/><span style={{whiteSpace:"nowrap",color:"red"}}> Requested Ride</span></b>
      <span className='ml-5' style={{marginTop:7.4+"px",marginLeft:10+"px"}} ></span>  </h6> <br/>
      <p class="card-text"><i class="fa-solid fa-clock mx-3"></i>{req.time} , <span className='d-inline ml-3' style={{whiteSpace:"nowrap"}}>{props.date}</span> </p><hr /> 
        <h6 class="card-title my-3"><i class="fa-solid fa-location-dot fa-2xl " style={{color: "green",marginLeft:10.5+"px",marginRight:15+"px"}}></i>    {req.pickup} to {req.destination} </h6>
        
     
       
        <hr />

        
      
        <p class="card-text"><h6 style={{marginLeft:15+"px"}}>   Requested on {req.postdate}</h6> </p>
        
       
       
        
      </div>
      
    </div>
  </motion.div>}

     { props.type==="recieved" && <motion.div 
    whileHover={{scale:1.02}}
    whileTap={{scale:0.9}} animate={{duration:1,delay:0}}  class="col-sm-6" >
    <div class="card m-3 px-0 pending" style={{minWidth:215+"px",borderRadius:0+"%",border:"2px solid black"}}>
      <div class="card-body " style={{position:"relative",minWidth:213+"px",marginBottom:0+"px"}}>
      <h6 class="card-title" style={{justifyContent:"space-between",marginBottom:0+"px"}}> <b> <img src={req.img} class="m-3" style={{marginBottom:0+"px",borderRadius:100+"%",height:40+"px",width:40+"px",display:"inline-block",opacity:1}}/><span style={{whiteSpace:"nowrap",color:"#b8b80e"}}> Offered Ride</span></b>
      <span className='ml-5' style={{marginTop:7.4+"px",marginLeft:10+"px"}} ></span>  </h6>
       <br/>
       <p class="card-text"><i class="fa-solid fa-indian-rupee-sign mx-3 fa-lg"></i>{req.price} </p>
      <p class="card-text"><i class="fa-solid fa-clock mx-3"></i>{req.time} , <span className='d-inline ml-3' style={{whiteSpace:"nowrap"}}>{props.date}</span> </p>
    <hr /> 
        <h6 class="card-title my-3"><i class="fa-solid fa-location-dot fa-2xl " style={{color: "green",marginLeft:10.5+"px",marginRight:15+"px"}}></i>    {req.pickup} to {req.destination} </h6>
        
     
       
        <hr />

        
      
        <p class="card-text"><h6 style={{marginLeft:15+"px"}}>   Offered on {req.postdate}</h6> </p>
        
       
       
        
      </div>
      
    </div>
  </motion.div> }
     {props.type==="confirmed" && <motion.div 
     whileHover={{scale:1.02}}
     whileTap={{scale:0.9}} animate={{duration:1,delay:0}}  class="col-sm-6 px-3">
    <div class="card m-3 px-0 confirmed"style={{minWidth:217+"px",borderRadius:0+"%",border:"2px solid black"}}>
      <div class="card-body " style={{position:"relative",minWidth:213+"px",marginBottom:0+"px"}}>
      <h6 class="card-title d-flex" style={{justifyContent:"space-between"}}> <b> <i class="fa-solid fa-circle-check fa-2xl m-3" style={{marginBottom:11+"px",color:"green"}}></i><span className='ml-5 mb-3' style={{marginLeft:8+"px"}}>Confirmed Ride</span></b>
        </h6> <hr />

      <b> <i class="fa-solid fa-user fa-lg" style={{marginBottom:15+"px",marginLeft:13+"px",marginRight:8+"px"}}></i><span className='ml-5 mb-3' style={{marginLeft:8+"px"}}>{req.user.name}</span></b>
      {/* <span className='ml-5' style={{marginTop:7.4+"px",marginLeft:10+"px"}} >{req.driver.phone}</span>  */}
        
      <p class="card-text"><i class="fa-solid fa-indian-rupee-sign mx-3 mt-4 fa-lg"></i> {req.price}  </p>
        <p class="card-text"><i class="fa-solid fa-clock mx-3"></i>{props.time} , <span className='d-inline ml-3' style={{whiteSpace:"nowrap"}}>{props.date}</span> </p>
        <hr />

        
        <h6 class="card-title"><i class="fa-solid fa-location-dot fa-2xl " style={{color: "green",marginLeft:10.5+"px",marginRight:15+"px"}}></i>    {props.pickup} to {props.destination} </h6> 
        
       
       
        
      </div>
      
    </div>
  </motion.div> }



      
    



</> )
}

export default Driverreqitem

