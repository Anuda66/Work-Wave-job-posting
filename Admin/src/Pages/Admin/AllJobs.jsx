import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../Context/AdminContext'

function AllJobs() {

  const {jobs, aToken, getAllJobs} =  useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllJobs()
    }
  },[aToken])

  return (
    <div className='m-5 max-h-[80vh] overflow-scroll'>
      <p className='mb-10 text-xl'>All Jobs</p>
      <div className='flex flex-wrap w-full gap-4 pt-5 gap-y-6'>
        {
         jobs && Array.isArray(jobs) && jobs.map((item, index) =>{
          return(
            <div className='flex flex-wrap w-full gap-4 p-5 pt-3 mt-10 border-gray-400 shadow-xl cursor-pointer border-1 rounded-2xl gap-y-6' key={index}>
              <div className='space-y-1.5'>
               <div className='flex items-center gap-5'>
                <img className='w-10 h-10 rounded-full' src={item.image} alt=''/>
                <p className='font-bold text-gray-500'>{item.comName}</p>  
               </div>
               
               <div className='flex gap-5 '>
                  <p className='text-lg font-bold text-gray-600'>{item.jobTitel}</p>
                  <p className='text-base text-purple-700'>{item.technology}</p>
                </div>
                  <p className='text-md '>About the Role:</p>
                  <p className='text-gray-500 text-md'>{item.discription}</p>

                  <p>Requirements:</p>
                  <p className='text-gray-500 text-md'>{item.requirements}</p>
              </div>
            </div>
          )
         })
        }
      </div>
    </div>
  )
}

export default AllJobs
