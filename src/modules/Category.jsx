import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loadrer from "../utiliy/Loadrer";


export const Category = () => {

 
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


     const [category, setCategory] = useState([])


     useEffect(()=>{
        const fetchCategorie = async() => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        const categoryDate = await response.json()
        console.log(categoryDate)
        setCategory(categoryDate)
       } 
       fetchCategorie();
     },[])


 if (categories.length === 0) return <Loadrer />
    return (
      <div className="px-4 mx-auto py-4 md:py-6">
        <div className="container m-auto flex md:text-left text-center md:justify-between justify-center items-center">
          <div className="m-auto">
            <h2 className="text-3xl font-medium">Popular Categories</h2>
          </div>
        </div>
        <div className="my-10 container m-auto">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                className="bg-gray-100 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
                key={category.category}
              >
                <img
                  className="h-20 w-20"
                  src='../image/shopping.png'
                  alt={category.title}
                />
                <div className="font-bold mt-4 text-center uppercase">{category || 'categories'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };


