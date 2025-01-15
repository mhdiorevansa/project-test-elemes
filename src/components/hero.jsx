const { default: Image } = require("next/image")

const HeroSection = () => {
   return (
      <section>
         <div className="absolute inset-0 bg-[url('/images/hero-overlay.jpeg')] bg-cover opacity-[2%] bg-no-repeat bg-center"></div>
         <div className="relative z-10 grid grid-cols-2 gap-x-16 my-20 items-center">
            <div className="space-y-5">
               <h1 className="text-[#8BAC3E] text-[64px] font-bold leading-[68px]">Good Food Us Good Mood</h1>
               <p className="text-[#757575] leading-[29px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
               <div className="flex gap-x-3">
                  <button className="py-2 px-4 bg-[#8BAC3E] text-white rounded-full shadow-md">Daftar Sekarang</button>
                  <button className="py-2 px-4 bg-[##F2F2F2] rounded-full">About Us</button>
               </div>
            </div>
            <div className="flex justify-center items-center relative">
               <div className="absolute w-[490px] h-[490px] bg-[#c4c4c44b] rounded-full"></div>
               <Image src={"/images/hero-img.png"} className="relative z-10" width={400} height={400} alt="hero-img" />
               <div className="py-5 px-7 bg-opacity-65 backdrop-blur-md bg-white rounded-xl absolute z-20 -left-7 -bottom-16 flex gap-x-4">
                  <Image src={"/images/hero-img.png"} width={68} height={68} className="object-cover" alt="hero-img" />
                  <div className="space-y-1">
                     <h2>Green Salad Tomato</h2>
                     <p className="text-[#757575]">Tomato</p>
                     <svg width="70" height="11" viewBox="0 0 70 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_307_5427)">
                           <path d="M11.3363 4.08243C11.2542 3.82962 11.0089 3.65586 10.6632 3.60566L7.92193 3.20728L6.69601 0.723295C6.54141 0.410063 6.30032 0.230408 6.03455 0.230408C5.76877 0.230408 5.52769 0.410063 5.3731 0.723295L4.14723 3.20726L1.40594 3.60564C1.06024 3.65584 0.814894 3.82962 0.732749 4.08238C0.650626 4.33517 0.746992 4.61996 0.99709 4.86377L2.98069 6.79725L2.51242 9.5275C2.45085 9.88663 2.55542 10.1014 2.65401 10.2183C2.76933 10.3551 2.93755 10.4304 3.1277 10.4304C3.27146 10.4304 3.42456 10.3883 3.58267 10.3051L6.03455 9.01604L8.48643 10.3051C8.64457 10.3882 8.79766 10.4304 8.94144 10.4304H8.94148C9.13165 10.4304 9.29987 10.3551 9.41519 10.2183C9.51376 10.1014 9.61835 9.88661 9.55676 9.52746L9.08842 6.79727L11.072 4.86381C11.3221 4.62 11.4185 4.33519 11.3363 4.08243Z" fill="#FF8412" />
                        </g>
                        <g clipPath="url(#clip1_307_5427)">
                           <path d="M25.995 4.08243C25.9129 3.82962 25.6675 3.65586 25.3219 3.60566L22.5806 3.20728L21.3547 0.723295C21.2001 0.410063 20.959 0.230408 20.6932 0.230408C20.4275 0.230408 20.1864 0.410063 20.0318 0.723295L18.8059 3.20726L16.0646 3.60564C15.7189 3.65584 15.4736 3.82962 15.3914 4.08238C15.3093 4.33517 15.4057 4.61996 15.6558 4.86377L17.6394 6.79725L17.1711 9.5275C17.1095 9.88663 17.2141 10.1014 17.3127 10.2183C17.428 10.3551 17.5962 10.4304 17.7864 10.4304C17.9301 10.4304 18.0833 10.3883 18.2414 10.3051L20.6932 9.01604L23.1451 10.3051C23.3033 10.3882 23.4564 10.4304 23.6001 10.4304H23.6002C23.7903 10.4304 23.9586 10.3551 24.0739 10.2183C24.1725 10.1014 24.277 9.88661 24.2155 9.52746L23.7471 6.79727L25.7307 4.86381C25.9808 4.62 26.0772 4.33519 25.995 4.08243Z" fill="#FF8412" />
                        </g>
                        <g clipPath="url(#clip2_307_5427)">
                           <path d="M40.6537 4.08243C40.5716 3.82962 40.3262 3.65586 39.9806 3.60566L37.2393 3.20728L36.0134 0.723295C35.8588 0.410063 35.6177 0.230408 35.3519 0.230408C35.0862 0.230408 34.8451 0.410063 34.6905 0.723295L33.4646 3.20726L30.7233 3.60564C30.3776 3.65584 30.1323 3.82962 30.0501 4.08238C29.968 4.33517 30.0644 4.61996 30.3145 4.86377L32.2981 6.79725L31.8298 9.5275C31.7682 9.88663 31.8728 10.1014 31.9714 10.2183C32.0867 10.3551 32.2549 10.4304 32.4451 10.4304C32.5888 10.4304 32.7419 10.3883 32.9001 10.3051L35.3519 9.01604L37.8038 10.3051C37.962 10.3882 38.115 10.4304 38.2588 10.4304H38.2589C38.449 10.4304 38.6173 10.3551 38.7326 10.2183C38.8311 10.1014 38.9357 9.88661 38.8741 9.52746L38.4058 6.79727L40.3894 4.86381C40.6395 4.62 40.7359 4.33519 40.6537 4.08243Z" fill="#FF8412" />
                        </g>
                        <g clipPath="url(#clip3_307_5427)">
                           <path d="M55.3124 4.08243C55.2303 3.82962 54.9849 3.65586 54.6393 3.60566L51.898 3.20728L50.6721 0.723295C50.5175 0.410063 50.2764 0.230408 50.0106 0.230408C49.7448 0.230408 49.5038 0.410063 49.3492 0.723295L48.1233 3.20726L45.382 3.60564C45.0363 3.65584 44.791 3.82962 44.7088 4.08238C44.6267 4.33517 44.7231 4.61996 44.9732 4.86377L46.9568 6.79725L46.4885 9.5275C46.4269 9.88663 46.5315 10.1014 46.6301 10.2183C46.7454 10.3551 46.9136 10.4304 47.1038 10.4304C47.2475 10.4304 47.4006 10.3883 47.5587 10.3051L50.0106 9.01604L52.4625 10.3051C52.6206 10.3882 52.7737 10.4304 52.9175 10.4304H52.9176C53.1077 10.4304 53.2759 10.3551 53.3913 10.2183C53.4898 10.1014 53.5944 9.88661 53.5328 9.52746L53.0645 6.79727L55.0481 4.86381C55.2982 4.62 55.3946 4.33519 55.3124 4.08243Z" fill="#FF8412" />
                        </g>
                        <g clipPath="url(#clip4_307_5427)">
                           <path d="M69.9711 4.08243C69.889 3.82962 69.6436 3.65586 69.2979 3.60566L66.5567 3.20728L65.3308 0.723295C65.1762 0.410063 64.9351 0.230408 64.6693 0.230408C64.4035 0.230408 64.1625 0.410063 64.0079 0.723295L62.782 3.20726L60.0407 3.60564C59.695 3.65584 59.4497 3.82962 59.3675 4.08238C59.2854 4.33517 59.3818 4.61996 59.6319 4.86377L61.6155 6.79725L61.1472 9.5275C61.0856 9.88663 61.1902 10.1014 61.2888 10.2183C61.4041 10.3551 61.5723 10.4304 61.7625 10.4304C61.9062 10.4304 62.0593 10.3883 62.2174 10.3051L64.6693 9.01604L67.1212 10.3051C67.2793 10.3882 67.4324 10.4304 67.5762 10.4304H67.5762C67.7664 10.4304 67.9346 10.3551 68.05 10.2183C68.1485 10.1014 68.2531 9.88661 68.1915 9.52746L67.7232 6.79727L69.7068 4.86381C69.9569 4.62 70.0533 4.33519 69.9711 4.08243Z" fill="#C9C9C9" />
                        </g>
                        <defs>
                           <clipPath id="clip0_307_5427">
                              <rect width="10.6609" height="10.6609" fill="white" transform="translate(0.704102)" />
                           </clipPath>
                           <clipPath id="clip1_307_5427">
                              <rect width="10.6609" height="10.6609" fill="white" transform="translate(15.3628)" />
                           </clipPath>
                           <clipPath id="clip2_307_5427">
                              <rect width="10.6609" height="10.6609" fill="white" transform="translate(30.0215)" />
                           </clipPath>
                           <clipPath id="clip3_307_5427">
                              <rect width="10.6609" height="10.6609" fill="white" transform="translate(44.6802)" />
                           </clipPath>
                           <clipPath id="clip4_307_5427">
                              <rect width="10.6609" height="10.6609" fill="white" transform="translate(59.3389)" />
                           </clipPath>
                        </defs>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HeroSection;