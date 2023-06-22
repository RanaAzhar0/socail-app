import React from "react";
import img10 from "../img/img10.png"
import img11 from "../img/img11.png"
import img12 from "../img/img12.png"

function lastcard() {
    return (
      <>
        <div className="lastcard-main text-white h-[800px]   w-[100%] reletive">
            <h1 className="hero-heading reletive  ml-[120px] h-[69px] w-[356px] ">News & Update</h1>
            
            <div className="w-[87%] h-[530px] flex ml-[120px] mt-[38px] ">
              <div className="h-[100%] w-[368px] ">
                <img src={img10} alt="" />
                <div className="w-[317px] h-[60px] flex items-center mt-[22.5px]">
                  <div className="h-[100%] flex items-center justify-evenly flex-col w-[34px] ">
                    <h1 className="lastcard-heading">12</h1>
                    <p className="lastcard-para ml-[5px]" >Jan</p>
                  </div>
                  <p className="pro w-[265px] ml-[19px] h-[45px] ">Elements of Content in Epoxy <br/> Paint </p>
                </div>
                <h1 className="card3-heading mt-[13px]">Epoxy paint and epoxy floor<br/>contractor. Have you heard the two<br/>terms? And what does that have to<br/>do with the construction of existing<br/>buildings? Epoxy itself is included in<br/>the type of resin... <span className="text-blue-400 font-semibold"> Read more</span></h1>
              </div>
              <div className="h-[100%] w-[368px] ml-[48px] ">
                <img src={img11} alt="" />
                <div className="w-[317px] h-[60px] flex items-center mt-[22.5px]">
                  <div className="h-[100%] flex items-center justify-evenly flex-col w-[34px]">
                    <h1 className="lastcard-heading">12</h1>
                    <p className="lastcard-para ml-[5px]" >Jan</p>
                  </div>
                  <p className="pro w-[265px] ml-[19px] h-[45px] ">5 Right Steps in Warehouse <br/> Planning and Construction </p>
                </div>
                <h1 className="card3-heading mt-[13px]">Epoxy paint and epoxy floor<br/>contractor. Have you heard the two<br/>terms? And what does that have to<br/>do with the construction of existing<br/>buildings? Epoxy itself is included in<br/>the type of resin... <span className="text-blue-400 font-semibold"> Read more</span></h1>
               </div>
              <div className="h-[100%] w-[368px] ml-[48px] ">
                <img src={img12} alt="" />
                <div className="w-[317px] h-[60px] flex items-center mt-[22.5px]">
                  <div className="h-[100%] flex items-center justify-evenly flex-col w-[34px]">
                    <h1 className="lastcard-heading">12</h1>
                    <p className="lastcard-para ml-[5px]" >Jan</p>
                  </div>
                  <p className="pro w-[265px] ml-[19px] h-[45px] ">The Right Solution to Build a <br/> Sturdy Type 45 House </p>
                </div>
                <h1 className="card3-heading mt-[13px]">Epoxy paint and epoxy floor<br/>contractor. Have you heard the two<br/>terms? And what does that have to<br/>do with the construction of existing<br/>buildings? Epoxy itself is included in<br/>the type of resin... <span className="text-blue-400 font-semibold"> Read more</span></h1>
             </div>
            </div>
        </div>


      </>
    );
  }
  
  export default lastcard;