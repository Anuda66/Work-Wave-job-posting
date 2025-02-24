import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AppContext} from '../Context/AppContext'

function Jobs() {

  const {JobTitle} = useParams()
  const [filterJob, setFilterJob] = useState([])
  const {jobs} = useContext(AppContext)
  const navigate = useNavigate()

  const applyFilter = () => {
    if (JobTitle){
      setFilterJob(jobs.filter(job => job.JobTitle === JobTitle))
    }
    else{
      setFilterJob(jobs)
    }
  } 

  useEffect(()=>{
    applyFilter()
  },[jobs,JobTitle])

  return (
    <div>
      <div className='flex flex-col justify-between my-10 md:flex-row'>
        <p className='text-lg font-bold text-gray-600 '>Broude through the job category.</p>
        <button onClick={()=>navigate('/jobs')} className="px-8 py-3 mx-6 mt-6 font-light text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 hover:shadow-lg md:mt-0">All Jobs</button>
      </div>
      <div className='flex flex-col items-start gap-5 mt-5 sm:flex-row '>
        <div className='flex flex-col gap-4 text-gray-600 text-md'>
          
          <p onClick={()=>JobTitle === 'Front-End Engineer' ? navigate('/jobs') : navigate('/jobs/Front-End Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-e-gray-300 rounded transition-all cursor-pointer ${JobTitle === "Front-End Engineer" ? "bg-purple-300 text-black" : ""}`}>Front-End Engineer</p>
          
          <p onClick={()=>JobTitle === 'Back-End Engineer' ? navigate('/jobs') : navigate('/jobs/Back-End Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-e-gray-300 rounded transition-all cursor-pointer ${JobTitle === "Back-End Engineer" ? "bg-purple-300 text-black" : ""}`}>Back-End Engineer</p>
          
          <p onClick={()=>JobTitle === 'Full Stack Engineer' ? navigate('/jobs') : navigate('/jobs/Full Stack Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-e-gray-300 rounded transition-all cursor-pointer ${JobTitle === "Full Stack Engineer" ? "bg-purple-300 text-black" : ""}`}>Full Stack Engineer</p>
          
          <p onClick={()=>JobTitle === 'Software Engineer' ? navigate('/jobs') : navigate('/jobs/Software Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-e-gray-300 rounded transition-all cursor-pointer ${JobTitle === "Software Engineer" ? "bg-purple-300 text-black" : ""}`}>Software Engineer</p>
          
          <p onClick={()=>JobTitle === 'QA Engineer' ? navigate('/jobs') : navigate('/jobs/QA Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-e-gray-300 rounded transition-all cursor-pointer ${JobTitle === "QA Engineer" ? "bg-purple-300 text-black" : ""}`}>QA Engineer</p>
          
        </div>
        <div className='grid w-full gap-4 grid-cols-auto gap-y-6'>
          {
            filterJob.map((item,index)=>(
              <div onClick={()=>navigate(`/AppliedToJob/${item._id}`)} className='overflow-hidden  border-purple-600 border-2  cursor-pointer rounded-xl hover:translate-y-[-10px] transition-all duration-500 shadow-lg'
              key={index} >
                  <div className='p-4'>
                      <p className='pb-3 text-lg font-medium gray-800'>{item.JobTitle}</p>
                      <p className='pb-2 text-base text-gray-600'>{item.companyName}</p>
                      <p className='pb-2 text-sm stext-sm'>{item.dis}</p>
                      <p className='pb-2 text-sm font-semibold text-purple-700'>{item.techlnolegy}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Jobs
