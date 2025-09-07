/** @jsxImportSource solid-js */

import Assets from "./Assets";

const ContactMe = () => {
    return (
        <div style={{"font-size": "1.5rem"}} class="hero-contact w-[48%] mx-auto flex flex-col lg:flex-row text-sm justify-between">

            <div class="phone-container flex-1 flex my-5 items-center">
              <div class="w-6 h-6 bg-(--text-color-two) flex items-center justify-center mr-3 rounded-xl">
                <Assets 
                  assetName="phone"
                  attribute={() => {
                    return {
                      class: "w-4",
                      fill: "#000000"
                    } 
                  }} 
                />
              </div>
              <a class="hover:underline" href="https://api.whatsapp.com/send?phone=62895352837926&text=Hai%20Dlan%2C%20Aku%20datang%20dari%20Website-Mu!">Contact me By Whatsapp!</a>
            </div>

            <div class="email-container flex-1 flex items-center">
              <div class="w-6 h-6 bg-(--text-color-two) flex items-center justify-center mr-3 rounded-xl">
                <Assets
                  assetName="email"
                  attribute={() => {
                    return {
                      class: "w-4",
                      fill: "#000000"
                    } 
                  }} 
                />
              </div>
              <a class="hover:underline" href="mailto:fadlank.noer@gmail.com">Contact me By Email!</a>
            </div>

          {/* Close hero-contact */}
        </div>
    )
}

export default ContactMe;
