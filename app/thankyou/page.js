import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ThankYou() {
  return (
    <>
      <div className="flex items-center justify-center h-[40vh] py-[4rem] pt-[6rem]">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-black">Thank You!</h1>
          <p className="lg:text-xl text-black text-md">
            Your response has been recorded.  <span className="lg:hidden inline"><br /></span>Our team will reach out to you soon and confirm the booking.
          </p>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 py-[1rem] font-bold text-black"
          >
            <ArrowLeft className="w-5 h-5 " />
            <span >HOME</span>
          </Link>
        </div>
      </div>
      {/* Contact */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-antonio mb-6">Contact Us</h2>
        <p className="text-gray-700">Email: info@filmestudio.com</p>
        <p className="text-gray-700 mt-2">Phone: +91 96502 58881</p>
        {/* <div className="mt-6">
          <button
            onClick={() => router.push("/studioform")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg"
          >
            Book Now
          </button>
        </div> */}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6 md:px-20 text-center">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <Image
              src="/images/filme-logo-white.png"
              alt="Filme Studio Logo"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Filme Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
