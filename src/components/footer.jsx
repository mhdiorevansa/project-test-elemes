import Image from "next/image";

const Footer = () => {
   return (
      <footer className="lg:px-24 px-6 py-7 lg:block hidden">
         <div className="mt-20 mb-16 grid grid-cols-4 gap-x-10 px-10 py-16 bg-[#F9FFF6] rounded-3xl">
            <div className="flex flex-col gap-y-5">
               <Image src={"/images/brand.png"} width={200} height={50} alt="brand-img" />
               <p className="text-[#757575]">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                  Kecamatan Setiabudi, Kota Jakarta Selatan,
                  Daerah Khusus Ibukota Jakarta 12950</p>
               <div className="flex gap-x-2">
                  <div className="relative hover:bg-[#8BAC3E] rounded-full p-2">
                     <svg width="22" height="22" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#8BAC3E] hover:stroke-white">
                        <path d="M1.5 3.66675L8.075 8.05008C8.34888 8.23281 8.67075 8.33033 9 8.33033C9.32925 8.33033 9.65112 8.23281 9.925 8.05008L16.5 3.66675M3.16667 12.8334H14.8333C15.2754 12.8334 15.6993 12.6578 16.0118 12.3453C16.3244 12.0327 16.5 11.6088 16.5 11.1667V2.83341C16.5 2.39139 16.3244 1.96746 16.0118 1.6549C15.6993 1.34234 15.2754 1.16675 14.8333 1.16675H3.16667C2.72464 1.16675 2.30072 1.34234 1.98816 1.6549C1.67559 1.96746 1.5 2.39139 1.5 2.83341V11.1667C1.5 11.6088 1.67559 12.0327 1.98816 12.3453C2.30072 12.6578 2.72464 12.8334 3.16667 12.8334Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
                  <div className="relative hover:bg-[#8BAC3E] rounded-full p-2">
                     <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#8BAC3E] hover:stroke-white">
                        <path d="M1.98816 1.98816C1.67559 2.30072 1.5 2.72464 1.5 3.16667V4C1.5 10.9033 7.09667 16.5 14 16.5H14.8333C15.2754 16.5 15.6993 16.3244 16.0118 16.0118C16.3244 15.6993 16.5 15.2754 16.5 14.8333V12.1008C16.5 11.9259 16.445 11.7553 16.3427 11.6134C16.2404 11.4714 16.096 11.3653 15.93 11.31L12.1858 10.0617C11.9956 9.99841 11.7888 10.0059 11.6036 10.0827C11.4184 10.1596 11.2671 10.3006 11.1775 10.48L10.2358 12.3608C8.19538 11.4389 6.5611 9.80462 5.63917 7.76417L7.52 6.8225C7.69938 6.73288 7.84042 6.58158 7.91726 6.39637C7.9941 6.21116 8.00158 6.00445 7.93833 5.81417L6.69 2.07C6.63475 1.90413 6.52874 1.75984 6.38696 1.65754C6.24519 1.55525 6.07483 1.50013 5.9 1.5H3.16667C2.72464 1.5 2.30072 1.67559 1.98816 1.98816Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
                  <div className="relative hover:bg-[#8BAC3E] rounded-full p-2">
                     <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#8BAC3E] hover:fill-white">
                        <path d="M7.99992 1.87187C9.99588 1.87187 10.2326 1.87935 11.0213 1.91548C13.0471 2.00768 13.9934 2.9689 14.0856 4.97982C14.1217 5.76786 14.1286 6.00458 14.1286 8.00054C14.1286 9.99712 14.1211 10.2332 14.0856 11.0213C13.9928 13.0303 13.049 13.9934 11.0213 14.0856C10.2326 14.1217 9.99712 14.1292 7.99992 14.1292C6.00396 14.1292 5.76723 14.1217 4.97919 14.0856C2.94835 13.9928 2.00706 13.0272 1.91486 11.0206C1.87873 10.2326 1.87125 9.9965 1.87125 7.99992C1.87125 6.00396 1.87935 5.76786 1.91486 4.97919C2.00768 2.9689 2.95146 2.00706 4.97919 1.91486C5.76786 1.87935 6.00396 1.87187 7.99992 1.87187ZM7.99992 0.524414C5.9697 0.524414 5.71553 0.533135 4.91814 0.569267C2.20329 0.693859 0.694482 2.20017 0.56989 4.91752C0.533135 5.71553 0.524414 5.9697 0.524414 7.99992C0.524414 10.0301 0.533135 10.2849 0.569267 11.0823C0.693859 13.7972 2.20017 15.306 4.91752 15.4306C5.71553 15.4667 5.9697 15.4754 7.99992 15.4754C10.0301 15.4754 10.2849 15.4667 11.0823 15.4306C13.7947 15.306 15.3072 13.7997 15.4299 11.0823C15.4667 10.2849 15.4754 10.0301 15.4754 7.99992C15.4754 5.9697 15.4667 5.71553 15.4306 4.91814C15.3085 2.20578 13.8003 0.694482 11.0829 0.56989C10.2849 0.533135 10.0301 0.524414 7.99992 0.524414V0.524414ZM7.99992 4.16125C5.87999 4.16125 4.16125 5.87999 4.16125 7.99992C4.16125 10.1198 5.87999 11.8392 7.99992 11.8392C10.1198 11.8392 11.8386 10.1205 11.8386 7.99992C11.8386 5.87999 10.1198 4.16125 7.99992 4.16125ZM7.99992 10.4918C6.6238 10.4918 5.50808 9.37666 5.50808 7.99992C5.50808 6.6238 6.6238 5.50808 7.99992 5.50808C9.37603 5.50808 10.4918 6.6238 10.4918 7.99992C10.4918 9.37666 9.37603 10.4918 7.99992 10.4918ZM11.9906 3.11281C11.4947 3.11281 11.0929 3.51462 11.0929 4.00987C11.0929 4.50512 11.4947 4.90693 11.9906 4.90693C12.4858 4.90693 12.887 4.50512 12.887 4.00987C12.887 3.51462 12.4858 3.11281 11.9906 3.11281Z" />
                     </svg>
                  </div>
               </div>
            </div>
            <div className="flex flex-col ms-10 gap-y-5">
               <h2 className="text-2xl font-semibold h-[50px]">Categories</h2>
               <ul className="text-[#757575] space-y-3">
                  <li>Cupcake</li>
                  <li>Pizza</li>
                  <li>Kebab</li>
                  <li>Salmon</li>
                  <li>Dougnut</li>
               </ul>
            </div>
            <div className="flex flex-col gap-y-5">
               <h2 className="text-2xl font-semibold h-[50px]">About Us</h2>
               <ul className="text-[#757575] space-y-3">
                  <li>About Us</li>
                  <li>FAQ</li>
                  <li>Report Problem</li>
               </ul>
            </div>
            <div className="flex flex-col gap-y-5">
               <h2 className="text-2xl font-semibold h-[50px]">Newsletter</h2>
               <p className="text-[#757575]">Get now free 50% discount for alll products on your first order</p>
               <form className="grid grid-cols-3">
                  <input type="email" name="email" id="email" placeholder="Your email address" className="border-l border-t border-b border-black p-2 rounded-tl-lg rounded-bl-lg placeholder:text-black col-span-2" />
                  <button type="submit" className="p-2 text-white bg-[#8BAC3E] col-span-1 rounded-tr-lg rounded-br-lg">SEND</button>
               </form>
               <div className="flex gap-x-3 items-center">
                  <svg width="22" height="22" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#8BAC3E]">
                     <path d="M1.5 3.66675L8.075 8.05008C8.34888 8.23281 8.67075 8.33033 9 8.33033C9.32925 8.33033 9.65112 8.23281 9.925 8.05008L16.5 3.66675M3.16667 12.8334H14.8333C15.2754 12.8334 15.6993 12.6578 16.0118 12.3453C16.3244 12.0327 16.5 11.6088 16.5 11.1667V2.83341C16.5 2.39139 16.3244 1.96746 16.0118 1.6549C15.6993 1.34234 15.2754 1.16675 14.8333 1.16675H3.16667C2.72464 1.16675 2.30072 1.34234 1.98816 1.6549C1.67559 1.96746 1.5 2.39139 1.5 2.83341V11.1667C1.5 11.6088 1.67559 12.0327 1.98816 12.3453C2.30072 12.6578 2.72464 12.8334 3.16667 12.8334Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>elemesid@gmail.com</span>
               </div>
               <div className="flex gap-x-3 items-center">
                  <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#8BAC3E]">
                     <path d="M1.98816 1.98816C1.67559 2.30072 1.5 2.72464 1.5 3.16667V4C1.5 10.9033 7.09667 16.5 14 16.5H14.8333C15.2754 16.5 15.6993 16.3244 16.0118 16.0118C16.3244 15.6993 16.5 15.2754 16.5 14.8333V12.1008C16.5 11.9259 16.445 11.7553 16.3427 11.6134C16.2404 11.4714 16.096 11.3653 15.93 11.31L12.1858 10.0617C11.9956 9.99841 11.7888 10.0059 11.6036 10.0827C11.4184 10.1596 11.2671 10.3006 11.1775 10.48L10.2358 12.3608C8.19538 11.4389 6.5611 9.80462 5.63917 7.76417L7.52 6.8225C7.69938 6.73288 7.84042 6.58158 7.91726 6.39637C7.9941 6.21116 8.00158 6.00445 7.93833 5.81417L6.69 2.07C6.63475 1.90413 6.52874 1.75984 6.38696 1.65754C6.24519 1.55525 6.07483 1.50013 5.9 1.5H3.16667C2.72464 1.5 2.30072 1.67559 1.98816 1.98816Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>0888 1111 2222 </span>
               </div>
            </div>
         </div>
         <p className="text-center text-[#757575]">© 2021 Elemes id. All rights reserved</p>
      </footer>
   )
}

export default Footer;