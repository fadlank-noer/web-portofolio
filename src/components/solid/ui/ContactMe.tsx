import Assets from "./Assets";

const ContactMe = () => {
    return (
        <div class="hero-contact flex flex-col items-center lg:flex-row text-sm justify-between">

            <div class="phone-container flex-1 flex items-center">
              <div class="w-6 h-6 bg-(--text-color-two) flex items-center justify-center mr-3 rounded-xl">
                <Assets 
                  assetName="phone"
                  attribute={() => {
                    return {
                      className: "w-4",
                      fill: "#000000"
                    } 
                  }} 
                />
              </div>
              <p>+62 895-3528-37926</p>
            </div>

            <div class="email-container flex-1 flex items-center">
              <div class="w-6 h-6 bg-(--text-color-two) flex items-center justify-center mr-3 rounded-xl">
                <Assets
                  assetName="email"
                  attribute={() => {
                    return {
                      className: "w-4",
                      fill: "#000000"
                    } 
                  }} 
                />
              </div>
              <p>fadlank.noer@gmail.com</p>
            </div>

          {/* Close hero-contact */}
        </div>
    )
}

export default ContactMe;
