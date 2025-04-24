import React, { useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


function CandidateProfile() {

  const { userId } = useParams()
  const { user } = useContext(AppContext)

  const [userInfo, setUserInfo] = useState(null)

  const fetchUserInfo = async () => {
    const userInfo = user.find((user) => user._id === userId)
    setUserInfo(userInfo)
    console.log(userInfo);

  }

  useEffect(() => {
    fetchUserInfo()
  }, [user, userId])

  return (
    <div>
      <div>
        <div className="p-2 border-gray-300 shadow-xl border-[1.5px] bg-gray-50 rounded-2xl pb-10">

          <div className="space-y-5">
            <div className="flex flex-col items-center gap-5 px-10 pt-24 pb-10 bg-purple-400 rounded-2xl md:items-start">
              <img
                className="w-24 rounded-full"
                src={userInfo?.image}
                alt="profile image"
              />
              <div className='flex flex-col items-center justify-between w-full md:flex-row md:items-start'>
                <div>
                <p className="text-2xl font-bold text-white md:text-3xl">{userInfo?.name}</p>
                </div>
                <div className='flex gap-3'>
                  <FaLinkedin className='text-2xl text-white cursor-pointer'/>
                  <FaSquareGithub className='text-2xl text-white cursor-pointer'/>
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-2 px-5">
              <h1 className="text-xl font-bold">{userInfo?.jobTitel}</h1>
              <div className='flex items-center gap-2'>
                <FaLocationArrow className='text-gray-600' />
                <p className="text-base text-gray-600">{userInfo?.location}</p>
              </div>
              <div className='flex items-center gap-2'>
                <MdAttachEmail className='text-gray-600' />
                <p className="text-base text-gray-600">{userInfo?.email}</p>
              </div>
            </div>

            <hr className="border-[1.5px]" />

            <div className='px-5'>
              <p className="text-sm">Web developer and Python enthusiast, I thrive on problem-solving and interactive design. Self-learned in MERN stack development and enthusiastic to React Native</p>
              <p className="text-sm text-gray-500">{userInfo?.discription}</p>
            </div>

            <div className="flex gap-2 px-5">
              <p className="text-sm">Skills:</p>
              <p className="text-sm text-gray-500">.Net, Java, ReactJS</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateProfile
