import React from "react";
import img7 from "../img/img7.png"
import img8 from "../img/img8.png"
import img9 from "../img/img9.png"

function Hero() {
    return (
      <>
        <div className="Hero-main text-white h-[926px] border w-[100%] reletive">
            <h1 className="hero-heading absolute mt-[80px] ml-[120px] h-[138px] w-[304px] ">Our Excellent <br/> Services</h1>
            <p className="hero-para absolute ml-[745px] mt-[80px] w-[561px] h-[111px]">Check out our best service you can possibly orders in building
            <br/> your company and don't forget to ask via our email or our<br/>
            customer service if you are interested in using our services</p>
            <div className="w-[87%] h-[530px] flex ml-[120px] mt-[298px] ">
              <div className="h-[100%] w-[368px] ">
                <img src={img7} alt="" />
                <p className="card2-para mt-[38px]">Industrial</p>
                <h1 className="card2-heading mt-[38px]">Industrial development is our main<br/>line of business. We do Factory<br/> Construction, Warehouse and others</h1>
              </div>
              <div className="h-[100%] w-[368px] ml-[48px] ">
                <img src={img8} alt="" />
                <p className="card2-para mt-[38px]">Commercial</p>
                <h1 className="card2-heading mt-[38px]">Our experience building in the<br/>Commercial field includes Showrooms,<br/>Supermalls and Office Buildings</h1>
              </div>
              <div className="h-[100%] w-[368px] ml-[48px] ">
                <img src={img9} alt="" />
                <p className="card2-para mt-[38px]">Resedential</p>
                <h1 className="card2-heading mt-[38px]">Residential development is the <br/>beginning that has shaped us to this<br/>day. Our development includes<br/>Houses & Apartments</h1>
              </div>
            </div>
        </div>

      </>
    );
  }
  
  export default Hero;