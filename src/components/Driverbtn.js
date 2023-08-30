import React from 'react'

const Driverbtn = (props) => {
    const {callback2}=props;
  return (
    <div className='buttons' id='dvrbtn'><br />
    {/* <h3 className='text-left'><span className='mx-3 d-block text-left btntext' style={{color:"white",fontSize:"larger",display:"block"}}>driver : </span></h3>
        <br /> */}
      <div className="btn_img"> <lottie-player src="https://lottie.host/67f60d6b-f288-4e1e-8e32-80e9ee7bd7fc/tDU1gDddpJ.json"speed="1" id="btn_img" direction="1" mode="normal" autoplay loop></lottie-player></div>
      <br />
      <br />

   
   <div className='text-left margin ' style={{color:"white"}}>{/* <div>  <button id="a" type='button' ref={ref} backgroundColor="none" class="mx-3"></button> */}
    


    <div className=" btn btn-primary " type='button' style={{height:37+"px"}} onClick={callback2} id='driverbtn' ><span >Sign in </span></div></div>
    </div>
  )
}

export default Driverbtn
