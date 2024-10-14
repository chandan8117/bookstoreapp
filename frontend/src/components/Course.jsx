import React, { useEffect, useState } from 'react'
import axios from "axios";
import Cards from './Cards';
import {Link} from "react-router-dom"

function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{

    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:4001/book");
          console.log(res.data)
          setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you {""}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eligendi sunt. Aut maiores, impedit ad sed deleniti consectetur sapiente mollitia voluptas nam ratione eum nostrum rem dolorem blanditiis aspernatur autem modi reiciendis ab magnam hic! Eligendi sint ab doloremque quis possimus repellat similique molestias natus quibusdam molestiae eos dolore ad obcaecati atque maxime sunt tempora delectus deserunt, enim distinctio quasi voluptatum ipsa voluptate. Quae provident facere dolore temporibus sunt consequatur dolorem minus minima quaerat libero.
          </p>
          <Link to='/'>
            <button className="mt-6 bg-pink-500 px-2 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course
