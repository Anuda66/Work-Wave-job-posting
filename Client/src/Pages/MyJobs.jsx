import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext'

function MyJobs() {

  const { userData, jobs } = useContext(AppContext)
  const navigate = useNavigate()

  // Filter jobs that match the user's job title
  const matchingJobs = jobs.filter(
    job => userData?.jobTitel === job.jobTitel
  );

  return (
    <div>
      <div className='flex flex-col justify-between '>
        <div className='flex flex-col items-center justify-between my-10 md:flex-row'>
          <h2 className='text-lg font-bold text-gray-600 '>Jobs Matching Your Title ({userData?.jobTitel})</h2>
          <button onClick={() => navigate('/jobs')} className="px-8 py-3 mx-6 mt-6 font-light text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 hover:shadow-lg md:mt-0">All Jobs</button>
        </div>

        <div className='grid w-full gap-4 grid-cols-auto gap-y-6'>
          {matchingJobs.length > 0 ? (
            matchingJobs.map((item, index) => (
              <div onClick={() => navigate(`/AppliedToJob/${item._id}`)} className='p-3 overflow-hidden bg-white  shadow-xl cursor-pointer border-1 rounded-xl max-w-96 group hover:translate-y-[-10px] transition-all duration-500 border-2 border-gray-200'
                key={index} >
                <div className='space-y-1.5'>
                  <div className='flex items-center gap-5'>
                    <img className='w-10 h-10 rounded-full' src={item.image} alt='' />
                    <p className='font-bold text-gray-500'>{item.comName}</p>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <p className='text-lg font-bold text-gray-600'>{item.jobTitel}</p>
                    <p className='text-base text-purple-700'>{item.technology}</p>
                  </div>
                  <p className='text-md '>About the Role:</p>
                  <p className='text-sm text-gray-500'>{item.discription}</p>

                  <p>Requirements:</p>
                  <p className='text-sm text-gray-500'>{item.requirements}</p>
                </div>
              </div>
            ))
          ) : (
            <div className='flex items-center justify-center w-full py-3 rounded-lg bg-slate-100'>
              <p className='font-bold text-red-600'>No matching jobs found</p>
            </div>
            
            
          )}
        </div>
      </div>
    </div>
  )
}

export default MyJobs
