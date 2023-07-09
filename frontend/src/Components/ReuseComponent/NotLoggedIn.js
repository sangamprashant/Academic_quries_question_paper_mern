import React from 'react'
import { Link, useNavigate } from "react-router-dom";
function NotLoggedIn() {
    const navigate = useNavigate();
  return (
    <div style={{
        marginTop:'70px'
    }}>
      <div className='NotLoggin'>
        <h1>Not Logged in.. </h1>
        <button onClick={()=>{navigate("/signin")}}>Go To Signin..</button>
      </div>
    </div>
  )
}

export default NotLoggedIn
