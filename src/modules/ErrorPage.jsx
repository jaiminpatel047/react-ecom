import { Link } from "react-router-dom"

const ErrorPage = ({title, des, buttonOne, buttonTwo}) => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base leading-7">
          {des}
        </p>
        <div className="flex items-center justify-center mt-6 gap-x-3">
          <Link to='/' className="inline-flex items-center rounded-md bg-yellow-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-black dark:text-white">
            {buttonOne}
          </Link>

          <Link to='/' className="rounded-md bg-gray-600 px-3.5 py-1.5 text-base font-semibold leading-7 hover:bg-gray-500 ">
            {buttonTwo}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

