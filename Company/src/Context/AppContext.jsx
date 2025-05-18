import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [Ctoken, setCToken] = useState(localStorage.getItem('Ctoken') ? localStorage.getItem('Ctoken') : false)
    const [dashData, setDashData] = useState(false)
    const [user, setUser] = useState([])
    const [jobs, setJobs] = useState()

    const getAllJobs = async () => {
        try{
            const {data} = await axios.post(backendUrl + '/api/company/jobList', {}, {headers:{Ctoken}})
            if (data.success){
                setJobs(data.jobs)
                console.log(data.jobs );  
            }
            else{
                toast.error(data.message)
            }
        }
        catch (error){
            toast.error(error.message)
        }
    }

    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/company/dashboard', { headers: { Ctoken } })

            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData);

            }
            else {
                toast.error(data.message)
            }
        }
        catch (error) {
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
    if (!Ctoken) {
        toast.error("Not authenticated");
        return;
    }
    
    try {
        const { data } = await axios.get(backendUrl + '/api/company/user-details', {
            headers: {
                'Ctoken': Ctoken
            }
        });
        if (data.success) {
            setUser(data.user)
        }
        else {
            toast.error(data.message)
        }
    }
    catch (error) {
        console.log(error);
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
    }
}

    const value = {
        backendUrl,
        Ctoken, setCToken,
        dashData, getDashData,
        user,setUser,
        getUserDetails,
        getAllJobs, jobs,setJobs
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider