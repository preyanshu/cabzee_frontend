// import React from 'react'
// import './App.css';
import React, { useState } from "react";
import { useNavigate ,Router} from "react-router-dom";
import {
  
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  
} from "firebase/auth";
import { auth } from "./firebase";
import "./signup.css"

const Signup = (props) => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);
  const [btn, setbtn] = useState(false);
  const [btn2, setbtn2] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  // const [otp, setOtp] = useState('');
  const navigate=useNavigate();
//   console.log(auth);

const adddriver=async(e)=>{
  let numberf="+91"+number;
  await fetch("https://backend-cabzee.onrender.com/api/addDriver", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content_Type': 'application/json',
       
      }
      ,
      body: JSON.stringify({
        name:name
            ,
            phone_no :numberf
     })
    }).then((data)=>{
      return data.json()
  
  
    }).then( async(json)=>{
     


   if(json.success=="true"){
    
  try {
    // alert(json.message);
    const c=await result.confirm(otp);
    console.log(c)


  
    props.showAlert(json.message,"success");
      navigate("/driverpanel");

    
    onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser.accessToken);
      localStorage.setItem("tokencabzee",currentuser.accessToken);
      
      // setUser(currentuser);\
    })

  } catch (err) {
    props.showAlert(err.message,"danger");
  
};
         
   

  }
  else if(json.success=="false"){
    setTimeout(() => {
      window.location.reload()
      
    }, 400);
    
        
        props.showAlert(json.message,"danger");
       

    }
  else{
    alert("internal server error")
  }
  
     
     
        

     

      // console.log(driver);
      
      
      
    
    
     
     
  
    });


}

 

function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "ra",
      {"size":"invisible",
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        console.log("hi i am recaptcha");
      },},
      auth
    );
    recaptchaVerifier.render().then((n)=>{
console.log(n)
    }).catch((e)=>{
        console.log(e.message)

    });
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }
  
  const getOtp = async (e) => {
    e.preventDefault()
    try {
      let numberf="+91"+number;
  
      setbtn(true);
    e.preventDefault();
   
    console.log(name)
  
  
    const response = await setUpRecaptha(numberf);
      setResult(response);
      setFlag(true);
      console.log("this is response")
      console.log(response);


      
    
  } catch (error) {
    // alert("internal server error")
    console.log(error.message)
    
  }
    
   
   
   
   };


  const onChange = (e)=>{
    setNumber(e.target.value)
}
  const onChange2 = (e)=>{
    setOtp(e.target.value)
}
  const namechange = (e)=>{
    setName(e.target.value)
}

const verifyOtp = async (e) => {
  setbtn2(true);
  e.preventDefault();
  adddriver(e);
}








  return (<>
  <div id="ra"></div>
 
 
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius:25+"px",margin:20+"px"}}>
          <div class="card-body mt-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 container mt-5  mb-5" style={{marginBottom:0 +"px",border:"2px solid black"}}>

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up as Driver</p>
             
             
             
             
             {(!flag)&&<form class="mx-1 mx-md-4" onSubmit={getOtp}>


<div class="d-flex flex-row align-items-center mb-4">
  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
  <div class="form-outline flex-fill mb-0">
    <input type="text" id="form3Example1c" class="form-control"minlength={3} value={name} onChange={namechange} required />
    <label class="form-label" for="form3Example1c" >Your Name</label>
  </div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
  
  <div class="form-outline flex-fill mb-0">
      {/* changing field */}
  <div class="input-group mt-3">
    
    <span class="input-group-text" id="basic-addon1">+ 91</span>
    <input type="tel" class="form-control"id="form3Example3c"  aria-label="Username" aria-describedby="basic-addon1" pattern=".{10}" required value={number} onChange={onChange}/> </div>

    



  {/* changing field */}
    <label class="form-label" for="form3Example3c">Your Phone no</label>
  </div>

</div>




<div class="form-check d-flex justify-content-center mb-5">
  <input class="form-check-input me-2" type="checkbox" id="form2Example3c" required />
  <label class="form-check-label" for="form2Example3">
    I agree all statements in <a href="#!">Terms of service</a>
  </label>
</div>

<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
 
  {/* buttons */}
  {(!btn)&&<button type="submit" id="signupbtn" class="btn btn-primary container"><b>Send OTP</b> </button>} 
 {(btn)&&<button type="submit" disabled class="btn btn-danger container" style={{backgroundColor:"grey",border:2 +"px solid grey"}}> sending...</button>} 

</div>

</form>}


{/* form2 */}
             {(flag)&&<form class="mx-1 mx-md-4" onSubmit={verifyOtp}>
{/* 
<div class="d-flex flex-row align-items-center mb-4">
  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
  <div class="form-outline flex-fill mb-0">
    <input type="text" id="form3Example1c" class="form-control" />
    <label class="form-label" for="form3Example1c" minlength={3} value={name} onChange={namechange} required>Your Name</label>
  </div>
</div> */}

<div class="d-flex flex-row align-items-center mb-4">
  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
  
  <div class="form-outline flex-fill mb-0">
      
  

    <div class="input-group mt-3"><input type="tel" class="form-control" placeholder="Enter OTP" aria-label="Username" aria-describedby="basic-addon1" pattern=".{6}" required value={otp} onChange={onChange2}/></div>



  
    <label class="form-label" for="form3Example3c">Your Phone no</label>
  </div>

</div>


<div class="form-check d-flex justify-content-center mb-5">
  <input class="form-check-input me-2" type="checkbox" id="form2Example3c" required checked/>
  <label class="form-check-label" for="form2Example3">
    I agree all statements in <a href="#!">Terms of service</a>
  </label>
</div>

<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
{(!btn2)&&<button type="submit" class="btn btn-success container">Verify OTP</button>} 
 {(btn2)&&<button type="submit" disabled class="btn btn-danger container" style={{backgroundColor:"grey",border:2 +"px solid grey"}}>Signing in..</button>} 
</div>

</form>}


                

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

             <img  style={{height:"auto",width:100+"%",marginTop:-100+"px",opacity:1}}src="Ride-Request.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




    
      
    
  </>)
}

export default Signup