import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [jobs, setJobs] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
  const [userData, setUserData] = useState(false)
  const [users, setUsers] = useState([])

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

  const getUsers = async () => {
    try{
      const {data} = await axios.get(backendUrl + '')
      if (data.success){
        setUsers(data.users)
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
    getUsers()
  },[])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
