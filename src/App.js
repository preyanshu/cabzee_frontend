import './App.css';
import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Navbar from './components/Navbar';
import  Home  from './components/Home';
import Userpanel from './components/Userpanel';
import Driverpanel from './components/Driverpanel';
import Signup from './components/Signup';
import {
  
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  
} from "firebase/auth";
import { auth } from "./components/firebase";
import About from './components/About';
import Guide from './components/Guide';
import Sharecab from './components/Sharecab';
import Alert from './components/Alert';





function App() {
  const [alert, setAlert] = useState(null);
  const [displayalert, setdisplayalert] = useState(false);

  const showAlert = (message, type)=>{
    setdisplayalert(true)
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
        setdisplayalert(false)
    }, 2500);
}
  const[data,setdata]=useState(0);
  // const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,(info)=>{
      if(info){
        setdata(1);

      }
      else{
        setdata(0);
        // navigate("/")

      }
      
     
      
      
      

    })
    // auth.signOut().then(()=>{
    //   console.log("signed out")

    // });

    

  },[])


  
  return (
     <>
     
        <Router>
        <div data-aos="fade-down"> <Navbar  /></div>
         
          <Alert alert={alert} displayalert={displayalert}/>
          
          
            <Routes>
              <Route exact path="/" element={<Home  showAlert={showAlert}/>} />
              <Route exact path="/userpanel" element={<Userpanel showAlert={showAlert}/>} />
              <Route exact path="/driverpanel" data={data} element={<Driverpanel showAlert={showAlert}></Driverpanel>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}></Signup>} />
              <Route exact path="/about" element={<About></About>} />
              <Route exact path="/guide" element={<Guide></Guide>} />
              <Route exact path="/sharecab" element={<Sharecab></Sharecab>} />
              
              
             
             
            </Routes>
          
        </Router>
      
    </>
  );
}

export default App;