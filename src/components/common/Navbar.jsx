import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-auto container '>
       <div className='flex gap-24 justify-center text-center text-3xl py-10'>
        <p> <Link href={'/'}>Home</Link> </p>
        <p> <Link href={'/shop'}>Shop</Link> </p>
        <p> <Link href={'review'}>Review</Link> </p>
        <p><Link href={'/aboutus'}>About</Link> </p>
       </div>
    </div>
  )
}

export default Navbar
