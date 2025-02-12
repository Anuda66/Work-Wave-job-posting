import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

function TopDoctors() {
    
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
        <h1 className='text-3xl font-medium'>Featured Jobs</h1>
        <p className='text-sm text-center stext-sm '>Simply browse through our extensive list of featured jobs.</p>
        <div className='grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate(`/appintment/${item._id}`)} className='overflow-hidden  border-purple-600 border-2  cursor-pointer rounded-xl hover:translate-y-[-10px] transition-all duration-500'
                key={index} >
                    <div className='p-4'> 
                        <div className='flex items-center gap-2 text-sm text-green-500'>     
                        </div>
                        <p className='text-lg font-medium gray-800 text-'>{item.JobTitle}</p><br />
                        <p className='text-sm text-gray-600'>{item.dis}</p><br />
                        <p className='text-sm font-semibold text-purple-700'>{item.techlnolegy}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctor');scrollTo(0,0)}} className='px-12 py-3 mt-10 font-light text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-full md:block hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 hover:shadow-lg'>More</button>
    </div>
  )
}
export default TopDoctors