import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {
    // console.log(list);
    return (
        <>
            <div className=" max-w-screen-2xl mx-auto md:px-20 px-4">
                <div className='pt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>We're deligate to have you <span className='text-pink-500'>here :)</span> </h1>
                    <p className='mt-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non ullam voluptatum ex eveniet exercitationem,
                         molestiae eum similique iure porro repellendus tenetur veniam rerum! Ex repellat beatae illum ipsam. Aperiam?
                    </p>
                    <Link to='/'>
                        <button className='mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item) =>(
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
