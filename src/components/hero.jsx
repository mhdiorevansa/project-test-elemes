const { default: Image } = require("next/image")

const HeroSection = () => {
   return (
      <section className="md:px-24 px-10">
         <div className="absolute inset-0 bg-[url('/images/hero-overlay.jpeg')] bg-cover opacity-[2%] bg-no-repeat bg-center"></div>
         <div className="relative z-10 md:mt-20 mt-9 md:mb-36 mb-20">
            <div className="grid md:grid-cols-2 gap-x-16 items-center">
               <div className="space-y-4">
                  <h1 className="text-[#8BAC3E] md:text-[64px] text-[48px] font-bold leading-[68px]">Good Food Us Good Mood</h1>
                  <p className="text-[#757575] leading-[29px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                  <div className="flex gap-x-3">
                     <button className="py-2 px-4 bg-[#8BAC3E] text-white rounded-full shadow-md">Daftar Sekarang</button>
                     <button className="py-2 px-4 bg-[##F2F2F2] rounded-full">About Us</button>
                  </div>
               </div>
               <div className="flex md:justify-center justify-start items-center relative my-20 md:my-0">
                  <div className="absolute md:w-[490px] md:h-[490px] w-[250px] h-[250px] bg-[#c4c4c44b] rounded-full"></div>
                  <Image src={"/images/hero-img.png"} className="relative left-[26px] md:left-0 z-10 md:w-[400px] md:h-[400px] w-[195px] h-[195px]" width={400} height={400} alt="hero-img" />
                  <div className="py-5 px-7 bg-opacity-65 backdrop-blur-md bg-white rounded-xl absolute z-20 md:-left-12 right-0 md:-bottom-12 -bottom-20 flex gap-x-4 md:w-80 shadow-md">
                     <Image src={"/images/hero-img.png"} width={68} height={68} className="object-cover" alt="hero-img" />
                     <div className="space-y-1">
                        <h2>Green Salad Tomato</h2>
                        <p className="text-[#757575]">Tomato</p>
                        <Image src={"/images/star-4.png"} width={50} height={50} alt="icon-rating" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HeroSection;