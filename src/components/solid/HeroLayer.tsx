import "../../../styles/HeroLayer.css";
import DiagonalArrow from "./svgs/DiagonalArrow";

const HeroLayer = () => {

  return (
    <div class="hero-container w-screen h-screen bg-(--primary-color) text-(--text-color-one) flex items-center justify-center">
      <div class="flex-container w-5xl h-6/10 flex justify-between">

        {/* Left Side Hero */}
        <div class="left-side-text-container basis-xs my-auto">

          <p class="text-6xl text-justify">MY NAME IS <b>FADLAN NOER...</b></p>

          <br/>

          <p><span class="font-bold italic">Software Engineer</span> based in <span class="font-bold italic">Indonesia</span></p>

          <div class="button-cv flex items-center justify-center my-[48px] w-[258px] h-[56px] bg-white text-(--primary-color)">
            <p class="mr-3">Know me by my CV!</p>

            <div class="w-6 h-6 flex justify-center items-center bg-linear-to-tr from-[#44749d] via-[#44749d] to-(--text-color-one)">
              <DiagonalArrow className="w-4" fill="var(--text-color-one)"/>
            </div>
          </div>

          <div class="hero-contact flex text-xs">
            <p>+62 895-3528-37926</p>
            <p>fadlank.noer@gmail.com</p>
          {/* Close hero-contact */}
          </div>

        </div>

        {/* Right Side Hero */}
        <div class="img-container">
          <img src="/assets/half-body.png" class="w-70"/>
        </div>

        {/* Socmed Floating */}
        <div class="rotated-socmed shrink-2">
          <p>parameter</p>
        </div>

      {/* Close flex-container */}
      </div>
    {/* Close container */}
    </div>
  )
}

export default HeroLayer;
