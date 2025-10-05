import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
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

        {/* Social Links */}
        <div className="flex space-x-6 mt-4">
          <Link
            href="https://www.instagram.com/filmestudiogurgaon/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            href="https://www.facebook.com/people/FILME-Studio/61579994143718/?mibextid=wwXIfr&rdid=Iem5uP5QDeE9VNVU&share_url=https://www.facebook.com/share/19Y86CE5fn/?mibextid%3DwwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={22} />
          </Link>
        </div>

        <p className="text-gray-400 text-sm mt-4">
          © {new Date().getFullYear()} Filme Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
