import React from "react";

function Navbar() {
  return (
    <>
      <div className="nav-main text-white h-[904px] w-[100%] reletive p-1">
        <div className="logo text-white font-bold h-[36px] w-[59px] mt-[48px] absolute ml-[120px]">Logo</div>
        <div className="absolute mt-[47px] ml-[340px] h-[28px] w-[980px]">
          <ul className=" flex relative h-[100%] w-[100%]">
            <li className="text-white absolute">Home</li>
            <li className="ml-[115px] absolute">Services</li>
            <li className="ml-[252px] absolute">Find a Team</li>
            <li className="ml-[424px] absolute">About US</li>
            <li className="ml-[603px] absolute">Articles</li>
            <li className="ml-[733px] absolute">Portfolio</li>
            <li className="ml-[880px] absolute">Contact Us</li>
          </ul>
        </div>
        <h1 className="nav-heading ml-[120px] w-[620px] h-[288px] mt-[144px] absolute text-white tracking-wide">We Provide<br /> Architectural design <br /> and Construction</h1>
        <p className="nav-para absolute h-[111px] w-[579px] mt-[456px] ml-[120px] ">​More than 100 building and housing projects that we have built.<br />
          The building owner chose us over other contractors in Jakarta,<br />
          because our work is different</p>
        <button className="nav-btn flex text-center w-[196px] h-[64px] ml-[120px] mt-[629px]">Discover More</button>
        <div className="card absolute w-[100px] flex justify-between flex-col h-[120px] mt-[739px] ml-[120px]">
          <h1 className="nav-heading2">300 <span className="span font-extrabold"> +  </span></h1>
          <p className="nav-para2">Happy <br />Client</p>
        </div>
        <div className="card absolute w-[100px] flex justify-between flex-col h-[120px] mt-[739px] ml-[272px]">
          <h1 className="nav-heading2">900 <span className="span font-extrabold"> +  </span></h1>
          <p className="nav-para2">Amazing <br />Projects</p>
        </div>
        <div className="card absolute w-[100px] flex justify-between flex-col h-[120px] mt-[739px] ml-[424px]">
          <h1 className="nav-heading2">20 <span className="span font-extrabold"> +  </span></h1>
          <p className="nav-para2">Awards <br />Winning</p>
        </div>
        <div className="left absolute w-[594px] h-[800px]  mt-[100px] ml-[750px]"></div>
        <div className="nav-last-div relative p-[1px] w-[650px] h-[164px] ml-[691px] mt-[736px]">
          <div className="absolute h-[75px] w-[85px] mt-[49px] ml-[32px] flex justify-between flex-col">
            <p className="text-white text-lg w-[100%] font-semibold">General</p>
            <p className="text-white text-2xl font-semibold">project</p>
          </div>
          <h1 className="t absolute  ml-[158px]">25</h1>
          <p className="t t-t absolute ml-[218px] font-none">Years</p>
          <h1 className="opreated absolute mt-[87px]  ml-[158px]">Operated</h1>
          <p className="nav-para3 absolute ml-[320px] mt-[36px] h-[93px] w-[333px]">
            As a trusted general project that has been<br />
            operating for 25 years, our commitment is<br />
            always to prioritize our client satisfaction
          </p>
        </div>
        
      </div>

    </>
  );
}

export default Navbar;
