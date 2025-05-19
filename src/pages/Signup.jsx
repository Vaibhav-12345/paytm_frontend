import Header from "../components/Header";
import Subheading from "../components/Subheading";
import Input from "../components/Input";
import Button from "../components/Button";
import Footersubheading from "../components/Footersubheading";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../config";
const Signup = () => {
  const [firstName, setfirstName] = useState("");

  const [lastName, setlastName] = useState("");

  const [username, setusername] = useState("");

  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  async function signupHandeler(){
    
    await axios.post(`${BACKEND_URL}api/v1/user/signup`,{
      username:username,
      password:password,
      firstName:firstName,
      lastName:lastName,
    })

    // console.log(firstName,lastName,username,password)
   if(firstName.trim()!=='' && lastName.trim()!=='' && username.trim()!=='' && password.trim()!==''){
     navigate('/')
      return;
   }
 

  }

   

   


  return (
    <div className="h-screen w-screen bg-[#CCD5E2]  flex items-center justify-center">
      <div className="w-80 bg-zinc-50 p-2 rounded-lg">
        <Header text="sign up" />
        <Subheading text="Enter you informatioin to create an account" />

        <Input
          value={firstName}
          setname={setfirstName}
          text="First Name"
          placeholder="enter your first name..."
        />
        <Input
          value={lastName}
          setname={setlastName}
          text="Last Name"
          placeholder="enter your last name..."
        />
        <Input
          value={username}
          setname={setusername}
          text="Email"
          placeholder="enter your email..."
        />
        <Input
          value={password}
          setname={setpassword}
          text="Password"
          placeholder="enter your password..."
        />

        <Button onClick={signupHandeler} text="Sign Up" />

        <Footersubheading text="Already have an account" to="/" />
      </div>
    </div>
  );
};

export default Signup;
