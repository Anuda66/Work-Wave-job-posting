import React from 'react'
import AboutImage from '../assets/about.jpg'

function About() {
  return (
    <div>
      <div className='pt-10 text-2xl text-center text-gray-500 '>
        <p>ABOUT <span className='font-medium text-gray-700'>US</span></p>
      </div>
      <div className='flex flex-col my-10 md:flex-row gap-14'>
        <img className='w-full md:max-w-[360px]' src={AboutImage} 
        alt="" />
        <div className='flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-2/4'>
          <p>
          At Work-Wave, our mission is to bridge the gap between job seekers and employers by offering an intuitive and efficient platform for job searching and recruitment. Whether you're a fresh graduate seeking your first role or a company looking to hire top talent quickly, we provide all the tools you need to succeed. Our system is designed to streamline the job application process, from generating professional CVs to offering personalized job recommendations.
          </p>
          <p>
          Founded with the vision of improving the traditional job search experience, we leverage the latest technology, including machine learning, to match candidates with relevant opportunities. Employers can quickly find qualified applicants, and job seekers benefit from real-time alerts and a user-friendly platform to apply for jobs that match their skills and preferences.
          </p>
        </div>
      </div>
      <div className='my-4 text-xl'>
          <h2>WHY <span className='text-gray-700 font-semi-bold'></span> CHOOSE US</h2>
      </div>
      <div className='flex flex-col my-10 mb-20 md:flex-row'>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-purple-600 hover:text-white cursor-pointer duration-700 '>
            <b>EFFICIENCY:</b>
            <p>At Work-Wave, our mission is to bridge the gap between job seekers and employers by offering an intuitive and efficient platform for job searching and recruitment. </p>
          </div>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-purple-600 hover:text-white cursor-pointer duration-700 '>
            <b>CONVENIENCE:</b>
            <p>Whether you're a fresh graduate seeking your first role or a company looking to hire top talent quickly, we provide all the tools you need to succeed. </p>
          </div>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-purple-600 hover:text-white cursor-pointer duration-700 '>
            <b>PERSONALIZATION:</b>
            <p>Our system is designed to streamline the job application process, from generating professional CVs to offering personalized job recommendations.</p>
          </div>
        </div>
    </div>
  )
}

export default About
