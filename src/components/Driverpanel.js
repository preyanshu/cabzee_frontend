import React from 'react'
import Req from './Req'
import  {  useEffect, useRef, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import {
  
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  
} from "firebase/auth";
import { auth } from "./firebase";
import Dreq from './Dreq';


const Driverpanel = (props) => {
  const ref=useRef()
  const location=useLocation()
  
  const [info,setinfo]=useState([])
 
  const navigate=useNavigate();
  useEffect(()=>{
    
    onAuthStateChanged(auth,(info)=>{
      
      if(!info){

        navigate("/")

        // if(location.pathname=="/driverpanel"){
        //   props.showAlert("First Login Please","danger")

        // }
        
        
       
      

      }

      setinfo(info)
      console.log(info);
     

      
      
     
      
      
      

    })
    // auth.signOut().then(()=>{
    //   console.log("signed out")

    // });

    

  },[])
  console.log(info);
  return (
    <div>
         <div className="right driverpanel container" style={{width:90+"vw",backgroundColor:"cream",height:87+"vh"}} >
                
                <div className="container" id='pillsdriver'><ul style={{justifyContent:"space-around",marginTop:40+"px"}} class="nav nav-pills mb-3 container center tabs" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Requests</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Offered</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Confirmed</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div className='right bc '><Dreq showAlert={props.showAlert} type={"requested"} info={info}></Dreq></div></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className='right bc ' style={{backgroundColor:"white"}}><Dreq type={"recieved"}></Dreq></div></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div className='right bc '><Dreq type={"confirmed"}></Dreq></div></div>
</div></div>

                </div>

                <div data-bs-toggle="tooltip" data-bs-placement="bottom" title={"signed in with "+ info.phoneNumber } >
    
        <i class="fa-solid fa-taxi fa-2xl" style={{color: "#ddd727",height:40+"px",width:40+"px",position:"absolute",top:32+"px",borderRadius:100+"px",marginLeft:20+"px",opacity:1,left:10+"px"}}></i>
        </div>

              
            


      
    </div>
  )
}

export default Driverpanel
