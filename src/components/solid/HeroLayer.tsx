import { createSignal } from "solid-js";
import "../../../styles/HeroLayer.css";
import Assets from "./ui/Assets";
import ContactMe from "./ui/ContactMe";
import RoundedIcon from "./ui/RoundedIcon";
import Accesories from "./ui/Accesories";

const HeroLayer = () => {
  // State Management
  const [cvCount, setCvCount] = createSignal(0);

  function openCV () {
    setCvCount((count) => count + 1);
    window.open('/files/cv-fadlan.pdf');

    console.log("CV Terunduh: ", cvCount());
  }

  function redirectHref () {
    window.open('https://google.com', '_blank');

    // console.log("CV Terunduh: ", cvCount());
  }

  return (
    <div class="hero-container w-screen h-screen bg-(--primary-color) text-(--text-color-one) flex items-center justify-center">
      <div class="flex-container w-5xl h-6/10 flex justify-between">

        {/* Left Side Hero */}
        <div class="left-side-text-container basis-sm my-auto">
          
          {/* Semi Circle Accessories */}
          <Accesories assetNumber={99} />

          <p class="text-6xl text-justify relative z-40">MY NAME IS <b>FADLAN NOER...</b></p>

          <br/>

          <p><span class="font-bold italic">Software Engineer</span> based in <span class="font-bold italic">Indonesia</span></p>

          <div 
            class="cursor-pointer button-cv flex items-center justify-center my-[48px] w-[258px] h-[56px] bg-white text-(--primary-color)"
            onClick={() => openCV()}
          >
            <p class="mr-3">Know me by my CV!</p>

            <div class="w-6 h-6 flex justify-center items-center bg-linear-to-tr from-(--primary-color) via-(--primary-color) to-(--gradient-first)">
              <Assets 
                assetName="diagonal-arrow"
                attribute={() => {
                  return {
                    className: "w-3",
                    fill: "#ffffff"
                  } 
                }} 
              />
            </div>
          {/* Close button-cv */}
          </div>
          
          {/* Contact Me Through this Component*/}
          <ContactMe />

        </div>

        {/* Right Side Hero */}
        <div class="img-container flex items-center">
          <div class="flex-container w-full h-full">
            
            {/* Accesories */}
            <Accesories assetNumber={1} />
            <Accesories assetNumber={2} />
            <Accesories assetNumber={3} />
            <Accesories assetNumber={4} />
            <Accesories assetNumber={5} />
            
            {/* Image Section */}
            <img src="/assets/half-body.png" class="w-90 z-2 relative"/>

          </div>
        </div>

        {/* Socmed Floating */}
        <div class="rotated-socmed h-[70%] w-10 my-auto flex flex-col justify-between items-center">
          
          {/* Socmed Group */}
          <div class="h-[45%] flex flex-col justify-between" onClick={() => redirectHref()}>
            <RoundedIcon assetName="github" rotate="-rotate-90" />
            <RoundedIcon assetName="upwork" rotate="-rotate-90" />
            <RoundedIcon assetName="x-com"  rotate="-rotate-90" />
          </div>

          <div class="floating-bar w-[15%] h-[50%] rounded-sm bg-(--text-color-two)">
          </div>

          
        </div>

      {/* Close flex-container */}
      </div>
    {/* Close container */}
    </div>
  )
}

export default HeroLayer;