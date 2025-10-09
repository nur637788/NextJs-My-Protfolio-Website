import React from 'react'
import Navbar from './components/Navber'
import Link from 'next/link'
function page() {
  return (
    <div>
      


      <Navbar />

     <div className="h-96 m-auto bg-gradient-to-l from-green-500 via-pink-600 to-blue-700 flex flex-col justify-center items-center space-y-10 rounded-xl">
     <h2 className='text-2xl md:text-4xl font-bold'>Welcome My <span className='text-amber-300 font-extrabold'>Protfilio</span></h2>
  <Link href="/getStart">
    <button className="bg-blue-600 px-6 py-3 rounded-full shadow-md text-white hover:bg-blue-800 transition w-40 text-xl hover:scale-90 duration-300">
      Get Start
    </button>
  </Link>
</div>

    </div>
  )
}

export default page
