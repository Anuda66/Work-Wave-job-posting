import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import profileImage from "../assets/prof1.jpg";

function ApplyToJob() {

  const navigate = useNavigate()

  const {jobId} = useParams()
  const {jobs} = useContext(AppContext)

  const [jobInfo,setDocInfo] = useState(null)

  const fetchDocInfo = async()=>{
    const jobInfo = jobs.find(job => job._id === jobId)
    setDocInfo(jobInfo)
    console.log(jobInfo);
  }
  
  useEffect(()=>{
    fetchDocInfo()
  },[jobs,jobId])

  return jobInfo && (
    <div className='p-10 border-gray-300 shadow-xl border-[1.5px] bg-gray-50 rounded-3xl'>
      <div className='my-10'><p className='text-gray-500'>WE ARE HIRING...</p></div>
      <div className='space-y-5'>
        
        <div className='flex items-center gap-5'>
          <img
              className="rounded-full w-9"
              src={profileImage}
              alt="profile image"
            />
          <p className='text-xl text-gray-500'>{jobInfo.companyName}</p>
        </div>
        
        <div className='flex items-center gap-5'>
          <h1 className='text-2xl font-bold'>{jobInfo.JobTitle}</h1>
          <p className='text-base text-purple-800'>{jobInfo.techlnolegy}</p>
        </div>
        
        <hr className='border-[1.5px]'/>
        
        <div>
          <p className='text-lg'>About the Role:</p>
          <p className='text-sm text-gray-500'>{jobInfo.aboutJob}</p>
        </div>
        
        <div className=''>
          <p className='text-lg'>Requirements:</p>
          <p className='text-sm text-gray-500'>{jobInfo.requiremat}</p>
        </div>
        
        <div className='flex items-center justify-center'>
        <button onClick={()=>{navigate('');scrollTo(0,0)}} className='px-12 py-3 mt-10 font-light text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-full md:block hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 hover:shadow-lg'>APPLY NOW</button>
       
        </div>
        
      </div>
    </div>
  )
}

export default ApplyToJob
