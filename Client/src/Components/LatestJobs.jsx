import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';

function LatestJobs() {

  const navigate = useNavigate();
  const {jobs} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
     <h1 className='text-3xl font-medium'>Latest Job Openings</h1>
     <p className='text-sm text-center stext-sm '> Find your dream job & earn from world leading brands.</p>
     <div className='grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0'>
        {
        jobs.slice(0,10).map((item,index)=>( 
            <div onClick={()=>{navigate(`/AppliedToJob/${item._id} `);scrollTo(0,0)}} className='p-3 overflow-hidden bg-white border-gray-200 shadow-xl cursor-pointer border-1 rounded-xl max-w-96 group hover:translate-y-[-10px] transition-all duration-500 border-2 '
            key={index} >
                <div className='space-y-1.5'>
               <div className='flex items-center gap-5'>
                <img className='w-10 h-10 rounded-full' src={item.image} alt=''/>
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
        ))}
     </div>
     <button onClick={()=>{navigate('/jobs');scrollTo(0,0)}} className='px-12 py-3 mt-10 font-light text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-full md:block hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 hover:shadow-lg'>More</button>
    </div>
  )
}

export default LatestJobs
