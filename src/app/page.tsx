import Image from "next/image";

export default function Home() {
  return (
    // <div className="bg-[#654321] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 gap-16 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
    //     <div className=" bg-gray-100 min-h-screen flex  justify-center w-full rounded-md">
    //       <div className="flex flex-col md:flex-row mt-24 items-center md:items-start space-y-4 md:space-y-0 md:space-x-12 max-w-4xl">
    //         <div className="flex flex-col z-10">
    //           <h1 className="text-6xl font-bold text-gray-900 relative">
    //             <span className="block relative -left-4">Write</span>
    //           </h1>

    //           <h1 className="text-6xl font-bold text-gray-900 relative mt-4">
    //             <span className="block relative left-4 -mt-3 text-gray-700">
    //               Away
    //             </span>
    //           </h1>
    //         </div>

    //         {/* Image Section */}
    //         <div className="relative w-full md:w-1/2 overflow-hidden">
    //           <Image
    //             src={"/writeawaylanding.png"}
    //             alt="WriteAway landing page"
    //             className="object-cover w-full h-64 md:h-96 rounded-lg shadow-lg"
    //             width={800} // Adjust width as needed
    //             height={600} // Adjust height as needed
    //           />

    //           {/* Overlay effect for the title overflow */}
    //           <div className="absolute -top-12 left-0 w-full h-1/3 bg-gradient-to-t from-transparent via-gray-100 to-gray-100 pointer-events-none"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <text>About Us</text>
    //   </footer>
    // </div>
    <div className="bg-gradient-to-br from-[#654321] to-transparent grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen px-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full flex-grow">
        {/* Content Section */}
        <div className="bg-gray-100 flex justify-center w-full rounded-md pb-16">
          <div className="flex flex-col md:flex-row mt-24 items-center md:items-start space-y-4 md:space-y-0 md:space-x-24 max-w-4xl">
            <div className="flex flex-col z-10">
              <h1 className="text-6xl font-bold text-gray-900 relative">
                <span className="block relative -left-4">Write</span>
              </h1>

              <h1 className="text-6xl font-bold text-gray-900 relative mt-4">
                <span className="block relative left-4 -mt-3 text-gray-700">
                  Away
                </span>
              </h1>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 overflow-hidden">
              <Image
                src="/writeawaylanding.png"
                alt="WriteAway landing page"
                className="object-cover w-full h-64 md:h-96 rounded-lg shadow-lg"
                width={800} // Adjust width as needed
                height={600} // Adjust height as needed
              />

              {/* Overlay effect for the title overflow */}
              <div className="absolute -top-12 left-0 w-full h-1/3 bg-gradient-to-t from-transparent via-gray-100 to-gray-100 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 w-full py-4 text-gray-700 text-center z-20">
        <p>Copyright © 2025 WriteAway Inc.</p>
      </footer>
    </div>


  );
}
