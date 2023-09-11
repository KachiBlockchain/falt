import React, { useEffect, useState } from 'react'
import top from '../assets/img/backtotopbtn.png'

import { Link, animateScroll as scroll } from 'react-scroll'

import { ChevronUpIcon } from '@heroicons/react/outline'

const BackToTopButton = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', ()=> {
        return window.scrollY > 600 ? setShow(true) : setShow(false);
      })
    
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    
    return (show && <img className=' fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all' onClick={() => scrollToTop()} src={top} />
    // <button onClick={() => scrollToTop()} className='bg-blue-700 w-12 h-12 hover:bg-blue-300 text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all' ><ChevronUpIcon className='w-6 h-6' /></button>
    
    )

  
}

export default BackToTopButton