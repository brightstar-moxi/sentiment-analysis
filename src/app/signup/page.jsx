
"use client"
import React, {useContext, useEffect, useState } from 'react'
import Image from "next/image";
// import Image1 from '/public/pic1.png'
import Image2 from '/public/werty.png';
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { registerNewUser } from "@/services/register";




const initialFormData = {
  name: "",
  email: "",
  password: "",
  
};


const signup = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const { pageLevelLoader, setPageLevelLoader , isAuthUser } = useContext(GlobalContext);
// const [values, setValues] = useState({
//   name: '',
//   email: '',
//   password: '',
// })

function isFormValid() {
  return formData &&
    formData.name &&
    formData.name.trim() !== "" &&
    formData.email &&
    formData.email.trim() !== "" &&
    formData.password &&
    formData.password.trim() !== ""
    ? true
    : false;
}
console.log(isFormValid());

async function handleRegisterOnSubmit() {
  setPageLevelLoader(true);
 const data = await registerNewUser(formData);

 if (data.success) {
   toast.success(data.message, {
     position: toast.POSITION.TOP_RIGHT,
   });
    setIsRegistered(true);
   // setPageLevelLoader(false);
   setFormData(initialFormData);
 } else {
   toast.error(data.message, {
     position: toast.POSITION.TOP_RIGHT,
   });
    setPageLevelLoader(false);
   setFormData(initialFormData);
 }

 console.log(data);
}
    
  return (
    <div className="relative h-screen w-full">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image 
        src={Image2} 
        alt="Background Image" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
      />
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content on Top of the Background */}
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-[#ffffffad] p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
      <div className="bg-[#ffffff86] p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
            onChange={e => setFormData({...formData, name:e.target.value})}
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
            onChange={e => setFormData({...formData, email:e.target.value})}

              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
            onChange={e => setFormData({...formData, password:e.target.value})}

              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className={'w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 '}
              disabled={!isFormValid()}
              onClick={handleRegisterOnSubmit}
          >
            {pageLevelLoader ? (
                      <ComponentLevelLoader
                        text={"Registering"}
                        color={"#ffffff"}
                        loading={pageLevelLoader}
                      />
                    ) : (
                      "Register"
                    )}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  </div>

</div>
  )
}

export default signup