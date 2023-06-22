import React from 'react'
import Img1 from "../img/Ellipse1.png"
import Img3 from "../img/Vector1.png"
import Img4 from "../img/Vector2.png"
import Img2 from "../img/Vectors.png"




const Icons = () => {
  return (
    <>
    <div className='h-[120vh] w-[100%] p-1'>
        <div className='small h-[9px] w-[90px] mt-[74px] ml-[135px]'></div>
        <div className='h-48 w-[100%] items-center  flex '>
        <h1 className='icon-heading absolute ml-[120px] mt-[40px] '>What Make Us <br/>Different?</h1>
            <p className=' text-xl text-[#C4C4C4] ml-[745px] leading-10'>Check out our best service you can possibly orders in building <br/>your company and don't forget to ask via our email or our<br/> customer service if you are interested in using our services </p>
        </div>
        <div className='h-[60vh] w-[87%] ml-[120px] mt-[75px] flex items-center'>
          <div className='h-[100%] w-[100%] flex justify-between'>
            <div className='h-[100%] w-[240px] '>
              <img className='w-[74px] h-[74px]  leading-7 rounded-full bg-blue-500 px-5 py-7 ' src={Img1} alt="" />
              <p className='leading-10 text-2xl font-bold mt-[36px] w-[150px] h-[36px]'>Exprienced</p>
              <p className='leading-10 text-lg mt-[24px] w-[263px] font-medium text-[#C4C4C4]'>Our experience of 25 years of<br/> building and making<br/> achievements in the world<br/> of development</p>
            </div>
            <div className='h-[100%] w-[230px] '>
              <img className='w-[74px] h-[74px] leading-7 rounded-full bg-blue-500 px-5 py-7 ' src={Img2} alt="" />
              <p className='leading-10 text-2xl mt-[36px] font-bold w-[215px] h-[36px]'>competitive price</p>
              <p className='leading-10 text-lg  font-medium mt-[24px] text-[#C4C4C4]'>The prices we offer you are<br/> very competitive without<br/> reducing the quality of the <br/>company's work in the slightest</p>
            </div>
             <div className='h-[100%] w-[230px] '>
              <img className='w-[74px] h-[74px] leading-7 rounded-full bg-blue-500 px-5 py-7 ' src={Img3} alt="" />
              <p className='leading-10 text-2xl mt-[36px] font-bold w-[150px] h-[36px]'>On Time</p>
              <p className='leading-10 text-lg  font-medium mt-[24px] text-[#C4C4C4]'>We prioritize the quality of<br/> our work and finish it on time</p>
            </div>
             <div className='h-[100%] w-[230px]'>
              <img className='w-[74px] h-[74px] leading-7 rounded-full bg-blue-500 px-5 py-7 ' src={Img4} alt="" />
              <p className='leading-10 text-2xl mt-[36px] font-bold w-[100%] h-[36px]'>Best Materials</p>
              <p className='leading-10 text-lg mt-[24px]  font-medium text-[#C4C4C4]'>The material determines the <br/>building itself so we<br/> recommend that you use<br/> the best & quality materials<br/> in its class</p>
            </div>
          </div>
        </div>

    </div>
    </>
  )
}

export default Icons