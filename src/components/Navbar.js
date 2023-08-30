import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './navbar.css'
import {
  
    RecaptchaVerifier,
    signInWithPhoneNumber,
    onAuthStateChanged,
    
  } from "firebase/auth";
  import { auth } from "./firebase";
  

const Navbar = () => {
   
    let navigate = useNavigate();

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
      }, [location]);

    const handlelogout=()=>{
        localStorage.removeItem("token")
        navigate("/login");

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id='navbar'>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{fontSize:25+"px",margin:`${window.screen.width<360? 0+"px":""}`,marginLeft:100+"px",width:`${window.screen.width<310? 0+"px":""}`}}>CabZEE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {location.pathname!=="/userpanel" && !location.pathname!=="/driverpanel" && <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>}
                        {location.pathname==="/userpanel" && <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/userpanel"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>}
                        {location.pathname==="/driverpanel" && <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/driverpanel"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>}
                        
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/guide"? "active": ""}`} to="/guide">How it works ?</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""} `} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/sharecab"? "active": ""} `} to="/sharecab"> Share a Cab</Link>
                        </li>
                        

                    </ul>
                  
                  <form className="d-flex">
                    {(location.pathname==="/userpanel" || location.pathname==="/driverpanel")&&<div className="btn btn-primary" id="logout" onClick={()=>{
                        auth.signOut();
                        localStorage.removeItem("token")
       
                        console.log("signed out using btn")
                        navigate("/")

                        
                        
                    }}>Logout</div>}
                    
                    
                    </form>
                    {/* <button className="btn btn-primary mx-1" role="button" onClick={handlelogout}>logout</button> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar