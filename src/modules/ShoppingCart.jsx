import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorPage from './ErrorPage';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0)
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  
  
  useEffect(()=>{
    const total = cart.reduce((acc, item)=>{
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [cart])


  const handleInc = (id) => {
     const updatedCart = cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
     })
     localStorage.setItem('cart',JSON.stringify(updatedCart))
     navigate('/ShoppingCard')
  }
  const handleDec = (id) => {
     const updatedCart = cart.map(item => {
      if(item.id === id){
        return{
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
     })
     localStorage.setItem('cart', JSON.stringify(updatedCart))
     navigate('/ShoppingCard')
  }

  const removerProduct = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
     localStorage.setItem('cart', JSON.stringify(updatedCart))
     navigate('/ShoppingCard')
  }

  if(cart.length === 0){
    return (<ErrorPage title='Cart is Empty' des='Your Shopping Cart is Empty' buttonOne='Continue Shopping' buttonTwo='Go Home'/>)
  }

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="lg:col-span-8 bg-white dark:bg-slate-600"
          >
            <h2 id="cart-heading" className="sr-only text-black">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-t border-b border-gray-200"
            >
              {cart.map((product) => (
                <div key={product.id} className="px-4">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                    <Link to={`/ProductPage/${product.id}`}>
                      <img
                        src={product?.image}
                        alt={product?.title}
                        className="h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38"
                      />
                     </Link>
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <Link to={`/ProductPage/${product.id}`}
                                className="font-medium text-lg text-gray-700 dark:text-white"
                              >
                                {product?.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500 dark:text-gray-200">
                              {product.color}
                            </p>
                            {product.size ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500 dark:text-gray-200">
                                {product.size}
                              </p>
                            ) : null}
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-xs line-through font-medium text-gray-500 dark:text-gray-100">
                              ${product.price}
                            </p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              &nbsp;&nbsp;${product.price}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">
                              {product.discount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="flex mb-2">
                    <div className="flex min-w-24 dark:text-white">
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full border border-[#e0e0e0]"
                        onClick={()=> handleDec(product?.id)}
                        >
                        -
                      </button>
                      <input
                        type="text"
                        className="h-7 w-9 text-center mx-1 border dark:bg-white dark:text-black"
                        value={product?.quantity}
                        onChange={() => {}}
                        />
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full border border-[#e0e0e0] flex justify-center items-center"
                        onClick={()=> handleInc(product?.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-4 flex flex-1 sm:ml-6 dark:text-white">
                      <button className="font-medium mr-4 ">SAVE FOR LATTER</button>
                      <button className="font-medium text-yellow-400 hover:text-yellow-200" onClick={()=> removerProduct(product?.id)}>REMOVE</button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white dark:bg-slate-600 lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium text-gray-900 dark:text-gray-200"
            >
              Price Details
            </h2>

            <div>
              <dl className=" space-y-1  px-6 py-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800 dark:text-gray-200">
                    Price ({cart.length} item)
                  </dt>
                  <dd className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    ₹ {total}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700 dark:text-green-400">
                    - ₹ 3,431
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800 dark:text-gray-200">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700 dark:text-green-400">
                    Free
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4 border-y border-dashed ">
                  <dt className="text-base font-medium text-gray-900 dark:text-white">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    ₹ {total}
                  </dd>
                </div>
              </dl>
              <div className="px-6 pb-4 font-medium text-green-700 dark:text-green-400">
                You will save ₹ 3,431 on this order
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default ShoppingCart

const products = [
  {
    id: 1,
    name: "APPLE iPhone 11 (White, 128 GB)",
    href: "#",
    price: "₹47,199",
    originalPrice: "₹48,900",
    discount: "5% Off",
    color: "White",
    size: "6.1 inch",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=90",
  },
  {
    id: 2,
    name: "Syska 20000 mAh Power Bank",
    href: "#",
    price: "₹1,549",
    originalPrice: "₹2,499",
    discount: "38% off",
    color: "Black",
    leadTime: "3-4 weeks",
    size: "20000 mAh",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/p2024j-bk-p2024j-20000-syska-original-imafz4zuunbw3mfu.jpeg?q=70",
  },
  {
    id: 3,
    name: "Back Cover for Apple Iphone 11",
    href: "#",
    price: "₹219 ",
    originalPrice: "₹999",
    discount: "78% off",
    color: "Black",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/linetpu-029-012-101-gadgetm-original-imag7ayekbkvfu4f.jpeg?q=70",
  },
];
