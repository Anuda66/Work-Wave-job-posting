import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [jobs, setJobs] = useState([])

  const value = {
    jobs,
  };

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

  useEffect(()=>{
    getJobData()
  },[])



  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
