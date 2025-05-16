import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate, useParams } from 'react-router-dom';

function AllUser() {

  const { JobTitle } = useParams()
  const [filterUser, setFilterUser] = useState([])
  const { user } = useContext(AppContext)
  const navigate = useNavigate();

  const {getUserDetails} =  useContext(AppContext)

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
      <div className='flex flex-col items-center justify-between m-5 md:flex-row'>
        <p className='text-2xl '>Find candidates</p>
        <button onClick={() => navigate('/allUser')} className="px-8 py-3 mx-6 mt-6 font-light text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 hover:shadow-lg md:mt-0">All Candidates</button>
      </div>

      <div className='flex flex-col items-start gap-5 m-5 '>
        <div className='flex flex-row gap-4 text-gray-600 text-md'>

          <p onClick={() => JobTitle === 'Front-End Engineer' ? navigate('/allUser') : navigate('/allUser/Front-End Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border-2 border-gray-300 rounded transition-all cursor-pointer ${JobTitle === "Front-End Engineer" ? "bg-purple-300 text-black" : "bg-white"}`}>Front-End Engineer</p>

          <p onClick={() => JobTitle === 'Back-End Engineer' ? navigate('/allUser') : navigate('/allUser/Back-End Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border-2 border-gray-300 rounded transition-all cursor-pointer ${JobTitle === "Back-End Engineer" ? "bg-purple-300 text-black" : "bg-white"}`}>Back-End Engineer</p>

          <p onClick={() => JobTitle === 'Full Stack Engineer' ? navigate('/allUser') : navigate('/allUser/Full Stack Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border-2 border-gray-300 rounded transition-all cursor-pointer ${JobTitle === "Full Stack Engineer" ? "bg-purple-300 text-black" : "bg-white"}`}>Full Stack Engineer</p>

          <p onClick={() => JobTitle === 'Software Engineer' ? navigate('/allUser') : navigate('/allUser/Software Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border-2 border-gray-300 rounded transition-all cursor-pointer ${JobTitle === "Software Engineer" ? "bg-purple-300 text-black" : "bg-white"}`}>Software Engineer</p>

          <p onClick={() => JobTitle === 'QA Engineer' ? navigate('/allUser') : navigate('/allUser/QA Engineer')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border-2 border-gray-300 rounded transition-all cursor-pointer ${JobTitle === "QA Engineer" ? "bg-purple-300 text-black" : "bg-white"}`}>QA Engineer</p>
        </div>

        <div className='grid grid-cols-3 gap-2 gap-y-6'>
          {
            filterUser.map((item, index) => (
              <div onClick={() => navigate(`/candidateProfile/${item._id}`)} key={index} className='p-3 overflow-hidden bg-white  shadow-xl cursor-pointer border-1 rounded-xl max-w-96 group hover:translate-y-[-10px] transition-all duration-500 border-2 border-gray-200'>
                <div className='flex items-center gap-5'>
                  <img className='w-10 h-10 rounded-full' src={item.image} alt='' />
                  <p className='font-bold text-gray-500'>{item.name}</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <p className='text-lg font-bold text-gray-600'>{item.jobTitel}</p>
                  {/*<p className='w-auto px-3 py-1 text-sm text-white bg-purple-400 rounded-full '>{item.skils}</p>*/}
                  <p className='w-auto px-3 py-1 text-sm text-white bg-purple-400 rounded-full '>.Net, Java, ReactJS</p>
                  {/*<p className='text-sm text-gray-500'>{item.about}</p>*/}
                  <p className='text-sm text-gray-500'>Web developer and Python enthusiast, I thrive on problem-solving and interactive design. Self-learned in MERN stack development and enthusiastic to React Native</p>
                  <p className='text-sm font-bold text-gray-500'>{item.email}</p>
                  <p className='w-auto text-sm font-bold text-gray-500'>{item.location}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>    
    </div>
  )
}

export default AllUser
