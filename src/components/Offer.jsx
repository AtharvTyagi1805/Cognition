import React from 'react'

export default function Offer() {
  return (
    <section className='px-4 md:px-20'>
        <div className='w-full rounded-3xl border-2 border-primary md:p-12 p-4 text-center backdrop-blur-md bg-white/5 space-y-6'>
            <h2 className='font-poppins font-bold md:text-4xl text-2xl'>WE OFFER</h2>
            <div className="flex justify-between flex-col md:flex-row gap-4">
                <div className='p-6 border-2 md:w-72 rounded-xl border-[#EC7B7B]'>
                    <img src="./hackathons.png" alt="hackathons" className='w-full h-64 object-contain' />
                    <p className='uppercase font-poppins text-lg md:text-xl font-bold mt-4'>hackathons</p>
                </div>
                <div className='p-6 border-2 md:w-72 rounded-xl border-[#EC7B7B]'>
                    <img src="./mentorship.png" alt="mentorship" className='w-full h-64 object-contain' />
                    <p className='uppercase font-poppins text-lg md:text-xl font-bold mt-4'>mentorship</p>
                </div>
                <div className='p-6 border-2 md:w-72 rounded-xl border-[#EC7B7B]'>
                    <img src="./community.png" alt="community" className='w-full h-64 object-contain' />
                    <p className='uppercase font-poppins text-lg md:text-xl font-bold mt-4'>community</p>
                </div>
            </div>
            <a href="/" className='text-lg inline-block relative overflow-hidden bg-gradient-to-b from-primary to-secondary group transition p-2 px-5 rounded-full font-bold font-mont'>
                <div className='inset-0 absolute bg-white group-hover:bg-transparent transition'></div>
                <span className='z-20 relative text-transparent transition bg-clip-text group-hover:text-white bg-gradient-to-r from-primary to-secondary'>JOIN OUR COMMUNITY</span>
            </a>
        </div>
    </section>
  )
}
