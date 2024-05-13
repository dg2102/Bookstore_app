import React, { useEffect, useState } from 'react'

import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"


const Course = () => {
  const [course,setCourse]=useState([])
useEffect(()=>{
  const getBooks=async()=>{
    try{
      const response=await axios.get("http://localhost:4002/books")
      console.log(response.data)
    
      setCourse(response.data)
    }catch{
  console.log("error happened")
    }
  }
  getBooks()
},[])
    
  return (
    <div className='max-w-screen-2xl  container mx-auto  md:px-20 p-4'>
        <div className='mt-28 items-center justify-center text-center'>

        
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you<span className='text-pink-400'> Here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere saepe distinctio quia illum ut accusantium ipsum, nisi qui harum, consectetur, nulla repudiandae autem quibusdam repellendus maxime! Deserunt, sed repellendus.</p>
        <Link to="/"> <button className='bg-pink-500 text-white px-4 py-3 rounded-md mt-6'>Back</button></Link>
     
      <div className=' mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 '>
      {course.map((item)=>(
        <Cards  item={item} key={item.id}/>)
       )}</div> 
      </div>
    </div>
  )
}

export default Course
