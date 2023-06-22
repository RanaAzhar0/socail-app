import React from 'react'
import Imge from '../img/unsplash_QdAAasrZhdk.png'
import Imge1 from '../img/Rectangle11.png'
import Imge2 from '../img/unsplash_IF9TK5Uy-KI.png'
import Imge3 from '../img/Vector.png'




const Meets = () => {
  return (
    <>
    <div className='h-[100vh] w-[100%]  flex justify-evenly items-center'>
        <div className='h-[85vh] w-[42%] flex justify-evenly items-center '>
        <div className='h-[85vh] w-[85%] 'style={{ backgroundImage:`url(${Imge})`, backgroundSize:"100% 100%"}}>
        <div className='h-[55vh] w-[48vh] ml-80 mt-[100px] flex flex-col justify-evenly items-center'style={{ backgroundImage:`url(${Imge1})`, backgroundSize:"100% 100%"}}>
          <img className='h-[15vh] w-[15vh] rounded-full' src={Imge2} alt="" />
          <div className='h-[20vh] w-[44vh]  '>
            <h1 className='text-white text-lg font-semibold ml-16'>Dianne Russell</h1>
            <p className='text-white  ml-4'>More than 20 years of experience<br/> in the field architecture and has<br/> worked on project up to 100+</p>
          </div>
        </div>
        </div>
        </div>
        <div className='h-[58vh] w-[40%]  ml-16 mt-12'>
            <h1  className=' text-5xl font-extrabold '>Meet and talk with <br/>our best architecture </h1>
            <p className=' text-slate-400 text-lg leading-8 mt-9'>All our teams are professional and competent in<br/> their fields and will help you realize your dream<br/> building with the excellent result.</p>
            <div className='flex items-center mt-11  '>
                <button className='meeetsbtn py-4 px-6 text-lg font-semibold text-white'>Discover More</button>
                <p className='text-lg font-semibold ml-6'>How it Works</p>
                <img className='font-semibold ml-7 mt-1' src={Imge3} alt="" />
                </div>       
        </div>

    </div>
    </>
  )
}

export default Meets