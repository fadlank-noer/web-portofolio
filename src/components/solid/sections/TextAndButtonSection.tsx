/** @jsxImportSource solid-js */

import { createSignal } from "solid-js";
import Assets from "../ui/Assets";
import ContactMe from "../ui/ContactMe";

const TextAndButtonSection = () => {
    // State Management
    const [cvCount, setCvCount] = createSignal(0);

    function openCV () {
        setCvCount((count) => count + 1);
        window.open('/files/cv-fadlan.pdf');
    }

    return (
        <div class="text-and-button-container px-3">
            
            {/* Name and Job */}
            <p class="text-center my-6 md:my-8 lg:mt-0">MY NAME IS <b>FADLAN KAUTSAR NOER...</b></p>
            <p class="text-center text-xl md:text-2xl"><span class="font-bold italic">Software Engineer</span> based in <span class="font-bold italic">Indonesia</span></p>

            {/* CV Button */}
            <button 
               class="flex items-center justify-center my-6 md:my-7 mx-auto w-full max-w-md h-12 md:h-15 bg-white text-(--primary-color) rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openCV()}
            >
                <p class="mr-3 font-semibold text-base md:text-lg">Know me by my CV!</p>
                <div class="w-6 h-6 flex justify-center items-center bg-gradient-to-tr from-(--primary-color) via-(--primary-color) to-(--gradient-first) rounded">
                <Assets 
                    assetName="diagonal-arrow"
                    attribute={() => {
                    return {
                        class: "w-3",
                        fill: "#ffffff"
                    } 
                    }} 
                />
                </div>
            </button>

            {/* Contact Me Through this Component*/}
            <ContactMe />
        </div>
    )
}

export default TextAndButtonSection;