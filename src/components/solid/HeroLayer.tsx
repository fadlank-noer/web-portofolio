import { createSignal } from "solid-js";
import "../../../styles/HeroLayer.css";
import Assets from "./ui/Assets";
import ContactMe from "./ui/ContactMe";
import RoundedIcon from "./ui/RoundedIcon";

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
          <div class="left-side-semicircle relative z-10 w-[180px] h-[45px]">
            <div 
              style={
                "border-radius: 50% / 0 0 100% 100%;"
              }
              class="absolute top-16 -left-10 w-full h-full -rotate-35 bg-linear-to-tr from-(--gradient-first) to-(--gradient-second)"
            >
            </div>
          </div>

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

            {/* Top Accessories */}
            <div class="relative z-1">
              <div 
                style={
                  "border-radius: 50% / 100% 100% 0 0;"
                }
                class="absolute w-80 h-25 -rotate-30 bg-linear-to-tr from-(--gradient-first) to-(--gradient-second) top-20 -left-10"   
              >
              </div>
            </div>

            {/* Second Accesories */}
            <div class="relative z-3">
              <div 
                style={
                  "border-radius: 0 50% 0 50% / 0 50% 0 50%;"
                }
                class="absolute w-80 h-25 -rotate-30 bg-linear-to-tr from-(--gradient-first)/25 to-(--gradient-second) top-31.5 -right-10"   
              >
              </div>
            </div>
            
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
