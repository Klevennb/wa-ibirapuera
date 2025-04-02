import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen px-8 gap-16 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 items-center sm:items-start w-full flex-grow">
        {/* Content Section */}
        <div className="bg-gray-100 shadow-lg flex justify-center w-full rounded-md pb-16">
          <div className="flex flex-col md:flex-row mt-24 items-center md:items-start space-y-4 md:space-y-0 md:space-x-24 max-w-4xl">
            <div className="flex flex-col z-10">
              <Image
                src="/WriteAway.png"
                alt="WriteAway logo"
                height={300}
                width={300}
              />

              <div className="max-w-96">
                WriteAway is not just a tool that helps you become a better
                writer. It is a community that provides an audience to solicit
                feedback or even just a place write daily while building the
                habits of a succesful writer. Join now and see what you can
                create.
              </div>
              <Button variant={'writeAway'}>
                <Link href={"/login"}>Get Started</Link>{" "}
              </Button>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 overflow-hidden">
              <Image
                src="/writeawaylanding.png"
                alt="A blank page on a table, ready to be filled"
                className="object-cover w-full h-64 md:h-96 rounded-lg shadow-lg"
                width={800}
                height={600}
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
