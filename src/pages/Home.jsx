import React from 'react'
import Navbar from '../components/Navbar'
import Words from '../components/Words'
import Event from '../components/Event'
import Who from '../components/Who'
import Offer from '../components/Offer'
import SponsorForm from '../components/SponsorForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <title>WOW</title>
    <main className='min-h-screen overflow-hidden relative pt-20 bg-black text-white'>

        <div className='z-10 bg-radial_red h-[60rem] w-[60rem] absolute -top-[30rem] rounded-full -left-[30rem] opacity-10 blur-lg'></div>
        <div className='z-10 bg-radial_grey h-[60rem] w-[60rem] absolute top-[40rem] rounded-full -right-[30rem] opacity-10 blur-lg'></div>
        <div className='z-10 bg-radial_red h-[60rem] w-[60rem] absolute top-[80rem] rounded-full -left-[30rem] opacity-10 blur-lg'></div>

        <Navbar />

        <Words />

        <Event />

        <Who />

        <Offer />

        <SponsorForm />

        <Footer />

    </main>
    </>
  )
}
