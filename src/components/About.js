import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='back_about'>
      <div className="page_about">
      <lottie-player src="https://lottie.host/50ad1184-a8f0-4427-91a7-06ba170df5cb/saaQdbcAyq.json" background='Transparent' speed="1" style={{width: 150+"px", height: 150+"px"}} loop autoplay direction="1" mode="normal"></lottie-player>


          <h1 style={{marginTop:"40px"}}> <b>What is CABZee ? </b></h1>

      </div>
      <hr />
      <div className="page_content">
        <div className="about_card">
          <h6>Cabzee stands as a beacon for economical taxi bookings, ensuring your journeys are light on the pocket. With our unwavering commitment to competitive pricing, you can travel to your destinations with ease, be it near or far. Revel in the simplicity of transparent rates and dependable rides, making cost-effective commuting a reality. Choose Cabzee and experience travel convenience that doesn't break the bank.</h6>

        </div>


      </div>
      
      
    </div>
  )
}

export default About
