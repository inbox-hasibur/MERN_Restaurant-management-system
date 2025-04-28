import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = () => {

    const [currentState, setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='name' required/>}
          <input type="email" placeholder='Email' required/>
          <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button> 
        {
          currState==="Login"
          ?<p>Don't have an account? <span onClick={()=>setCurrentState("Sign Up")}>Sign Up</span></p>
          :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup