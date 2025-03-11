import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import { UserDataContext } from "./context/userContext";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";

function App() {

  return (
    <>
      <div>
       <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-signup" element={<CaptainSignup/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/home" element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
        <Route path="/captain-home" element={<CaptainHome/>}/>
        <Route path="/user/logout" element={<UserLogout/>}/>
       </Routes>
      </div>
    </>
  )
}

export default App;