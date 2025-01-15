import Image from "next/image";

const TrendingReceiptSection = () => {
   const trendingReceipt = [
      {
         id: 1,
         name: "Pizza Paperoni",
         category: "Pizza",
         icon: "/images/star-4.png",
         cardColor: "bg-[#E6F3F5]",
         image: "/images/pizza-paperoni.jpeg"
      },
      {
         id: 2,
         name: "Pizza Meat",
         category: "Pizza",
         icon: "/images/star-3.png",
         cardColor: "bg-[#E6F3F5]",
         image: "/images/pizza-meat.jpeg"
      },
      {
         id: 3,
         name: "Doner Kebab",
         category: "Kebab",
         icon: "/images/star-5.png",
         cardColor: "bg-[#EAEEFA]",
         image: "/images/doner-kebab.jpeg"
      },
      {
         id: 4,
         name: "Salmon Roll",
         category: "Kebab",
         icon: "/images/star-4.png",
         cardColor: "bg-[#F9EEF3]",
         image: "/images/salmon-role.jpeg"
      },
      {
         id: 5,
         name: "Cupcake Choco",
         category: "Cupcake",
         icon: "/images/star-4.png",
         cardColor: "bg-[#F0FEEB]",
         image: "/images/cupcake-choco.jpeg"
      },
      {
         id: 6,
         name: "Doughnut Milk",
         category: "Doughnut",
         icon: "/images/star-5.png",
         cardColor: "bg-[#F3F7D9]",
         image: "/images/doughnut-milk.jpeg"
      },
      {
         id: 7,
         name: "Doughnut Unicorn",
         category: "Doughnut",
         icon: "/images/star-4.png",
         cardColor: "bg-[#F3F7D9]",
         image: "/images/doughnut-unicorn.jpeg"
      },
      {
         id: 8,
         name: "Kathi Kebab",
         category: "Kebab",
         icon: "/images/star-4.png",
         cardColor: "bg-[#EAEEFA]",
         image: "/images/kathi-kebab.jpeg"
      }
   ];
   return (
      <section className="lg:px-24 px-6">
         <h1 className="lg:text-4xl text-3xl font-semibold mb-3 text-[#333333]">Browser Our Trending</h1>
         <h2 className="lg:text-4xl text-3xl font-semibold text-[#8BAC3E]">Receipt</h2>
         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-6 my-12">
            {trendingReceipt.map((item, index) => {
               return (
                  <div className={`px-4 py-5 rounded-xl ${item.cardColor} shadow-sm hover:bg-[url('/images/overlay-card-hover.png')] hover:bg-cover hover:bg-no-repeat hover:bg-center hover:inset-0`} key={index}>
                     <Image className="rounded-lg overflow-hidden w-[118px] h-[120px] object-cover" src={`${item.image}`} width={118} height={120} alt={`image ${item.name}`} />
                     <div className="mt-4 space-y-1">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-[#8BAC3E]">{item.category}</p>
                        <Image src={item.icon} width={50} height={50} alt={`rating ${item.name}`} />
                     </div>
                  </div>
               )
            })}
         </div>
         <div className="md:flex justify-center hidden">
            <button className="bg-[#8BAC3E] text-white py-2 px-5 rounded-full text-center">
               <span>ALL Receipt</span>
            </button>
         </div>
      </section>
   )
}

export default TrendingReceiptSection