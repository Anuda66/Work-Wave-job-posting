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
    
      <p>Broude through the docotors speciality.</p>
      <div>
        <div>
          <p>Front-End Engineer</p>
          <p>Back-End Engineer</p>
          <p>Full Stack Engineer</p>
          <p>Software Engineer</p>
          <p>QA Engineer</p>
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
                      <p>{item.requiremat}</p>
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
