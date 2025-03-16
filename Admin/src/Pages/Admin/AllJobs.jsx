import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../Context/AdminContext'

function AllJobs() {

  const {jobs, aToken, getAllJobs} =  useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllJobs()
    }
  },[aToken])

  return (
    <div>
      <p>All Jobs</p>
      <div>
        {
         jobs.map((item, index) =>{
          return(
            <div>
             
            </div>
          )
         })
        }
       
      </div>
    </div>
  )
}

export default AllJobs
