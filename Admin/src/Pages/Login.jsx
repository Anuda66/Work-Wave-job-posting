import React, { useContext } from 'react'
import { useState } from 'react'
import { AdminContext } from '../Context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Login() {

  const [state, setState] = useState('Admin')
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setAToken, backendUrl} = useContext(AdminContext)

  const navigate = useNavigate()

  const onSubmitHandler = async(event) => {

    event.preventDefault() // when submit form not reloade page.

    try{
      if (state === 'Admin'){
        const {data} = await axios.post(backendUrl + '/api/admin/login',{email, password})
        if(data.success){
          localStorage.setItem('aToken', data.token)
          setAToken(data.token);
        }
        else{
          toast.error(data.message)
        }
      }
      else{
        
      }
        
    }
    catch (error){
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center' >
      <div className='flex flex-col items-start gap-3 p-8 m-auto min-w-[340px] sm:min-w-96 border rounded-2xl text-gray-700 tex-sm shadow-lg border-gray-200'>
        <p className='m-auto text-2xl font-semibold '><span className='text-purple-500'>{state}</span> Login</p>

        <div className='w-full'>
          <p className='text-sm text-gray-600'>Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full p-2 mt-1 text-sm text-gray-600 border border-gray-300 rounded-md' type="email" required/>
        </div>

        <div className='w-full'>
          <p className='text-sm text-gray-600'>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full p-2 mt-1 text-sm text-gray-600 border border-gray-300 rounded-md' type="password" required/>
        </div>

        <button onClick={()=> navigate('/admin-dashborad')} className='w-full pt-2 pb-2 text-base text-white transition duration-300 ease-in-out delay-150 bg-purple-500 cursor-pointer rounded-2xl bg-primary hover:bg-purple-800 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>Login</button>

        {
          state === 'Admin'
          ? <p className='text-sm text-gray-600'>Company Login?  <span className='text-purple-600 underline cursor-pointer' onClick={()=>setState('Company')}>Click here</span> </p>
          : <p className='text-sm text-gray-600'>Admin Login?  <span className='text-purple-600 underline cursor-pointer' onClick={()=>setState('Admin')}>Click here</span> </p>
        }

      </div>
    </form>
  )
}

export default Login
