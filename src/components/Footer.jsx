import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-between bg-[#f2f2f2] text-[15px] text-[#70757a] px-5 border-t border-[#dadce0] absolute bottom-0 w-full'>
      <ul className='flex flex-wrap'>
        <li className='p-[15px]'><a href="">About</a></li>
        <li className='p-[15px]'><a href="">Advertising</a></li>
        <li className='p-[15px]'><a href="">Business</a></li>
        <li className='p-[15px]'><a href="">How Search works</a></li>
      </ul>
      <ul className='flex flex-wrap'>
        <li className='p-[15px]'><a href="">Privacy</a></li>
        <li className='p-[15px]'><a href="">Terms</a></li>
        <li className='p-[15px]'><a href="">Settings</a></li>
      </ul>
      
    </footer>
  )
}

export default Footer