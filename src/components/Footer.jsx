import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return (
    <footer className='bg-[#0f0f0f] gap-6 relative z-20 text-white flex flex-col text-center items-center justify-center px-4 py-10'>
        <img src='./logo.png' alt='WOW' className='h-16' />
        <div className='flex flex-col md:flex-row gap-4'>
            <a href="/" className='font-bold font-mont hover:text-primary transition'>HOME</a>
            <a href="/" className='font-bold font-mont hover:text-primary transition'>ABOUT</a>
            <a href="/hack" className='font-bold font-mont hover:text-primary transition'>EVENT</a>
            <a href="/" className='font-bold font-mont hover:text-primary transition'>CONTACT</a>
            <a href="/" className='font-bold font-mont hover:text-primary transition'>JOIN US</a>
        </div>
        <div className='flex gap-4'>
            <a href="/" className='hover:text-primary transition'>
                <FontAwesomeIcon icon={faEnvelope} size='xl' />
            </a>
            <a href="/" className='hover:text-primary transition'>
                <FontAwesomeIcon icon={faLinkedinIn} size='xl' />
            </a>
            <a href="/" className='hover:text-primary transition'>
                <FontAwesomeIcon icon={faInstagram} size='xl' />
            </a>
        </div>
        <p className='text-center font-poppins text-sm text-white/50'>© 2024 WOW. All Rights Reserved.</p>
    </footer>
  )
}
