import Image from "next/image";

const Navbar = () => {
   return (
      <header className="lg:px-24 px-6 py-7">
         <nav className="flex items-center justify-between relative z-10">
            <Image src={"/images/brand.png"} width={200} height={50} className="w-[150px] h-[36px] lg:w-[200px] lg:h-[50px]" alt="brand-img" />
            <ul className="lg:flex gap-x-7 text-[#757575] hidden">
               <li>Home</li>
               <li>About</li>
               <li className="relative">Promotions <span className="bg-[#E7462D] text-white text-[8px] px-2 py-1 rounded-full absolute -top-5 left-16">HOT</span></li>
               <li>Blogs</li>
               <li>Contact Us</li>
            </ul>
            <div className="flex gap-x-6">
               <button className="hidden lg:block text-[#333333]">Masuk</button>
               <button className="py-2 px-4 bg-[#8BAC3E] text-white rounded-full text-sm lg:text-base">Daftar Sekarang</button>
            </div>
         </nav>
      </header>
   )
}

export default Navbar;