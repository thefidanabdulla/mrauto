import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='max-w-[1300px] w-full mx-auto py-5 '>
        <div className='h-[35px] overflow-hidden flex items-center'>
            <Image className='' src="/imgs/Untitled-1.png" width={150} height={50} />
        </div>
    </nav>
  )
}

export default Navbar