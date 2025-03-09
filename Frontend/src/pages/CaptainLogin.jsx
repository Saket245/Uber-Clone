import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import uberLogo from "../Images/uberLogo.png";

const CaptainLogin = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData,setCaptainData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({email:email,password:password});
  
      setEmail("");
      setPassword("");
    }

  return (
    <>
    <div className="p-3">
      <div>
        <img
          className="logo"
          style={{ marginLeft: "-15px" }}
          src={uberLogo}
          alt="logo"
        />
      </div>
      <form onSubmit={submitHandler}>
        <h3 className="mt-4">What's your email</h3>
        <input
          className="rounded w-100 p-2 border-1 inputForm"
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3 className="mt-4">Enter Password</h3>
        <input
          className="rounded w-100 p-2 border-1 inputForm"
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type='submit'
          className="btn btn-black mt-4 w-100"
          style={{ backgroundColor: "black", color: "white", fontSize: "17px" }}
        >
          Login
        </button>

        <p className="w-100 d-flex justify-content-center mt-2">
          Join a fleet? &nbsp;
          <Link to="/captain-signup" style={{ textDecoration: "none" }}>Register as a Captain</Link>
        </p>
      </form>
      
    </div>
    <div className="w-100 d-flex justify-content-center">
    <Link to="/login" className="btn bottom-0 position-fixed mb-4" style={{ backgroundColor: "#d5622d", color: "white", fontSize: "17px", width:"90%" }}>Sign in as User</Link>
    </div>
    </>
  )
}

export default CaptainLogin