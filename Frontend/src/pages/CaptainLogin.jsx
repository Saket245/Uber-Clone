import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import uberLogo from "../Images/uberLogo.png";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import axios from 'axios';

const CaptainLogin = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext);
  
    const submitHandler = async (e) => {

      console.log("called");
      e.preventDefault();
      const captain = { email, password};

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
      if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
  
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