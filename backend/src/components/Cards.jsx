import React from 'react'

const Cards = ({item}) => {
   
  return (
    <>
    <div className='mt-4 p-2 my-4 mx-2'>
<div className="card w-92 bg-base-100 shadow-xl mt-12 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-2">
  <figure><img src={item.image} alt="books" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div> 
      <div className="py-1 px-2 border-[2px] rounded-full hover:bg-pink-500 hover:text-white duration-300 ">Buy Now</div>  
      {/* badge e rounded a padding lagena */}
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
