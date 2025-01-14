import Image from "next/image";

const Navbar = () => {
   return (
      <header>
         <nav className="flex items-center justify-between">
            <Image src={"/images/brand.png"} width={200} height={50} alt="brand-img"></Image>
            <ul className="flex gap-x-7 text-[#757575]">
               <li>Home</li>
               <li>About</li>
               <li className="relative">Promotions <span className="bg-[#E7462D] text-white text-[8px] px-2 py-1 rounded-full absolute -top-5 left-16">HOT</span></li>
               <li>Blogs</li>
               <li>Contact Us</li>
            </ul>
            <div className="flex gap-x-6">
               <button>Masuk</button>
               <button className="py-2 px-4 bg-[#8BAC3E] text-white rounded-full">Daftar Sekarang</button>
            </div>
         </nav>
      </header>
   )
}

export default Navbar;