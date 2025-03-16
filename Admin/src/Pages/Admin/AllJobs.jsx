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
         jobs && Array.isArray(jobs) && jobs.map((item, index) =>{
          return(
            <div key={index}>
             
              <div>
                <p>{item.comName}</p>  
                <p>{item.jobTitel}</p>
                <p>{item.technology}</p>

                <p>About the Role:</p>
                <p>{item.discription}</p>
                
                <p>Requirements:</p>
                <p>{item.requirements}</p>
                
              </div>
            </div>
          )
         })
        }
       
      </div>
    </div>
  )
}

export default AllJobs
