import React from 'react'
// import Freebook from './Freebook'

function Cards({item}) {
    // console.log(item.name)
  return (  
    <>
        <div className='mt-3 my-3 p-3'>
            <div className="card bg-base-100 w-82 shadow-xl hover:scale-105 border hover:border-gray-300 duration-300 dark:bg-slate-900 dark:text-white">
                <figure>
                    <img
                    src= {item.image}
                    alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary"> {item.category} </div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                    <div className="badge badge-outline p-4">Npr{item.price}</div>
                    <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-4 duration-200 cursor-pointer">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards
