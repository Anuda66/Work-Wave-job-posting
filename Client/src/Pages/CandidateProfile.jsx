import React, { useEffect } from 'react'
import {AppContext} from '../Context/AppContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { users } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function CandidateProfile() {

  const { userId } = useParams()
  const {users} = useContext(AppContext)

  const [userInfo, setUserInfo] = useState(null)

  const fetchUserInfo = async() => {
    const userInfo = users.find((user) => user._id === userId)
    setUserInfo(userInfo)
    console.log(userInfo);
    
  }

  useEffect(()=>{
    fetchUserInfo()
  },[users,userId])
  
  return (
    <div>
      dfsdfsdf
    </div>
  )
}

export default CandidateProfile
