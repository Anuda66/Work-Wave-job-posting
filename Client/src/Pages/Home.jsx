import React from 'react'
import Header from '../Components/Header'
import SpacalityMeny from '../Components/SpacalityMeny'
import TopDoctors from '../Components/TopDoctors'
import LatestJobs from '../Components/LatestJobs'


function Home() {
  return (
    <div>
      <Header/>
      <SpacalityMeny/>
      <TopDoctors/>
      <LatestJobs/>
      
    </div>
  )
}

export default Home
