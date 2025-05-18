import React,  { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'

function AllJobs() {

  const {jobs, Ctoken, getAllJobs} =  useContext(AppContext)

  useEffect(() => {
    if (Ctoken) {
      getAllJobs()
    }
  },[Ctoken])

  return (
    <div className='m-5 max-h-[90vh] overflow-scroll'>
      <p className='text-xl '>All Jobs</p>
      <div className='flex flex-wrap w-full gap-4 pt-5 gap-y-6 '>
        {
         jobs && Array.isArray(jobs) && jobs.map((item, index) =>{
          return(
            <div className='p-3 overflow-hidden bg-white border-gray-300 shadow-xl cursor-pointer border-1 rounded-xl max-w-96 group hover:translate-y-[-10px] transition-all duration-500' key={index}>
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
                  <p className='text-sm text-gray-500'>{item.discription}</p>

                  <p>Requirements:</p>
                  <p className='text-sm text-gray-500'>{item.requirements}</p>
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
