import React,{useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Req from './Req';
import jwt_decode from 'jwt-decode'
import { useNavigate} from "react-router-dom";

import "./userpanel.css"





const Userpanel = (props) => {
  const navigate=useNavigate();
  const {showAlert}=props;
  const [isAddingData, setIsAddingData] = useState(false);
  const [addreq, setaddreq] = useState({pickup: "", destination: "", time: "", date: ""})
  const onChange = (e)=>{
    setaddreq({...addreq, [e.target.name]: e.target.value})
}
const onSubmit=async(e)=>{
  e.preventDefault();
  console.log(addreq);
  await addrequest(addreq);
  props.showAlert("Request Added","success")
}
const addrequest=async(addreq)=>{
  setIsAddingData(true);
  var element = document.getElementById("pills-requests");
  element.scrollTop = element.scrollHeight;
  const response = await fetch("http://localhost:5000/api/addRequest/request", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify({
      pickup : addreq.pickup,
    destination: addreq.destination,
    date: addreq.date,
    time: addreq.time,
    user: {name:jwt_decode(localStorage.getItem("token")).given_name,email:jwt_decode(localStorage.getItem("token")).email},
    img : jwt_decode(localStorage.getItem("token")).picture
    
  

    })
  });
   

 
  let data=await response.json();
  console.log("DATA added");
  setTimeout(() => {
    setIsAddingData(false);
    
  }, 1000);
  
  setaddreq({pickup: "", destination: "", time: "", date: ""})

 





}  
useEffect(()=>{
  if(!localStorage.getItem("token")){
    navigate("/")
    props.showAlert("First Login Please","danger");

    
   
}
else{
  try {
if((jwt_decode(localStorage.getItem("token")))){
        navigate("/userpanel")
  }
    
} catch (error) {
    
  props.showAlert("Invalid Auth Login again","danger");
    localStorage.removeItem("token");
    navigate("/")
    
}

}
  window.scrollTo(0, 0);

},[])





  return (
    <>
        <div className="flex">
           <div className="left flex2" >
           <div className='container px-3'>
            
            <form className='form' onSubmit={onSubmit} >
            <div className="mb-3">
                   
                    <input type="text" className="form-control"  id="pickup" name="pickup" value={addreq.pickup} onChange={onChange} aria-describedby="emailHelp" placeholder='From:' />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                 
                    <input type="text" className="form-control"value={addreq.destination} onChange={onChange} id="destination" name="destination" aria-describedby="emailHelp" placeholder='To:' />
                 
                </div>
                <div className="d-flex justify-content-center align-items-center">
                <div className="mx-3 ">
                    
                    <input type="time" className="form-control label time" value={addreq.time} onChange={onChange} name="time" id="time" placeholder='Time' minLength={5} required />
                </div>
                <div className="mx-3 ">
                 
                    <input type="date" className="form-control label date" value={addreq.date} onChange={onChange} name="date" id="date" minLength={5} required placeholder='Date'/>
                </div>
                </div>
                 <button type="submit" className="btn btn-success text-center container my-3 submit">Add request..</button>
                
            </form>
        </div>
           </div>
            <div className="right" >
                
                <div className="container"><ul class="nav nav-pills mb-3 container center tabs" id="pills-tab" role="tablist" style={{justifyContent:"space-evenly"}}>
  <li class="nav-item" role="presentation">
    <button class="nav-link active tab" id="pills-home-tab tab1" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pending</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link tab" id="pills-profile-tab tab2" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Recieved</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link tab" id="pills-contact-tab tab3" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Confirmed</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div id="pills-requests" className='right bc'><Req isAddingData={isAddingData} type={"pending"}></Req></div></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className='right bc'><Req showAlert={showAlert} type={"recieved"} a="confirmed"></Req ></div></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div className='right bc'><Req  type={"confirmed"} a="confirmed"></Req></div></div>
</div></div>

                </div>
            
        
        </div>

        <div >
        {/* <h1>  {jwt_decode(localStorage.getItem("token")).name}</h1> */}
        <img data-bs-toggle="tooltip" data-bs-placement="bottom" title={"signed in as "+ jwt_decode(localStorage.getItem("token")).name }style={{height:40+"px",width:40+"px",position:"absolute",top:-9+"px",borderRadius:100+"px",marginLeft:20+"px",opacity:1}} src={jwt_decode(localStorage.getItem("token")).picture} alt="" />
        </div>
        
        
      
        </>
  )
}

export default Userpanel
