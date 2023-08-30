import React,{useState,useEffect} from 'react'
import Userreqitem from './Userreqitem'
import jwt_decode from 'jwt-decode'
import useSWR from "swr";
import Loading from "./Loading";

// const fetcher = (url) => fetch(url).then((res) => res.json());



const Req = (props) => {
  let reqs=[];
  let reqs2=[];
  let reqs3=[];
  const [load,setload]=useState();

  const fetcher = async (url) => {
    const token = localStorage.getItem("token");
    const email = jwt_decode(token).email;
    // console.log(email)
  
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'email': email
      }
    })
    .then((res) => res.json())
    .then((data) => data.reverse()); // Reverse the array here
  };
  const fetcher2 = async (url) => {
    const token = localStorage.getItem("token");
    const email = jwt_decode(token).email;
    // console.log(email)
  
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'email': email
      }
    })
    .then((res) => res.json())
    .then((data) => data.reverse())
    
  };
  const fetcher3 = async (url) => {
    const token = localStorage.getItem("token");
    const email = jwt_decode(token).email;
    // console.log(email)
  
    return fetch(url, {
      method: 'GET',
      headers: {

        'email': "mishrapreyanshu@gmail.com"
      }
    })
    .then((res) => res.json())
    .then((data) => data.reverse()); // Reverse the array here
  };
  
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/api/fetchRequest/request/user",
    fetcher,
    {
      refreshInterval: 1000
    }
  );
  const { data : data2, error : error2, isLoading:isLoading2 } = useSWR(
    "http://localhost:5000/api/fetchRequest/recievedreq/user",
    fetcher,
    {
      refreshInterval: 1000
    }
  );


  const { data : data3, error:error3, isLoading:isLoading3 } = useSWR(
    "http://localhost:5000/api/fetchRequest/confirmedreq/user",
    fetcher,
    {
      refreshInterval: 1000
    }
  );
 


 reqs=data;
 reqs2=data2;
 reqs3=data3;
 
 console.log(reqs);
 


  


      
  
  return (<>
   {/* first window */}
  {props.type==="pending" && 
<div class="row">
{/* {error && alert("error")} */}
    { !props.isAddingData &&data && !isLoading && reqs.map((req)=>{
      return(<Userreqitem type={props.type} destination={req.destination} pickup={req.pickup} time={req.time} date={req.date} req={req}></Userreqitem>)
    })}
    {
       !props.isAddingData&&data&&reqs.length==0 && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><h5>No requests</h5></div>
    }
    
    {
      !data && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
    {
      props.isAddingData && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
    </div>}


    {/* second window */}
  {props.type==="recieved" && 
<div class="row">
{/* {error && alert("error")} */}
    { !props.isAddingData &&data2 && !isLoading2 && reqs2.map((req)=>{
      return(<Userreqitem type={props.type} destination={req.destination} pickup={req.pickup} time={req.time} date={req.date} price={req.price} driver={req.driver} req={req} setload={setload} showAlert={props.showAlert}></Userreqitem>)
    })}
     {
       !props.isAddingData&&data2&&reqs2.length==0 && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><h5>No received offers</h5></div>
    }
    
    {
      !data2&& <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
    {
      props.isAddingData && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
    {
      load && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
    </div>}

    {/* third window */}

  {props.type==="confirmed" && 
<div class="row">
{/* {error3 && alert("error")} */}
    { !props.isAddingData &&data3 && !isLoading3 && reqs3.map((req)=>{
      return(<Userreqitem req={req} type={props.type} destination={req.destination} pickup={req.pickup} time={req.time} date={req.date}driver={req.driver}></Userreqitem>)
    })}
    
    {
      !data3 && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
    {
     !props.isAddingData && data3 &&reqs3.length==0 && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><h5>No Scheduled rides</h5></div>
    }
    {
      props.isAddingData && <div className='d-flex' style={{height:95+"%",width:100+"%",position:"absolute",alignItems:"center",justifyContent:"center"}}><Loading></Loading></div>
    }
    </div>}

  




</>  )
}

export default Req
