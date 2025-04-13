import React from 'react'
import {AppContext} from '../Context/AppContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { users } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function CandidateProfile() {

  const { userId } = useParams()
   const {users} = useContext(AppContext)
  
  return (
    <div>
      vvsdv
    </div>
  )
}

export default CandidateProfile
