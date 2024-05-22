/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
  <div className='mt-3 flex h-[60px] items-center justify-center gap-2 rounded-lg  text-xl font-medium bg-slate-500 min-w-[100%]'>
    <img src="src/assets/logo-logomark.png" className='w-10 rounded-full'/>
    <h1 className='text-white pt-2 font-serif'>Firebase Contact App</h1>
    <img src="src/assets/contacts.png" className='w-10 rounded-full' ></img>
  </div>
  )
}

export default Navbar
