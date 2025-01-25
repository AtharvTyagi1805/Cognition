import { faBars, faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect, useState} from 'react'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    const nav = document.querySelector('nav')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        nav.classList.add('md:bg-black/80')
        nav.classList.remove('md:bg-transparent')
      } else {
        nav.classList.add('md:bg-transparent')
        nav.classList.remove('md:bg-black/80')
      }
    })
  }, [])
  return (
    <nav className='fixed inset-x-0 z-40 top-0 bg-black/80 transition backdrop-blur-sm text-white md:px-20 p-4 flex items-center gap-4 justify-between'>
        <img src='./logo.png' alt='WOW' className='h-10' />
        <div className={'absolute md:static md:p-0 top-18 inset-x-0 flex flex-col transition-all duration-300 md:flex-row gap-5 md:gap-8 items-end p-4 bg-black/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:items-center md:clip-path-open '+(navOpen ? 'clip-path-open' : 'clip-path-close')}>
          <a className='font-bold font-mont hover:text-primary transition' href="/">HOME</a>
          <a className='font-bold font-mont hover:text-primary transition' href="/">ABOUT</a>
          <a className='font-bold font-mont hover:text-primary transition' href="/hack">EVENT</a>
          <a className='font-bold font-mont hover:text-primary transition' href="/">CONTACT</a>
          <a className='font-bold font-mont p-2 px-5 rounded-full bg-gradient-to-b from-primary to-secondary transition hover:shadow-md hover:shadow-[#868686]/40' href="/">JOIN US</a>
        </div>
        <button className='h-7 w-7 md:hidden' onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon className='h-full w-full' icon={navOpen ? faMultiply : faBars} />
        </button>
    </nav>
  )
}
