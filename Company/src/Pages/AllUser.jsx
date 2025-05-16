import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate, useParams } from 'react-router-dom';

function AllUser() {

  const { JobTitle } = useParams()
  const [filterUser, setFilterUser] = useState([])
  const { user } = useContext(AppContext)
  const navigate = useNavigate();

  const applyFilter = () => {
    if (JobTitle) {
      setFilterUser(user.filter(user => user.jobTitel === JobTitle))
    }
    else {
      setFilterUser(user)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [user, JobTitle])

  return (
    <div>
      <div className='flex flex-col justify-between my-10 md:flex-row'>
        <p className='text-lg font-bold text-gray-600 '>Find candidates</p>
        <button onClick={() => navigate('/allUser')} className="px-8 py-3 mx-6 mt-6 font-light text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 hover:shadow-lg md:mt-0">All Candidates</button>
      </div>

      
    </div>
  )
}

export default AllUser
