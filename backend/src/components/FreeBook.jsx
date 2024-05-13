import React from 'react'
import { useEffect,useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Cards from './Cards';
import axios from 'axios';

const FreeBook = () => {
  const [course,setCourse]=useState([])
  useEffect(()=>{
    const getBooks=async()=>{
      try{
        const response=await axios.get("http://localhost:4002/books")
        console.log(response.data)
        console.log("data taken")
      const freeBooks=  response.data.filter((list)=>
      list.category==="free")
      setCourse(freeBooks)
      console.log("free")
      console.log(freeBooks)
      // try {
      //   const response = await axios.get("http://localhost:4002/books");
      //   console.log(response.data);
      //   console.log("data taken");
      //   // Filter the response data for free courses
      //   const freeCourses = response.data.filter((item) => item.category === "free");
       
      //   setCourse(freeCourses);
      //   console.log(freeCourses)
      // } catch (error) {
      //   console.error("Error fetching books:", error);
      // }
       
      }catch{
    console.log("error happened")
      }
    }
    getBooks()
  },[])
//   const filterdata=response.filter((list)=>
//   list.category==="free"
// )
   
    var settings = {
        dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
       
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
   
        <h1 className='text-2xl pb-2 font-semibold'>Free offered courses</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima. Quasi minima eveniet alias consectetur, expedita culpa est, facere quam quidem consequuntur dolorem hic sed officiis, voluptas ipsa nobis placeat.</p>
   
      
        <div className="slider-container">

    
        <Slider {...settings}>
        {course.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
        
      </Slider>
    </div>
    </div>

    </>
  )

}
export default FreeBook
