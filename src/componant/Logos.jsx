import React from "react";
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
import img5 from "../img/img5.png"
import img6 from "../img/img6.png"


function Logos() {
    return (
      <>
        <div className="logo main w-[100%] h-[190px] items-center flex">
        <img className="ml-[129px]" src={img2} alt="" />
        <img className="ml-[96px]" src={img3} alt="" />
        <img className="ml-[96px]" src={img4} alt="" />
        <img className="ml-[96px]" src={img5} alt="" />
        <img className="ml-[96px]" src={img6} alt="" />

        </div>
      </>
    )
  }
  
export default Logos;
