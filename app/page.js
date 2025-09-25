"use client";

import Image from "next/image";
// import { motion } from "framer-motion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import FeatureCard from "@/components/FeatureCard";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";
import { Star } from "lucide-react"; // make sure lucide-react is installed
import { CheckCircle, XCircle } from "lucide-react";

import {
  Mic,
  Package,
  Droplets,
  Bath,
  Wind,
  Refrigerator,
  ParkingCircle,
  User,
  Utensils,
  Wand2,
  AirVent,
  Shirt,
  Bluetooth,
  Zap,
  Lightbulb,
  Camera,
  ImageIcon,
  Video,
  CameraOff,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      title: "Main Stage",
      description:
        "30×15 ft open floor podcast area, vibrant colours living space with two podcast setups.",
    },
    {
      title: "Dynamic Backdrops",
      description: "Interchangeable colour-rich set options.",
    },
    {
      title: "Green Room & Lounge",
      description: "Full green screen wall for creative backgrounds and VFX.",
    },
    {
      title: "Power & Internet",
      description: "Inverter silent backup, high-speed wired + Wi-Fi.",
    },
    {
      title: "Selfie Walls",
      description: "3 creative selfie walls for perfect shots.",
    },
    {
      title: "Cafe Setup",
      description: "Mock cafe look for relaxed shoots.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* landing image bg */}
        <img
          src="/images/landing-bg.png"
          alt="Background"
          className="absolute inset-0 lg:w-[54rem] lg:h-[52rem] z-0 lg:top-0 lg:left-[18rem] top-[6rem] left-[1rem] w-[22rem] h-[28rem]"
        />
        {/* other images */}
        <img
          src="/images/light.png"
          alt="Background"
          className="absolute z-0 lg:w-[37rem] lg:h-[37rem] lg:top-[10rem] lg:left-[3rem] -left-[7rem] h-[20rem]"
        />
        {/* <img
          src="/images/camera.png"
          alt="Background"
          className="absolute z-0 w-[10rem] h-[10rem] top-[2rem] right-[5rem]"
        /> */}
        <img
          src="/images/mic.png"
          alt="Background"
          className="absolute z-0 lg:w-[20rem] lg:h-[20rem] lg:bottom-[5rem] lg:right-[10rem] bottom-[6rem] -right-[2rem] w-[10rem] h-[10rem]"
        />
        <img
          src="/images/vid-rec.png"
          alt="Background"
          className="absolute z-0 lg:w-[18rem] lg:h-[18rem] lg:top-[1rem] lg:right-[2rem] scale-x-[-1] -rotate-24 top-0 w-[10rem] h-[10rem] right-[1rem]"
        />
        {/* <img
          src="/images/movie.png"
          alt="Background"
          className="absolute z-0 w-[10rem] h-[10rem] left-[38rem] top-[10rem]"
        /> */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-black font-antonio text-[3.5rem] md:text-[6rem] lg:text-[8rem] z-10 drop-shadow-[3px_3px_0px_white] 
             [text-shadow:_2px_2px_0_#fff,4px_4px_0_#fff,6px_6px_0_#fff]"
        >
          Filme Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-black text-lg md:text-xl mt-4 z-10 max-w-2xl hidden lg:block"
        >
          A Creator’s Playground, Built by Storytellers
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-black lg:text-lg text-md md:text-xl mt-4 z-10 max-w-2xl block lg:hidden"
        >
          A Creator’s Playground,<br></br> Built by Storytellers
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="lg:mt-6 z-10 absolute lg:static bottom-[5rem] right-[8rem] "
        >
          <button
            onClick={() => router.push("/studioform")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg "
          >
            Book Now
          </button>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-antonio text-center mb-12"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          <span className="font-semibold">Filme Studio</span> was born out of{" "}
          <span className="italic">Breakache Studio</span>, extending our
          storytelling legacy to a global audience. With 20+ years of expertise
          in advertising and communication, we know what it takes to capture the
          magic whether it’s a 30-second spot or a full-length narrative.
        </motion.p>
      </section>

      {/* Packages Section */}
      {/* <section className="bg-gray-50 py-16 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-antonio text-center mb-12"
        >
          Our Packages
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Basic Shoot",
              desc: "Perfect for solo creators & small teams. Includes 2-hour studio access.",
              price: "$199",
              img: "/images/camera.png",
            },
            {
              title: "Professional Package",
              desc: "Ideal for influencers & brands. Full-day studio, lighting, and crew support.",
              price: "$499",
              img: "/images/prof.png",
            },
            {
              title: "Premium Experience",
              desc: "Best for ad campaigns. Complete production support, editing, and direction.",
              price: "$999",
              img: "/images/premium.png",
            },
          ].map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <Image
                src={pkg.img}
                alt={pkg.title}
                width={300}
                height={300}
                className="object-cover w-full h-52"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.desc}</p>
                <p className="text-xl font-semibold text-red-600">
                  {pkg.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Packages Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-antonio text-center mb-4"
        >
          Our Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center text-lg lg:text-xl md:text-xl text-red-600 font-semibold mb-2 flex items-center justify-center"
        >
          {/* Star next to S */}
          <span className="inline-flex items-center mr-1 mb-3 lg:mb-0 lg:mr-4 bg-yellow-400 text-white rounded-full p-2 shadow-md">
            <Star className="w-4 h-4 fill-current text-white" />
          </span>
          Special Offers Available for Oct–Nov 2025
        </motion.p>
        <p className="text-center text-md lg:text-lg text-gray-700 italic lg:mb-12 my-4">
          * Pre-booking at least 1 week in advance is required for all special
          offer packages.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Birthday Shoot",
              desc: [
                "50% Student Discount",
                "1 photographer (still)",
                "Professional lights",
                "DSLR (Nikon / Canon)",
              ],
              price: "₹5000 / hr",
              original: "₹10000 / hr",
              studentFriendly: true,
              discount: true,
              img: "/images/birthday.png",
            },
            {
              title: "College Memories",
              desc: [
                "50% Student Discount",
                "Special shoots with friends",
                "1 photographer (still)",
                "Professional lights + DSLR",
              ],
              price: "₹5000 / hr",
              original: "₹10000 / hr",
              studentFriendly: true,
              discount: true,
              img: "/images/college.png",
            },
            {
              title: "LinkedIn & Social Profiles",
              desc: [
                "15 professional shots",
                "Includes short video clips",
                "Perfect for job-ready & social profiles",
                "2-hour session",
              ],
              price: "₹10,000 / 2 hrs",
              original: "₹12500 / 2 hrs",
              studentFriendly: false,
              discount: true,
              img: "/images/social.png",
            },
            {
              title: "Wedding / Pre-Wedding",
              desc: [
                "1 photographer (still)",
                "Professional lights",
                "3-hour coverage",
              ],
              price: "₹15,000 / 3 hrs",
              original: "₹18570 / 3 hrs",
              studentFriendly: false,
              discount: true,
              img: "/images/wedding.png",
            },
            {
              title: "Anniversary Package",
              desc: ["1 photographer (still)", "Professional lights"],
              price: "₹8000 / hr",
              original: "₹10000 / hr",
              studentFriendly: false,
              discount: true,
              img: "/images/anniversary.png",
            },
            {
              title: "Podcast Studio Hire",
              desc: [
                "State-of-the-art podcast studio",
                "Professional acoustics & lighting",
              ],
              price: "₹3800 / hr",
              original: "₹4750 / hr",
              studentFriendly: false,
              discount: true,
              img: "/images/podcast.png",
            },
            {
              title: "E-Commerce Shoot",
              desc: [
                "Still + video production",
                "Professional lighting & setup",
                "15 products, 5 shots each, 360° with props",
                "Experienced creative director available",
                "Extra charges may apply for special requests",
              ],
              price: "₹25,000 / hr",
              original: "₹31250 / hr",
              studentFriendly: false,
              discount: true,
              img: "/images/ecommerce.png",
            },
            {
              title: "Studio Hire (No Support)",
              desc: [
                "No photographer or staff support",
                "Can hire one day in advance",
              ],
              price: "₹3800 / hr",
              img: "/images/studio.png",
            },
            {
              title: "Advanced Booking Studio Hire",
              desc: [
                "Hourly Rate: ₹3500 / hr",
                "Booking required 1 week in advance",
                "No photographer support included",
              ],
              price: "₹14,000 / 4 hrs",
              img: "/images/studio.png",
            },
            {
              title: "Video Shoot Studio Hire",
              desc: [
                "Hourly Rate: ₹3500 / hr",
                "Booking required 3 days in advance",
                "Includes video production support",
              ],
              price: "₹28,000 / 8 hrs",
              img: "/images/video.png",
            },
            {
              title: "Workshop Package",
              desc: [
                "Capacity: 20-30 people",
                "Hourly rate: ₹4000 / hr",
                "Booking required 10–15 days in advance",
              ],
              price: "₹12,000 / 3 hrs",
              img: "/images/workshop.png",
            },
          ].map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
            >
              {/* Discount Badge (Top-left) */}
              {pkg.discount && (
                <div className="absolute top-3 left-3 bg-yellow-400 text-white rounded-full p-2 flex items-center justify-center shadow-md">
                  <Star className="w-4 h-4 fill-current text-white" />
                </div>
              )}

              {/* Student Friendly Badge (Top-right) */}
              {pkg.studentFriendly && (
                <span className="absolute top-3 right-3 bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Student Friendly
                </span>
              )}

              <Image
                src={pkg.img}
                alt={pkg.title}
                width={300}
                height={300}
                className="object-cover w-full h-52"
              />

              <div className="p-6 text-center flex flex-col">
                <h3 className="text-2xl mb-4">{pkg.title}</h3>
                <ul className="text-gray-600 mb-4 list-disc list-inside text-left inline-block">
                  {pkg.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                {/* Pricing */}
                {pkg.discount && pkg.original ? (
                  <div>
                    <p className="text-gray-500 line-through text-sm">
                      {pkg.original}
                    </p>
                    <p className="text-xl font-semibold text-red-600">
                      {pkg.price}
                    </p>
                  </div>
                ) : (
                  <p className="text-xl font-semibold text-red-600">
                    {pkg.price}
                  </p>
                )}

                {/* Book Now button */}
                <button
                  onClick={() =>
                    router.push(
                      `/studioform?shootType=${encodeURIComponent(
                        pkg.title
                      )}&packageType=${encodeURIComponent(pkg.price)}`
                    )
                  }
                  className={`mt-6 px-6 py-2 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-200 ${
                    pkg.discount
                      ? "bg-gradient-to-r from-red-500 to-yellow-500"
                      : "bg-black hover:bg-gray-800"
                  }`}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     
      {/* Amenities Section */}
<section className="py-16 px-4 md:px-20 bg-gray-50">
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="text-2xl md:text-3xl lg:text-5xl font-antonio text-center mb-8 md:mb-12"
  >
    Amenities
  </motion.h2>

  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
    {[
      { icon: Mic, label: "5 Podcast Setups" },
      { icon: Package, label: "Flexible Product Shoot" },
      { icon: Droplets, label: "RO Water Dispenser" },
      { icon: Bath, label: "2 Separate Washrooms" },
      { icon: Wind, label: "Fully Air Conditioned" },
      { icon: Refrigerator, label: "Refrigerator" },
      { icon: ParkingCircle, label: "Parking Available" },
      { icon: User, label: "Green Room" },
      { icon: Utensils, label: "Small Pantry" },
      { icon: Shirt, label: "Hangers" },
      { icon: Lightbulb, label: "Professional Lighting" },
      { icon: Camera, label: "Professional Camera" },
      { icon: ImageIcon, label: "Backgrounds" },
      { icon: Video, label: "Videographer" },
      { icon: CameraOff, label: "Photographer" },
      { icon: Bluetooth, label: "Bose Bluetooth Speaker", onRequest: true },
      { icon: Zap, label: "Hair Dryer / Straightener", onRequest: true },
      { icon: Wand2, label: "Steam Iron", onRequest: true },
      { icon: AirVent, label: "Dyson Air Purifier", onRequest: true },
    ].map(({ icon: Icon, label, onRequest }, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center bg-white p-2 md:p-4 rounded-2xl shadow-md hover:shadow-lg transition"
      >
        <Icon size={20} className="w-5 h-5 md:w-7 md:h-7 mb-1 md:mb-2 text-gray-700" />
        <p className="text-gray-800 font-medium text-xs md:text-sm">{label}</p>
        {onRequest && (
          <span className="text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">
            *On Request
          </span>
        )}
      </motion.div>
    ))}
  </div>
</section>


      {/* Studio Rules Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-antonio text-center mb-12"
        >
          Studio Rules
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Do's */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-md bg-white"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle className="text-green-600" size={22} />
              Do’s
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <span>
                  Arrive at least 15 minutes before your scheduled shoot.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <span>Handle studio equipment with care.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <span>Maintain cleanliness during and after the shoot.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <span>Respect the time slots of other clients.</span>
              </li>
            </ul>
          </motion.div>

          {/* Don’ts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-md bg-white"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <XCircle className="text-red-600" size={22} />
              Don’ts
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 mt-1" size={18} />
                <span>
                  Eating and refreshments are only allowed in the designated
                  space.
                </span>
              </li>
              {/* <li className="flex items-start gap-2">
          <XCircle className="text-red-600 mt-1" size={18} />
          <span>Do not bring food or drinks inside the studio.</span>
        </li> */}
              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 mt-1" size={18} />
                <span>No smoking, vaping, or alcohol consumption.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 mt-1" size={18} />
                <span>
                  Don’t tamper with lighting or props without assistance.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 mt-1" size={18} />
                <span>No loud music unless discussed with the team.</span>
              </li>

              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 mt-1" size={18} />
                <span>No children or pets allowed inside the studio.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 mt-1" size={18} />
                <span>
                  In case of littering or damage to property, extra charges will
                  apply.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-antonio text-center mb-12"
        >
          Gallery
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {["/images/s1.png", "/images/s2.png", "/images/s6.png"].map(
            (src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full shadow-md"
                />
              </motion.div>
            )
          )}
        </div>
      </section>
      {/* Studio Features */}
      <section
        className="relative py-16 px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/studio-banner2.png')" }} // 🔑 replace with your image path
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const [open, setOpen] = useState(false);

              return (
                <div
                  key={i}
                  className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl px-4 py-3 cursor-pointer transition hover:scale-105 hover:shadow-2xl"
                  onClick={() => setOpen(!open)}
                >
                  {/* Header row (title + chevron) */}
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold text-white">
                      {feature.title}
                    </p>
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Expanding content */}
                  <AnimatePresence>
                    {open && (
                      <motion.p
                        id={`feature-desc-${i}`} // ✅ unique ID per feature
                        key={`feature-content-${i}`} // ✅ unique key too
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 text-gray-100 overflow-hidden"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-antonio text-center mb-12">
          FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "How do I book the studio?",
              a: "You can book directly through our website or contact us via phone/email.",
            },
            {
              q: "What’s included in the packages?",
              a: "All packages include studio access, lighting, and basic equipment. Premium packages include crew and editing support.",
            },
            {
              q: "Do you provide custom packages?",
              a: "Yes, we can tailor packages to suit your specific project needs.",
            },
          ].map((faq, i) => {
            const [open, setOpen] = useState(false);
            return (
              <div
                key={i}
                className="border rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <span>{open ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
      {/* Location */}
      <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-antonio mb-6">Location</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          J-8/10 (Basement), DLF Phase 2, Sector 25, Gurugram, Haryana 122002
        </p>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9150895350385!2d77.08789687631193!3d28.482103675747293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19425a1654bb%3A0x6e701bfee01b75b3!2sFilme Studio!5e0!3m2!1sen!2sin!4v1754980403113!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl shadow-md"
          ></iframe>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-antonio mb-6">Contact Us</h2>
        <p className="text-gray-700">Email: info@filmestudio.com</p>
        <p className="text-gray-700 mt-2">Phone: +91 96502 58881</p>
        <div className="mt-6">
          <button
            onClick={() => router.push("/studioform")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg"
          >
            Book Now
          </button>
        </div>
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
      <FloatingWhatsappButton />
    </div>
  );
}
