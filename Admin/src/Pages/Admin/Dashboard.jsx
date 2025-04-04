import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { useEffect } from 'react'
import { MdWorkHistory } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { AppContext } from '../../Context/AppContext';

function Dashboard() {
        
  const {aToken, dashData, getDashData} = useContext(AdminContext)

  const {slotDateFormat} = useContext(AppContext)

  useEffect(()=>{
    if(aToken){
      getDashData()
    }
  },[aToken])

  return dashData && (
    <div className='m-5'>
      <p className='text-xl'>Dashboard</p>
      <div className='flex flex-wrap gap-5 mt-8'>
        <div className='flex items-center gap-3 p-4 transition-all bg-white border-2 border-gray-300 cursor-pointer min-w-52 rounded-2xl hover:scale-105 hover:shadow-2xl'>
          <MdWorkHistory className='text-4xl text-purple-700'/>
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.jobs}</p>
            <p className='text-base text-gray-400'>Jobs</p>
          </div>
        </div>
        
        <div className='flex items-center gap-3 p-4 transition-all bg-white border-2 border-gray-300 cursor-pointer min-w-52 rounded-2xl hover:scale-105 hover:shadow-2xl'>
          <FaUserTie  className='text-4xl text-purple-700'/>
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.users}</p>
            <p className='text-base text-gray-400'>Users</p>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='flex items-center gap-2.5 px-4 mt-10 rounded-t border py-2 border-gray-400'>
          <FaAddressBook className='text-2xl text-purple-600'/>
          <p className='font-semibold'>Latest Jobs</p>
        </div>
      </div>
      <div className='pt-4 bg-white border border-t-0 border-gray-400 rounded-b'>
        {
          dashData.latstJobs.map((item, index)=>{
            return(
              <div className='flex items-center justify-between gap-3 px-6 py-3 border-b-2 border-gray-300 hover:bg-gray-200' key={index}>
                <img  src={item.image} alt="" className='w-10 rounded-full'/>
                <div className='flex gap-7'>
                  <p className='font-medium text-gray-600'>{item.comName}</p>
                </div>
                <div>
                <p className='font-medium text-gray-600'>{item.jobTitel}</p>
                <p className='font-medium text-purple-700'>{item.technology}</p>
                </div>
                <div>
                <p>{item.email}</p>
                
                <p>{item.slotDate}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Dashboard
