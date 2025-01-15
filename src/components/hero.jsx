const { default: Image } = require("next/image")

const HeroSection = () => {
   return (
      <section className="lg:px-24 px-6">
         <div className="absolute inset-0 bg-[url('/images/hero-overlay.jpeg')] bg-cover opacity-[2%] h-[40rem] bg-no-repeat bg-center "></div>
         <div className="relative z-10 lg:mt-20 mt-9 lg:mb-36 mb-20">
            <div className="grid md:grid-cols-2 gap-x-16 items-center">
               <h1 className="text-[#8BAC3E] lg:text-[64px] text-[48px] font-bold leading-[68px] order-1 md:order-none block md:hidden">Good Food Us Good Mood</h1>
               <div className="space-y-4 order-3 md:order-none">
                  <h1 className="text-[#8BAC3E] lg:text-[64px] text-[48px] font-bold leading-[68px] order-1 md:order-none hidden md:block">Good Food Us Good Mood</h1>
                  <p className="text-[#757575] leading-[29px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                  <div className="flex gap-x-3">
                     <button className="py-2 px-4 bg-[#8BAC3E] text-white rounded-full shadow-md">Daftar Sekarang</button>
                     <button className="py-2 px-4 bg-[##F2F2F2] rounded-full text-[#333333]">About Us</button>
                  </div>
               </div>
               <div className="flex lg:justify-center md:justify-center justify-start items-center relative mt-20 md:my-0 mb-32 lg:my-0 order-2 md:order-none">
                  <div className="absolute lg:w-[490px] lg:h-[490px] w-[250px] h-[250px] bg-[#c4c4c44b] rounded-full"></div>
                  <Image src={"/images/hero-img.png"} className="relative left-[26px] md:left-0 lg:left-0 z-10 lg:w-[400px] lg:h-[400px] w-[195px] h-[195px]" width={400} height={400} alt="hero-img" />
                  <div className="py-5 px-7 bg-opacity-65 backdrop-blur-md bg-white rounded-xl absolute z-20 lg:-left-12 right-2 lg:-bottom-12 -bottom-20 flex gap-x-4 lg:w-80 shadow-md">
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