import React from 'react'
// import {useEffect} from 'react'
import Navbar from './Navbar'
import Ottie from './Ottie'
import jwt_decode from 'jwt-decode'
import  {  useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Login from './Login'
import './home.css'
import {
  
    RecaptchaVerifier,
    signInWithPhoneNumber,
    onAuthStateChanged,
    
  } from "firebase/auth";
  import { auth } from "./firebase";
import Userbtn from './Userbtn'
import Driverbtn from './Driverbtn'
let a=[];


const Home = (props) => {
   

    let navigate = useNavigate();
    const ref = useRef(null)
    const refClose = useRef(null)
   function handleCallbackResponse(response){
    console.log("response",response)
    console.log(jwt_decode(response.credential))
    localStorage.setItem("token",response.credential)
    navigate("/userpanel")
   

   }

   useEffect(()=>{

    if(localStorage.getItem("token")){
    
        try {
            if((jwt_decode(localStorage.getItem("token")))){
                navigate("/userpanel")
            }
            
        } catch (error) {
            
            alert("invalid autherization")
            localStorage.removeItem("token");
            navigate("/")
            
        }

    }
    else{
        onAuthStateChanged(auth,(data)=>{
      
            if(data){
              // console.log("hai data")
              navigate("/driverpanel")
            }
           
          })
        
    }
    
    // auth.signOut().then(()=>{
    //   console.log("signed out")

    // });

    

  },[])
  
   
   const callback1 = ()=>{
    console.log("handle click 2")
    console.log(jwt_decode(a))
    
    
   
}
   const callback2 = ()=>{
    ref.current.click();
    // console.log("callback2 in login")



    
    
    
   
}
   const callback3 = ()=>{
    refClose.current.click();
    console.log("callback3 in login")



    
    
    
   
}



    useEffect(()=>{
try {
          /*global google*/


          google.accounts.id.initialize({
            
            client_id : "560858258237-0u3urbgk7vln6a3194fqavte73toe27s.apps.googleusercontent.com",
            callback : handleCallbackResponse



        })
       if(window.screen.width<=400){
        google.accounts.id.renderButton(
            document.getElementById("a"),
            {size:"medium",text:"signin",shape: "rectangular",logo_alignment: "left",width: 170}
        )

       }
       else{
        google.accounts.id.renderButton(
            document.getElementById("a"),
            {size:"medium",text:"signin",shape: "rectangular",logo_alignment: "left",width: 270}
        )

       }
  
} catch (error) {
  console.log(error.message)
  
}

    
            
            
       
        
        },[])
    
  return(
    <>
    <div className="page_1"style={{backgroundColor:"none",opacity:1,backgroundImage:"url('path85 1.png')"}}>
    <div className="content" style={{color:"white",minWidth:260+"px",backgroundColor:"black",opacity:0.4,borderRadius:30+"px",padding:2+"rem",minHeight:280+"px"}}>

<h4 style={{color:'white',opacity:1.5}}>
Introducing CABZEE in NIT Hamirpur ,
a taxi booking platform that aims to transform the way you travel. Our mission is to provide a seamless and hassle-free 
transportation experience by connecting passengers with reliable, professional drivers at the tap
of a button.

</h4> <br />
<div className="btn btn-primary learnmore" id="learnmore" style={{opacity:1}} onClick={()=>{
  const page2Div = document.querySelector('.page_3');
  if (page2Div) {
    page2Div.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  }
}}>Sign In . </div>

</div>


<div>
{/* <Ottie style={{backgroundColor:"blue",height:300+"px",width:300+"px",marginTop:0+"px"}}></Ottie> */}
{/* <Ottie style={{backgroundColor:"blue",height:300+"px",width:300+"px",marginTop:0+"px"}}></Ottie> */}
<img id="home_img" src="4185875_2209717 1.png" alt="" />



</div>
      
    </div>
    <div className="page_2">
      <div className="cardflex0 text-center"><h1>Guide to cabzee</h1></div>
      <div class="cardflex1"> <div class="card mb-3 carda mx-3 card_home" id='carda' style={{maxWidth:540+"px",minWidth:260+"px",backgroundColor:"none",border:0+"px solid black"}}>
  <div class="row g-0"style={{backgroundColor:"#10001C"}}>
    <div class="col-md-4"style={{backgroundColor:"#10001C"}}>
      <img src="3656198.png" class="img-fluid rounded-start" style={{opacity:"1"}} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body card"style={{backgroundColor:"#10001C"}}>
        <h4 class="card-title" style={{color:"white"}}>Step 1.</h4> <br />
        <p class="card-text" style={{color:"white"}}><h6>Sign in to the CabZEE platform which will be done using google mail id only.</h6></p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div></div>
<div class="cardflex2"> <div class="card mb-3 carda mx-3 card_home" id='carda' style={{maxWidth:540+"px",minWidth:260+"px",backgroundColor:"none",border:0+"px solid black"}}>
  <div class="row g-0"style={{backgroundColor:"#10001C"}}>
    <div class="col-md-4"style={{backgroundColor:"#10001C"}}>
      <img src="my1 1.png" class="img-fluid rounded-start" style={{opacity:"1"}} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body card"style={{backgroundColor:"#10001C"}}>
        <h4 class="card-title" style={{color:"white"}}>Step 2.</h4> <br />
        <p class="card-text" style={{color:"white"}}><h6>Enter your information including Date, Time, Destination and pickup location to schedule the cab.</h6></p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div></div>
<div class="cardflex3"> <div class="card mb-3 carda mx-3 card_home" id='carda' style={{maxWidth:540+"px",minWidth:260+"px",backgroundColor:"none",border:0+"px solid black"}}>
  <div class="row g-0"style={{backgroundColor:"#10001C"}}>
    <div class="col-md-4"style={{backgroundColor:"#10001C"}}>
      <img src="29979323_7649994 1.png" class="img-fluid rounded-start" style={{opacity:"1"}} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body card"style={{backgroundColor:"#10001C"}}>
        <h4 class="card-title" style={{color:"white"}}>Step 3.</h4> <br />
        <p class="card-text" style={{color:"white"}}><h6>Choose the driver of your with the taxi fare of your convenience and confirm the cab and Enjoy your ride.</h6></p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div></div>
   
 
 


    </div>
    <div className="page_3">
      <div>
      <ul style={{height:100+"px"}}class="nav nav-pills mb-3 pills-tab" id="pills-tab pills_tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" style={{color:"white"}} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">User</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link"style={{color:"white"}} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Driver</button>
  </li>
</ul>
<div class="tab-content pills-tab-content" id="pills-tabContent pill_stab_content"style={{}}>
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Userbtn></Userbtn></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Driverbtn callback2={callback2}></Driverbtn></div>

</div>

      </div>
    

    </div>
    <div className="page_4">
      <div className="div_1"> <h2 style={{color:"white"}}>Your Destination, <br /><span style={{marginLeft:4.5+"%",marginBottom:6+"%",marginTop:6+"%"}}>Our Dedication</span></h2> <div className="btn btn-primary mb-5 mx-5" style={{width:200+"px",height:75+"px",padding:0+"px",marginTop:35+"px"}}><img style={{width:100+"%",height:100+"%",margin:0+"px",opacity:1}}src="logo_cabzee.png" alt="" /></div></div>
      <div className="div_2"> <div style={{width:"60vw",marginTop:20+"px"}}><h4 >Welcome to CabZEE, your go-to app for seamless and convenient taxi bookings. Say goodbye to the hassle of waving down taxis on the street or waiting endlessly for a ride. With RideEase, getting from point A to point B has never been easier or more comfortable.</h4> <br /> <div className="btn btn-primary button" onClick={()=>{
        const page2Div = document.querySelector('.page_2');
        if (page2Div) {
          page2Div.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
        }
      }} >Steps to Use Cabzee</div></div> </div>
      <b><hr /></b>
      {/* <hr /> */}
      <div className="div_3" >
        <div className="no text-center" style={{color:"black"}}>
          <h4>
           <br />
        CONTACT US: <br />
9001176318 <br />
9317081935 <br /></h4>
        </div>
        <div className="icons" style={{color:"white"}}><b>
        <i class="fa-brands fa-instagram mx-3 fa-2xl" ></i> 
        <i class="fa-brands fa-github mx-3 fa-2xl" ></i> 
        <i class="fa-brands fa-whatsapp mx-3 fa-2xl"></i> 
        <i class="fa-solid fa-envelope mx-3 fa-2xl" ></i> 
 
        </b>
       
        
        </div>

      </div>


    </div>

  












{/* modal */}
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{color:'black'}}>
                    <div className="modal-content">
                        <div className="modal-header text-center" >
                            <h5 className="modal-title text-center" id="exampleModalLabel">Sign In with Phone No</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{paddingTop:0+"px"}}>
                            <Login close={callback3}  showAlert={props.showAlert}></Login>
                           
                        </div>
                        <div className="modal-footer">
                       < button ref={refClose} type="button" className="btn btn-secondary" style={{display:"none"}} data-bs-dismiss="modal">Close</button>
                       <div className="text1 mx-3">Don,t have an account? <a href='/signup' style={{color:"black",textDecoration:"none"}}> <b>Sign up</b></a></div>
                            {/* <button type="button" className="btn btn-primary" onClick={close}>Update Note</button> */}
                        </div>
                    </div>
                </div>
            </div>





    
    
    
    
    
    
    
    </>
     
      

  )
}

export default Home