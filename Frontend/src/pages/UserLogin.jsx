import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import uberLogo from "../Images/uberLogo.png";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user,setUser} = useContext(UserDataContext);
  
    const navigate = useNavigate();
  

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
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
         type="submit"
          className="btn btn-black mt-4 w-100"
          style={{ backgroundColor: "black", color: "white", fontSize: "17px" }}
        >
          Login
        </button>

        <p className="w-100 d-flex justify-content-center mt-2">
          New here? &nbsp;
          <Link to="/signup" style={{ textDecoration: "none" }}>Create new Account</Link>
        </p>
      </form>
      
    </div>
    <div className="w-100 d-flex justify-content-center">
    <Link to="/captain-login" className="btn bottom-0 position-fixed mb-4" style={{ backgroundColor: "#18cb18", color: "white", fontSize: "17px", width:"90%" }}>Sign in as Captain</Link>
    </div>
    </>
  );
};

export default UserLogin;
