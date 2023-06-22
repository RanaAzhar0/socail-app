import React from 'react'
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    <>
     <div className='footer h-[392px] w-[100%] flex relative'>
      <div className='w-[45%] mt-[83px] ml-[120px] h-56 absolute'>
        <p className='text-base font-semibold leading-10 text-white'>Logo</p>
        <p className=' text-white mt-[10px] leading-8'>is a general contractor company based in Jakarta. More than 25 years of <br/>experience in building and carving out Indonesia</p>
        <div className='h-20 w-[185px] mt-[10px]  flex justify-between items-center'>
          <div className='bg-slate-800 flex justify-center items-center text-white h-10 w-10 rounded-full'>
            <BsTwitter/>
          </div>
          <div className='bg-slate-800 flex justify-center items-center text-white h-10 w-10 rounded-full'>
            <BsInstagram/>
          </div>
          <div className='bg-slate-800 flex justify-center items-center text-white h-10 w-10 rounded-full'>
            <FaFacebookF/>
          </div>
          <div className='bg-slate-800 flex justify-center items-center text-white h-10 w-10 rounded-full'>
            <AiFillYoutube/>
          </div>
         
         </div>     

      </div>
      <div className='w-[25%] h-72 font-normal absolute mt-[83px] ml-[803px] flex flex-row'>
        <div className='h-[100%] w-[50%] '>
          <h1 className='font-semibold  text-base text-white text-xl leading-10'>Company</h1>
          <ul className=' list-none text-white leading-10 mt-[10px]'>
          <p className=' font-normal  '>About</p>
          <p className=' font-normal  '>How it Works</p>
          <p className=' font-normal  '>Term</p>
          <p className=' font-normal  '>Privacy policy</p>
          </ul>        
        </div>
        
        <div className='h-[100%] w-[50%] '>
        <h1 className='font-semibold text-base text-white  text-xl leading-10'>More</h1>
          <ul className=' list-none text-white leading-10 mt-[10px]'>
          <p className=' font-normal    '>Documentation</p>
          <p className=' font-normal  '>License</p>
      
          </ul>
        </div>

      </div>

     </div>
    </>
  )
}

export default Footer