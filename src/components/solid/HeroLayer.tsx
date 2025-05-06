import { createSignal } from "solid-js";
import "../../../styles/HeroLayer.css";
import Assets from "./ui/Assets";
import ContactMe from "./ui/ContactMe";

const HeroLayer = () => {
  // State Management
  const [cvCount, setCvCount] = createSignal(0);

  function openCV () {
    setCvCount((count) => count + 1);
    //window.open('/files/cv-fadlan.pdf');

    console.log("CV Terunduh: ", cvCount());
  }

  return (
    <div class="hero-container w-screen h-screen bg-(--primary-color) text-(--text-color-one) flex items-center justify-center">
      <div class="flex-container w-5xl h-6/10 flex justify-between">

        {/* Left Side Hero */}
        <div class="left-side-text-container basis-sm my-auto">

          <p class="text-6xl text-justify">MY NAME IS <b>FADLAN NOER...</b></p>

          <br/>

          <p><span class="font-bold italic">Software Engineer</span> based in <span class="font-bold italic">Indonesia</span></p>

          <div 
            class="button-cv flex items-center justify-center my-[48px] w-[258px] h-[56px] bg-white text-(--primary-color)"
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
        <div class="img-container">
          <img src="/assets/half-body.png" class="w-70"/>
        </div>

        {/* Socmed Floating */}
        <div class="rotated-socmed bg-red-700 h-[50%] mx-auto">
          <p>Parameter</p>
          
          <div class="floating-bar">

          </div>
          
          <div class="redirect-socmed">

          </div>

          
        </div>

      {/* Close flex-container */}
      </div>
    {/* Close container */}
    </div>
  )
}

export default HeroLayer;
