import React, { useState } from "react";
import profile from "../../assets/upload_area.png";

function AddJobs() {

  const [proIma, setProImage] = useState(false)
  const [comName, setComName] = useState('')
  const [jobTitel, setJobTitel] = useState('Front-End Engineer')
  const [technology, setTechnology] = useState('')
  const [discription, setDiscription] = useState('')
  const [requirements, setRequirements] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')





  
  return (
    <form className="w-full m-5 ">
      <p className="mb-3 text-lg font-medium ">Add Jobs</p>

      <div className="w-full max-w-4xl px-8 py-8 bg-white border rounded-xl max-h-[80vh] overflow-y-scroll border-gray-300 shadow-xl items-center justify-center">
        
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="job-img">
            <img className="w-16 cursor-pointer rounded-xl " src={proIma ? URL.createObjectURL(proIma) : profile} alt="Image" />
          </label>
          <input onChange={(e)=> setProImage(e.target.files[0])} type="file" id="job-img" hidden />
          <p>Uplode Profile <br/>Image</p>
        </div>

        <div className="flex flex-col items-start gap-10 space-y-3 text-gray-600">
         <div className="w-full ">
            <div className="flex flex-col flex-1 gap-1">
              <p>Compay Name</p>
              <input className="px-3 py-2 border border-purple-600 rounded" type="text" placeholder="Ex : Microsoft" required />
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <p>Job Title</p>
              <select className="px-3 py-2 border border-purple-600 rounded" name="" id="">
                <option value="Front-End Engineer">Front-End Engineer</option>
                <option value="Back-End Engineer">Back-End Engineer</option>
                <option value="Full Stack Engineer">Full Stack Engineer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="QA Engineer">QA Engineer</option>
              </select>
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <p>Technology</p>
              <input className="px-3 py-2 border border-purple-600 rounded" type="text" placeholder="Ex : .NEt, React Js" required />
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <p>Discription: </p>
              <textarea className="px-3 py-2 border border-purple-600 rounded" placeholder="Write about job details..." rows={5} />
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <p>Requirements: </p>
              <textarea className="px-3 py-2 border border-purple-600 rounded" placeholder="Write about requirements..." rows={5} />
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <p>Email: </p>
              <input className="px-3 py-2 border border-purple-600 rounded" type="email" placeholder="Ex : abc@gmail.com" />
            </div>
            
            <div className="flex flex-col flex-1 gap-1">
              <p>Link: </p>
              <input className="px-3 py-2 border border-purple-600 rounded" type="url" id="Job-id" placeholder="Ex : http://www.abc.com" />
            </div>
          </div>
          
         
          </div>
          <div className="flex justify-between">
          <button className="px-10 py-3 mt-4 text-white bg-green-400 rounded-full cursor-pointer hover:bg-green-500">Add Job</button>
          
          <button className="px-10 py-3 mt-4 text-white bg-red-600 rounded-full cursor-pointer hover:bg-red-800" type="reset">Clear</button>
          </div>
      </div>
    </form>
  );
}

export default AddJobs;
