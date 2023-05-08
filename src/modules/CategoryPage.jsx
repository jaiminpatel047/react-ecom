import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CategoryPage = () => {

    const { category } = useParams()
    const [cateGory, setCateGory] = useState([])

     useEffect(()=>{
        const fetchCategories = async() => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            const date = await response.json()
            console.log(date)
            setCateGory(date)
        } 
        fetchCategories()
     }, [])


  return (
    <div>
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">{category}</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {cateGory.map((item) => (
          <Link to={`/ProductPage/${item.id}`} key={item.id} className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                 src={item.image}
                 alt={item.category}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={item.id}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.titel}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.title}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CategoryPage