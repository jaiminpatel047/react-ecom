import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {

   const [categories, setCategories] = useState([])

     useEffect(()=>{
        const fetchCategories = async() => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const date = await response.json()
            console.log(date)
            setCategories(date)
        } 
        fetchCategories()
     }, [])

  return (
    <div className="px-4 mx-auto py-4 md:py-6 dark:text-gray-300 dark:bg-gray-900">
      <div className="container m-auto flex md:text-left text-center md:justify-between justify-center items-center">
        <div>
          <h2 className="text-3xl font-medium">Popular Categories</h2>
          <div className="mt-2">Choose from variety of items</div>
        </div>
        <Link to={`/ProductPage/`} className="md:flex hidden items-center uppercase text-gray-500">
          All Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="ml-1 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
      <div className="my-10 container m-auto">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((item) => (
            <Link to={`/Products/category/${item}`}
              className="bg-gray-100 dark:bg-gray-800 hover:bg-yellow-700 ease-in-out duration-300 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              key={item}
              href={item}
            >
              {console.log(item)}
              <div className="font-bold uppercase text-center">{item}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden flex items-center justify-center mt-8 font-medium uppercase text-gray-500">
        All Categories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ml-1 w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};