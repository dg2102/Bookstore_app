import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'

const Login = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => { const userInfo={
    name:data.name,
    email: data.email,
    password:data.password
  }
  await axios.post("http://localhost:4002/login",userInfo)
    .then((res)=>{console.log(res.data)
     if(res.data){
      console.log("login successful")
     }
     localStorage.setItem("users",JSON.stringify(res.data.user))
    
    }).catch((err)=>{
      alert(`${err}`)
      console.log(`${err}`)
    })
  }
  
  return (
    
    <div>
   
      {/* You can open a modal using document.getElementById('ID').showModal() method */}

<div id="my_modal_3" className="flex h-screen justify-center align-center">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Login</h3>
   <div className='flex flex-col mt-8'>
   <span>Email</span>
   <input  {...register("email", { required: true })} type="email"  className="w-80 px-3 py-1 border rounded-md outline-none focus:outline-pink-400 focus:duration-300 ease-in-out"placeholder='Enter your Email' />
   {errors.email && <span className='text-red-500 text-sm mx-2'>This field is required</span>}
  
   <span className='mt-10'>Password</span>
   <input type="password"  className='w-80 px-3 py-1 border rounded-md outline-none focus:outline-pink-400 focus:duration-300 ease-in-out' {...register("password", { required: true })} placeholder='Enter your Password' 
    /> {errors.password && <span className='text-red-500 text-sm mx-2'>This field is required</span>}
   <div className='flex space-between gap-12 justify-center items-center mt-6'>
   <button className='bg-pink-400 py-2 rounded-md w-16 '>Login</button>
   <p>Not registered yet? <Link className=' cursor-pointer underline text-blue-500' to='/signup'>Signup</Link></p>
   </div>
   
   </div>
   </form>
  </div>
</div>
    </div>
  )
}

export default Login
