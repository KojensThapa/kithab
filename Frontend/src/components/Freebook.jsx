import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
// import list from '../../public/list.json'
import Cards from './Cards';
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async ()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        const filterData = res.data.filter((data) => data.category === "Free");
        console.log(filterData);
        setBook(filterData);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
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
            <div className='max-w-screen-2xl mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white'>
                <div>
                    <h1 className='font-semi-bold text-xl pb-2'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam 
                        quo repellat perspiciatis obcaecati impedit quibusdam iste tenetur est, 
                        odio repudiandae excepturi dolorum blanditiis ullam nisi dicta accusantium non libero?</p>
                </div>
                <div>   
                    <Slider {...settings}>
                        {
                            book.map((item)=>(
                                <Cards item={item} key={item.id}/>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            
        </>
    )
}

export default Freebook
