import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import profile from '../assets/upload_icon.png'
import axios from "axios";
import { toast } from "react-toastify";

function Myprofile() {
  
  const {userData, setUserData, token, backendUrl, loadUserPrfileData} = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {
    
    try{
      
      const formData = new FormData()
      
      formData.append ('name', userData.name)
      formData.append ('phone', userData.phone)
      formData.append ('location', userData.location)
      formData.append ('gender', userData.gender)
      formData.append ('jobTitel', userData.jobTitel)
      formData.append ('dob', userData.dob)

      image && formData.append ('image', image)
      
      console.log("Request URL:", backendUrl + '/api/user/update-profile');
      const {data} = await axios.post(backendUrl + '/api/user/update-profile', formData,{headers:{token}})

      if (data.success){
        toast.success(data.message)
        await loadUserPrfileData()
        setIsEdit(false)
        setImage(false)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      console.log(error);
      toast.error(error.message)
    }
  }
  
  return userData && (
    <div className="flex flex-col max-w-lg gap-2 p-10 text-sm border-2 shadow-xl bg-gray-50 rounded-2xl">
      
      {
        isEdit
        ? <label htmlFor="image">
          <div className="relative inline-block cursor-pointer">
            <img className="rounded-full opacity-85 w-36 " src={image ? URL.createObjectURL(image) : userData.image} alt="profile image" />
            <img className="absolute w-10 bottom-12 right-12" src={image ? '' : profile} alt='' />
          </div>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden/>
          
        </label>
        : <img className="rounded-full w-36" src={userData.image} alt="Profile Image"/>
      }

      
      {isEdit ? (
        <input
          className="px-3 py-1 mt-4 text-3xl font-medium border-2 border-purple-400 rounded-lg max-w-96"
          value={userData.name}
          type="text"
          onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="mt-4 text-3xl font-medium text-netural-800">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="mt-3 underline text-netural-500">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-netural-700">
          <p>Email id : </p>
          <p>{userData.email}</p>
          <p>Phone : </p>
          {isEdit ? (
            <input
            className="p-1 border-2 border-purple-400 rounded-lg"
              value={userData.phone}
              type="text"
              onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>location : </p>
          {isEdit ? (
              <input
              className="p-1 border-2 border-purple-400 rounded-lg"
              value={userData.location}
              type="text"
              onChange={(e) =>
              setUserData((prev) => ({ ...prev, location: e.target.value }))
              }
            />
          ) : (
            <p>{userData.location} </p>
          )}
        </div>
      </div>
      <div>
        <p className="mt-3 underline text-netural-500">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-netural-700">
          <p>Gender :</p>
          {isEdit ? (
            <select
            className="p-1 border-2 border-purple-400 rounded-lg"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p>Job Field :</p>
          {isEdit ? (
            <select
            className="p-1 border-2 border-purple-400 rounded-lg"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, jobTitel: e.target.value }))
              }
              value={userData.jobTitel}
            >
              <option value="Front-End Engineer">Front-End Engineer</option>
              <option value="Back-End Engineer">Back-End Engineer</option>
              <option value="Full Stack Engineer">Full Stack Engineer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="QA Engineer">QA Engineer</option>
            </select>
          ) : (
            <p>{userData.jobTitel}</p>
          )}

          <p>Birthday : </p>
          {isEdit ? (
            <input
            className="p-1 border-2 border-purple-400 rounded-lg"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="px-8 py-2 text-white transition-all bg-green-500 border rounded-full hover:text-white hover:bg-purple-800 hover:shadow-lg"
            onClick={updateUserProfileData}>
            Save Changes
          </button>
        ) : (
          <button
            className="px-8 py-2 text-white transition-all bg-red-600 border rounded-full hover:text-white hover:bg-purple-800 hover:shadow-lg"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Myprofile;
