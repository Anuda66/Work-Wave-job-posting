import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { users } from '../assets/assets';
import { useState } from 'react';

function candidates() {

  const { jobTitle } = useParams()
  const [filterUser, setFilterUser] = useState([])
  const navigate = useNavigate();
  
  const applyFilter = () => {
    if (jobTitle) {
      setFilterUser(users.filter(user => user.JobTitle === jobTitle))
    }
    else {
      setFilterUser(users)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [users, jobTitle])

  return (
    
    <div>
      <p>Find candidates</p>
      
      <div>
        <p>Front-End Engineer</p>
        <p>Back-End Engineer</p>
        <p>Full Stack Engineer</p>
        <p>Software Engineer</p>
        <p>QA Engineer</p>
      </div>
      
      <div className='grid w-full gap-4 grid-cols-auto gap-y-6'>
        {
          filterUser.map((item, index) => (
            <div onClick={()=>navigate(`/candidates/${item._id}`)} key={index} className='p-3 overflow-hidden bg-white  shadow-xl cursor-pointer border-1 rounded-xl max-w-96 group hover:translate-y-[-10px] transition-all duration-500 border-2 border-gray-200'>
              <div className='flex items-center gap-5'>
                <img className='w-10 h-10 rounded-full' src={item.image} alt='' />
                <p className='font-bold text-gray-500'>{item.name}</p>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-lg font-bold text-gray-600'>{item.JobTitle}</p>
                <p className='w-auto px-3 py-1 text-sm text-white bg-purple-400 rounded-full '>{item.skils}</p>
                <p className='text-sm text-gray-500'>{item.about}</p>
                <p className='text-sm text-gray-500'>{item.email}</p>
                
                <p className='w-auto text-sm text-gray-500'>{item.location}</p>
                
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default candidates
