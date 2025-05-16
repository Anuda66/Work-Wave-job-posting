import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
    const { backendUrl, Ctoken, setCToken } = useContext(AppContext)
    const navigate = useNavigate()
    const [state, setState] = useState('sing up')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'sing up') {
                const { data } = await axios.post(backendUrl + '/api/company/register', { name, email, password });
                if (data.success) {
                    localStorage.setItem('Ctoken', data.Ctoken);
                    setCToken(data.Ctoken);
                }
                else {
                    toast.error(data.message);
                }
            }
            else {
                const { data } = await axios.post(backendUrl + '/api/company/login', { email, password })
                if (data.success) {
                    localStorage.setItem('Ctoken', data.Ctoken)
                    setCToken(data.Ctoken)
                }
                else {
                    toast.error(data.message)
                }
            }
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    };
    useEffect(()=>{
    if(Ctoken){
      navigate('/')
    }
  },[Ctoken])

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex item-center'>
            <div className="flex flex-col items-center gap-3 p-8 m-auto min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg">
                <p className="text-2xl font-semibold"> {state === "sing up" ? "Create Company Account  " : "Company Login"} </p>
                {state === "sing up" && (
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
                <button type="submit" className="w-full pt-2 pb-2 text-base text-white transition duration-300 ease-in-out delay-150 bg-purple-500 cursor-pointer rounded-2xl bg-primary hover:bg-purple-800 hover:shadow-lg hover:-translate-y-1 hover:scale-110">
                    {state === "sing up" ? "Create Account" : "Login"}
                </button>
                {state === "sing up" ? (
                    <p>
                        {" "}
                        Already have account?{" "}
                        <span
                            onClick={() => setState("login")}
                            className="text-purple-500 underline cursor-pointer"
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p>
                        Create a new account?{" "}
                        <span
                            onClick={() => setState("sing up")}
                            className="text-purple-500 underline cursor-pointer"
                        >
                            Click here
                        </span>
                    </p>
                )}
            </div>
        </form>
    )
}

export default Login;