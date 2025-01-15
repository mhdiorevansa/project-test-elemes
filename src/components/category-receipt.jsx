"use client";

import Image from "next/image";

const CategoryReceiptSection = () => {
   const categoryReceipt = [
      {
         id: 1,
         name: "Cupcake",
         qty: 22,
         cardColor: "bg-[#F0FEEB]",
         icon: `/images/cupcake.png`
      },
      {
         id: 2,
         name: "Pizza",
         qty: 25,
         cardColor: "bg-[#E6F3F5]",
         icon: `/images/pizza.png`
      },
      {
         id: 3,
         name: "Kebab",
         qty: 12,
         cardColor: "bg-[#EAEEFA]",
         icon: `/images/kebab.png`
      },
      {
         id: 4,
         name: "Salmon",
         qty: 22,
         cardColor: "bg-[#F9EEF3]",
         icon: `/images/salmon.png`
      },
      {
         id: 5,
         name: "Doughnut",
         qty: 11,
         cardColor: "bg-[#F3F7D9]",
         icon: `/images/doughnut.png`
      }
   ];

   const scrollNext = () => {
      const element = document.querySelector(".snap-x");
      element.scrollBy({
         left: element.offsetWidth,
         behavior: "smooth"
      });
   };

   const scrollPrev = () => {
      const element = document.querySelector(".snap-x");
      element.scrollBy({
         left: -element.offsetWidth,
         behavior: "smooth"
      });
   };

   return (
      <section className="md:ps-24">
         <h1 className="md:text-4xl text-3xl font-semibold mb-3 ps-10 md:ps-0">Browser Our Category</h1>
         <h2 className="md:text-4xl text-3xl font-semibold text-[#8BAC3E] ps-10 md:ps-0">Receipt</h2>
         <div className="flex flex-nowrap gap-x-3 my-12 overflow-x-auto snap-x snap-mandatory">
            {[...categoryReceipt, ...categoryReceipt].map((item, index) => (
               <div className={`p-7 w-[228px] flex-shrink-0 h-auto rounded-lg ${item.cardColor} text-center flex flex-col justify-center items-center gap-y-3 snap-center`} key={index}>
                  <Image src={item.icon} width={40} height={40} alt={`icon ${item.name}`}></Image>
                  <div className="leading-relaxed">
                     <p className="font-[500]">{item.name}</p>
                     <p className="font-[400]">{item.qty} Items</p>
                  </div>
               </div>
            ))}
         </div>
         <div className="md:flex gap-x-5 justify-end pe-24 hidden">
            <button className="bg-[#8BAC3E] text-white py-3 px-5 rounded-full relative flex items-center gap-x-2" onClick={() => scrollPrev()}>
               <div className="relative w-[35px] h-[35px] bg-white rounded-full text-black flex items-center justify-center p-3">
                  <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.0257 8.82185L10.4693 0.280476C10.8837 -0.0934919 11.555 -0.0934919 11.9705 0.280476C12.3848 0.654443 12.3848 1.26186 11.9705 1.63583L3.27592 9.49949L11.9694 17.3631C12.3838 17.7371 12.3838 18.3445 11.9694 18.7194C11.555 19.0934 10.8826 19.0934 10.4683 18.7194L1.02465 10.1781C0.616552 9.80797 0.616553 9.191 1.0257 8.82185Z" fill="#8BAC3E" />
                  </svg>
               </div>
               <span>PREV</span>
            </button>
            <button className="bg-[#8BAC3E] text-white py-3 px-5 rounded-full relative flex items-center gap-x-2" onClick={() => scrollNext()}>
               <span>NEXT</span>
               <div className="relative w-[35px] h-[35px] bg-white rounded-full text-black flex items-center justify-center p-3">
                  <svg width="13" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.2314 8.85223L2.06946 0.692977C1.71132 0.335739 1.13107 0.335739 0.772024 0.692977C0.413883 1.05021 0.413883 1.63046 0.772024 1.9877L8.28659 9.49956L0.772929 17.0114C0.414787 17.3687 0.414787 17.9489 0.772929 18.307C1.13107 18.6643 1.71222 18.6643 2.07036 18.307L10.2323 10.1478C10.585 9.79424 10.585 9.20487 10.2314 8.85223Z" fill="#8BAC3E" />
                  </svg>
               </div>
            </button>
         </div>
      </section>
   )
}

export default CategoryReceiptSection;