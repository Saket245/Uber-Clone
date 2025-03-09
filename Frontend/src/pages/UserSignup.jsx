import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import uberLogo from "../Images/uberLogo.png";
import axios from 'axios';
import { UserDataContext } from '../context/userContext';

const UserSignup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const {user,setUser} = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser ={
      fullname:{
       firstname:firstName,
       lastname:lastName
      },
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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

      <h3 className="mt-4">What's your name</h3>
      <div className='d-flex gap-2'>
        <input
          className="rounded w-100 p-2 border-1 inputForm"
          required
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="rounded w-100 p-2 border-1 inputForm"
          required
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>

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
          Create account
        </button>

        <p className="w-100 d-flex justify-content-center mt-2">
          Already have an account? &nbsp;
          <Link to="/login" style={{ textDecoration: "none" }}>Login here</Link>
        </p>
      </form>
      
    </div>
    <div className=" w-100 bottom-0 position-fixed d-flex justify-content-center">
        <p style={{width:"80%", fontSize:"13px"}}>This site is protected by reCAPATCHA and the <span style={{textDecoration:"underline"}}>Google Privacy Policy</span> and <span style={{textDecoration:"underline"}}>Terms of Service apply</span>.</p>
    </div>
    </>
  )
}

export default UserSignup