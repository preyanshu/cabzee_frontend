import React from 'react'

function Alert(props) {
   
    return (
        <div className="">
            {props.displayalert && <div data-aos="fade-down" style={{height: '120px',position:"fixed",top:0+"px",width:100+"vw",transition:0.3+"s",display:"block",zIndex:"+10000"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           {/* <strong>{capitalize(props.alert.type)}</strong>:   */}
           {props.alert.msg} 
        </div>}
        </div>}
            {!props.displayalert && <div data-aos="fade-down" style={{height: '120px',position:"fixed",top:0+"px",width:100+"vw",transition:0.3+"s",display:"none",zIndex:"+10000"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           {/* <strong>{capitalize(props.alert.type)}</strong>:   */}
           {props.alert.msg} 
        </div>}
        </div>}
        
              
        </div>
      
    )
}

export default Alert