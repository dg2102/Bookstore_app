import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Login from './Login'
import axios from 'axios'
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email: data.email,
      password:data.password

    }
    await axios.post("http://localhost:4002/register",userInfo)
    .then((res)=>{console.log(res.data)
     if(res.data){
      console.log("signup successful")
     }
     localStorage.setItem("users",JSON.stringify(res.data.user))
    
    }).catch((err)=>{
      alert(`${err}`)
      console.log(`${err}`)
    })
  }
  return (
    <div>
    <div className="flex h-screen items-center justify-center">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
   
    <h3 className="font-bold text-lg">Register</h3>
   <div className='flex flex-col mt-8'>
   <span>Name</span>
   <input type="text"  className="w-80 px-3 py-1 border rounded-md outline-none focus:outline-pink-400 focus:duration-300 ease-in-out"placeholder='Enter your Full Name'
     {...register("name", { required: true })} />
      {errors.name && <span className='text-red-500 text-sm mx-2'>This field is required</span>}
   <span className='mt-10'>Email</span>
   <input type="email"  className="w-80 px-3 py-1  border rounded-md outline-none focus:outline-pink-400 focus:duration-300 ease-in-out"placeholder='Enter your Email'      {...register("email", { required: true })}/>
   {errors.email && <span className='text-red-500 text-sm mx-2'>This field is required</span>}
   <span className='mt-10'>Password</span>
   <input type="password" className='w-80 px-3 py-1 border rounded-md outline-none focus:outline-pink-400 focus:duration-300 ease-in-out' placeholder='Enter your Password'      {...register("password", { required: true })} />
   {errors.password && <span className='text-red-500 text-sm mx-2'>This field is required</span>}
   <div className='flex space-between gap-12 justify-center items-center mt-6'>
   <button className='bg-pink-400 py-2 rounded-md w-16 '>Signup</button>
   <div>Already Have account? 
    <Link to="/login" className=' cursor-pointer underline text-blue-500' 
   onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</Link>
  
   </div>
   
   </div>
   
   </div>
   </form>
  </div>
</div>
    </div>
  ) 


}

export default SignUp
