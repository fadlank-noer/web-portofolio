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
    }

    return (
        <div id="anchor-hero" className="w-screen min-h-screen bg-(--primary-color) text-(--text-color-one) pb-7 text-4xl">
            {/* Main Container */}
            <div className="container mx-auto w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 py-8">
                
                {/* Photo Comes First */}
                <div className="img-container flex items-center">
                    <div className="flex-container">        
                        {/* Accesories */}
                        <Accesories assetNumber={1} />
                        <Accesories assetNumber={2} />
                        <Accesories assetNumber={3} />
                        <Accesories assetNumber={4} />
                        <Accesories assetNumber={5} />
                        
                        {/* Image Section */}
                        <img src="/assets/half-body.png" className="w-90 z-2 relative"/>
                    </div>
                </div>

                {/* Text And Button CV */}
                <div className="text-and-button-container px-3">
                    
                    {/* Name and Job */}
                    <p className="text-center my-8 lg:mt-0">MY NAME IS <b>FADLAN KAUTSAR NOER...</b></p>
                    <p className="text-center"><span className="font-bold italic">Software Engineer</span> based in <span className="font-bold italic">Indonesia</span></p>

                    {/* CV Button */}
                    <button 
                       className="flex items-center justify-center my-7 mx-auto w-100 h-15 bg-white text-(--primary-color) rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => openCV()}
                    >
                        <p className="mr-3 font-semibold">Know me by my CV!</p>
                        <div className="w-6 h-6 flex justify-center items-center bg-gradient-to-tr from-(--primary-color) via-(--primary-color) to-(--gradient-first) rounded">
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
                    </button>

                    {/* Contact Me Through this Component*/}
                    <ContactMe />
                </div>

                {/* Social Media */}
                <div className="socmed-container w-90 mt-10">
                    {/* Floating Bar */}
                    <div className="floating-bar h-1.5 w-full lg:h-full lg:w-1.5 rounded-sm bg-(--text-color-two)"/>

                    {/* Socmed Links Horizontal */}
                    <div className="w-65 mx-auto mt-5 flex flex-row lg:flex-col content-center justify-between">
                        <RoundedIcon assetName="github" className="lg:mb-2"/>
                        <RoundedIcon assetName="upwork" className="lg:mb-2"/>
                        <RoundedIcon assetName="x-com" className="lg:mb-2"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HeroLayer