const HeroLayer = () => {

  return (
    <div class="hero-container w-screen h-screen bg-(--primary-color) text-(--text-color-one)">
      <div class="flex-container w-full h-full flex">

        {/* Left Side Hero */}
        <div>
          <p class="text-5xl font-bold">MY NAME IS FADLAN KAUTSAR NOER</p>
          <p>Software Engineer based on Indonesia</p>
          <button>Know Me More</button>
          <div class="hero-contact flex">
            <p>+62 895-3528-37926</p>
            <p>fadlank.noer@gmail.com</p>
          {/* Close hero-contact */}
          </div>
        </div>

        {/* Right Side Hero */}
        <div class="img-container w-50">
          <img src="../../../public/assets/half-body.png"/>
        </div>

        {/* Socmed Floating */}
        <div>
        </div>

      {/* Close flex-container */}
      </div>
    {/* Close container */}
    </div>
  )
}

export default HeroLayer;
