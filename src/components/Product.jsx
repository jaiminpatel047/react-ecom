import { Link } from "react-router-dom"

const Product = ({product}) => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex justify-evenly flex-wrap -m-4">
        {
            product.map((item)=>(
                <Link to={`/ProductPage/${item.id}`} className="lg:w-[30%] md:w-1/2 p-3 m-[.5rem] bg-gray-100 w-full rounded cursor-pointer" key={item.id}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-contain bg-white object-center w-full h-full block"
                    src={item.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-yellow-500 font-semibold">${item.price}</p>
                </div>
              </Link>
            ))
        }
    </div>
  </div>
</section>

  )
}

export default Product