import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login1 from '../../../Company/src/Pages/Login.jsx'

function Login() {
  
  const {backendUrl, token, setToken} = useContext(AppContext)
  const navigate = useNavigate()
  const [state, setState] = useState("Sing Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try{
      if (state === 'Sing Up'){
        const {data} = await axios.post(backendUrl + '/api/user/register', {name,email,password})
        if (data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }
        else{
          toast.error(data.message)
        }
      }
      else{
        const {data} = await axios.post(backendUrl + '/api/user/login', {email,password})
        if (data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }
        else{
          toast.error(data.message)
        }
      }
    }
    catch(error){
      toast.error(data.message)
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  
  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center ">
      
      <div className="flex flex-col items-center gap-3 p-8 m-auto min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sing Up" ? "Create Account" : "Login"}
        </p>
        
        {state === "Sing Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="w-full p-2 mt-1 border rounded border-zinc-300"
              type="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="w-full p-2 mt-1 border rounded border-zinc-300"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="w-full p-2 mt-1 border rounded border-zinc-300"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        
        <button type="submit" className="w-full pt-2 pb-2 text-base text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-2xl bg-primary hover:bg-purple-800 hover:shadow-lg hover:-translate-y-1 hover:scale-110">
          {state === "Sing Up" ? "Create Account" : "Login"}
        </button>
        
        {state === "Sing Up" ? (
          <p>
            {" "}
            Alrady have account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-purple-500 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Craete an new account?{" "}
            <span
              onClick={() => setState("Sing Up")}
              className="text-purple-500 underline cursor-pointer" 
            >
              Click here
            </span>
          </p>
        )}
        <Link className="w-full p-2 bg-green-400 rounded-lg hover:bg-gray-500 hover:shadow-lg hover:-translate-y-1 hover:scale-110"> 
          <p className="text-base font-bold text-center text-white cursor-pointer ">Craete Company Account </p>
        </Link>
      </div>
    </form>
  );
}

export default Login;
