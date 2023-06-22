import React from "react";
import img13 from "../img/img13.png"
import img14 from "../img/img14.png"
import img15 from "../img/img15.png"
import img16 from "../img/img16.png"


function Imges() {
  return (
    <>
        <div className="images-main h-[120vh] w-[100%]">
            <h1 className="imges-heading w-[326px] h-[138px] ml-[120px] text">Our collection <br/> best project</h1>
            <div className="w-[89%] h-[478px] flex ml-[120px] mt-[38px]">
                <img className="h-[100%] w-[278px]" src={img13} alt="" />
                <img className="h-[100%] w-[278px] ml-[30px]" src={img14} alt="" />
                <img className="h-[100%] w-[278px] ml-[30px]" src={img15} alt="" />
                <img className="h-[100%] w-[278px] ml-[30px]" src={img16} alt="" />
            </div>

        </div>


    </>
  );
}

export default Imges;