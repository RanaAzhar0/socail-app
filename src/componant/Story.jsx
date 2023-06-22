import React from "react";
import img17 from "../img/img17.png"

function Story() {
    return (
      <>
        <div className="Story-main relative h-[90vh] w-[100%]">
            <h1 className="story-heading absolute w-[275px] h-[138px] ml-[120px]">Our Story <br/>Who we are</h1>
            <p className="Story-para absolute w-[551px] h-[195px] ml-[120px] mt-[155px]  text-[#C4C4C4] font-semibold">Established in 1992, PT. Wahana Cipta operates as a General<br/>
            Contracting company with a footprint that we have planted<br/>
            throughout Indonesia. Initially, we focused on construction in<br/>
            the field of residential housing development in Jakarta. <br/>
            As the company grows, now we are present as a reliable...</p>
            <button className="btn2 absolute">See More</button>
            <img className="img17 absolute ml-[740px]" src={img17} alt="" />
        
        </div>


      </>
    );
  }
  
  export default Story;
  