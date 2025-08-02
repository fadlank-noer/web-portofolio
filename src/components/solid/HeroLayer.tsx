import { createSignal } from "solid-js";
import Accesories from "./ui/Accesories";
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
        <div class="w-screen h-(--container-height) bg-(--primary-color) text-(--text-color-one)">
            {/* Main Container */}
            <div class="container w-full h-full flex flex-col lg:flex-row items-center">
                
                {/* Photo Comes First */}
                <div class="img-container flex items-center">
                    <div class="flex-container">        
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

                {/* Text And Button CV */}
                <div class="text-and-button-container px-3">
                    
                    {/* Name and Job */}
                    <p class="text-center mt-15 lg:mt-0">MY NAME IS <b>FADLAN KAUTSAR NOER...</b></p>
                    <p class="text-center"><span class="font-bold italic">Software Engineer</span> based in <span class="font-bold italic">Indonesia</span></p>

                    {/* CV Button */}
                    <div 
                        class="flex items-center justify-center my-7 mx-auto w-75 h-15 bg-white text-(--primary-color)"
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
                    </div>

                    {/* Contact Me Through this Component*/}
                    <ContactMe />
                </div>

                {/* Social Media */}
                <div class="socmed-container w-90 mt-10">
                    {/* Floating Bar */}
                    <div class="floating-bar w-full h-1.5 rounded-sm bg-(--text-color-two)"/>

                    {/* Socmed Links Horizontal */}
                    <div class="w-65 mx-auto mt-5 flex flex-row content-center lg:hidden justify-between">
                        <RoundedIcon assetName="github"/>
                        <RoundedIcon assetName="upwork"/>
                        <RoundedIcon assetName="x-com" />
                    </div>
                </div>
                


            </div>
        </div>
    )
}

export default HeroLayer