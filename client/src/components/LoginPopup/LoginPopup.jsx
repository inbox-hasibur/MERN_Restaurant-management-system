import React from 'react'
import './LoginPopup.css'

const LogInpopUp = () => {

    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>Log In</h2>
        </div>
      </form>
    </div>
  )
}

export default LogInpopUp