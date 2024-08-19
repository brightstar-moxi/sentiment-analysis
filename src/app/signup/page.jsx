
 "use client"
import React, {useState } from 'react'
import Image from "next/image";
// import Image1 from '/public/pic1.png'
import Image2 from '/public/werty.png';
import { registerNewUser } from "@/services/register";
import { useRouter } from 'next/navigation';

const initialFormData = {
  name: "",
  email: "",
  password: "",
  role: "students",
};

export default function Signup  ()  {
  const [formData, setFormData] = useState({
    initialFormData
  });
  const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await registerNewUser(formData);
      
      const data = await res.json();

      if (res.ok) {
        // Registration successful, redirect or show success message
        router.push('/login');
      } else {
        // Handle errors (e.g., email already taken)
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

    
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
    <div className=" bg-[#ffffffad] p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105   ">
      <div className="bg-[#ffffff86] p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
               id="name"
               name="name"
               type="text"
               value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ${loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
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
  );
}













// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   // const [error, setError] = useState('');
//   // const [loading, setLoading] = useState(false);
//   // const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setError('');

//   //   try {
//   //     const res = await fetch('/api/register', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const data = await res.json();

//   //     if (res.ok) {
//   //       // Registration successful, redirect or show success message
//   //       router.push('/login');
//   //     } else {
//   //       // Handle errors (e.g., email already taken)
//   //       setError(data.message || 'Registration failed');
//   //     }
//   //   } catch (error) {
//   //     setError('Something went wrong. Please try again.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };









//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
//         {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}
//         <form >
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           {/* <button
//             type="submit"
//             className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ${loading ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button> */}
//         </form>
//         <div className="text-center mt-4">
//           <p className="text-gray-600 text-sm">
//             Already have an account? <a href="#" className="text-blue-500 hover:underline">Sign In</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
