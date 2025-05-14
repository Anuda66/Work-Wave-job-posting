import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  const [jobs, setJobs] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
  const [userData, setUserData] = useState(false)
  const [user, setUser] = useState([])

  const getJobData = async()=>{

    try{
      const {data} = await axios.get(backendUrl + '/api/job/list')
      if (data.success){
        setJobs(data.jobs)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      console.log(error);
      toast.error(error.message)
    }
  }

  const loadUserPrfileData = async () => {
    try{
      const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})
      if (data.success){
        setUserData(data.userData)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      console.log(error);
      toast.error(error.message)
    }
  }

  const getUserDetails = async () => {
    try{
      const {data} = await axios.get(backendUrl + '/api/user/get-usersDetails')
      if (data.success){
        setUser(data.user)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      console.log(error);
      toast.error(error.message)
    }
  }

  const value = {
    jobs,
    user,setUser,
    token,setToken,
    backendUrl,
    userData, setUserData,
    loadUserPrfileData,
  };

  useEffect(()=>{
    getJobData()
  },[])

  useEffect(()=>{
    if (token){
      loadUserPrfileData()
    }
    else{
      setUserData(false)
    }
  },[token])

  useEffect(()=>{
    getUserDetails()
  },[])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
