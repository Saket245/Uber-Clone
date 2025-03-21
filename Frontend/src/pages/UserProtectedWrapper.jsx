import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from "../context/userContext";
import axios from 'axios';


const UserProtectedWrapper = ({children}) => {

  const navigate = useNavigate();
  const token =  localStorage.getItem("token");
  const {user, setUser} = useContext(UserDataContext);
  const [Isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if(response.status == 200){
      setUser(response.data.user);
      setIsLoading(false);
    }
  }).catch((error) => {
    console.log(error);
    localStorage.removeItem("token");
    navigate("/login");
  });

  if(Isloading){
    return <div>Loading...</div>
  }

  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper