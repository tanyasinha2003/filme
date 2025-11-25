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
import { FaInstagram, FaFacebookF } from "react-icons/fa";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
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
import FeaturesGrid from "@/components/FeaturesGrid";
import FAQSection from "@/components/FAQSection";
import Reviews from "@/components/Reviews";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

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

  const images = [
    "/images/s1.png",
    "/images/s2.png",
    "/images/s6.png",
    "/images/s1.png",
    "/images/s2.png",
    "/images/s6.png",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-0 pb-8">
        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full mb-10"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 }, // no gap on mobile
              768: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="w-full lg:w-[60rem] h-[26rem] lg:h-[20rem]"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="w-full">
                <div className="w-full aspect-video">
                  {" "}
                  {/* proportional box */}
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Text & Button Block */}
        <div className="flex flex-col items-center space-y-3 px-4">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black font-antonio text-[2.5rem] md:text-[5rem] lg:text-[7rem] text-center drop-shadow-[3px_3px_0px_white]
      [text-shadow:_2px_2px_0_#fff,4px_4px_0_#fff,6px_6px_0_#fff]"
          >
            Filme Studio
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-black text-md md:text-xl lg:text-2xl text-center max-w-2xl"
          >
            A Creator’s Playground, Built by Storytellers
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button
              onClick={() => router.push("/studioform")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg"
            >
              Book Now
            </button>
          </motion.div>
        </div>
      </div>
      {/* Video Section */}
      <section className="w-full relative">
        <video
          className="w-full h-[60vh] md:h-[80vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={true}
        >
          <source src="/videos/intro-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay for darkening video */}
        <div className="absolute inset-0 bg-black/20" />
      </section>

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

      {/* Reviews Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-antonio text-center mb-12"
        >
          Reviews
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Review 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full aspect-[9/16] object-cover"
              controls
              playsInline
              poster="/images/review-1-preview.png" // <-- Preview image
            >
              <source src="/videos/review-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Review 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full aspect-[9/16] object-cover"
              controls
              playsInline
              poster="/images/review-2-preview.png"
            >
              <source src="/videos/review-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Review 3 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full aspect-[9/16] object-cover"
              controls
              playsInline
              poster="/images/review-3-preview.png"
            >
              <source src="/videos/review-3.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Review 4 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full aspect-[9/16] object-cover"
              controls
              playsInline
              poster="/images/review-4-preview.png"
            >
              <source src="/videos/review-4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
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
          {/* <span className="inline-flex items-center mr-1 mb-3 lg:mb-0 lg:mr-4 bg-yellow-400 text-white rounded-full p-2 shadow-md">
            <Star className="w-4 h-4 fill-current text-white" />
          </span> */}
          Special Offers Available for<br></br> Oct–Nov 2025
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
              img: "/images/birthday2.png",
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
              img: "/images/college2.png",
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
              img: "/images/social2.png",
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
                    <p className="text-xl font-semibold text-gray-500">
                      {pkg.price}
                    </p>
                  </div>
                ) : (
                  <p className="text-xl font-semibold text-gray-500">
                    {pkg.price}
                  </p>
                )}

                {/* Book Now button */}
                <button
                  onClick={() =>
                    router.push(
                      `/studioform?shootType=${encodeURIComponent(pkg.title)}`
                    )
                  }
                  className={`mt-6 px-6 py-2 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-200 bg-red-600`}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plans & Pricing Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-antonio text-center mb-2"
        >
          🎬 Plans & Pricing (2025 Edition)
        </motion.h2>
        <p className="text-center text-gray-700 italic mb-12">
          Because every creator deserves a blockbuster stage.
        </p>

        {/* Plans */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {/* 1. Basanti Package */}
          <div>
            <p className="text-2xl md:text-3xl  mb-2">
              🎙️ 1. The Basanti Package (Space Only)
            </p>
            <p className="text-gray-700 mb-4">
              Bright, bold, and full of life, bring your own gear. Professional
              Lights included.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">2 Hours</p>
                <p className="text-gray-500 font-bold">₹7,600</p>
              </div>
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">4 Hours</p>
                <p className="text-gray-500 font-bold">₹14,000</p>
              </div>
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">8 Hours</p>
                <p className="text-gray-500 font-bold">₹27,000</p>
              </div>
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">Additional Hour</p>
                <p className="text-gray-500 font-bold">₹3,800/hr</p>
              </div>
            </div>
          </div>

          {/* 2. Munna Bhai Package */}
          <div>
            <p className="text-2xl md:text-3xl  mb-2">
              🎥 2. The Munna Bhai Package (Studio + 2 Cameras) (Podcasts)
            </p>
            <p className="text-gray-700 mb-4">
              Perfect for creators, podcasts, and brand content that connects. <br></br>
              2 Camera setup with 1 operator and mic.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">4 Hours</p>

                <p className="text-gray-500 font-bold">₹50,000</p>
              </div>
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">8 Hours</p>
                <p className="text-gray-500 font-bold">₹90,000</p>
              </div>
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">Additional Hour</p>
                <p className="text-gray-500 font-bold">₹5,000/hr</p>
              </div>
            </div>
          </div>

          {/* 3. Don Package */}
          <div>
            <p className="text-2xl md:text-3xl mb-2">
              3. The Don Package (Podcasts)
            </p>
            <p className="text-gray-700 mb-4">
              Built for creators who shoot regularly and mean business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">8hr Shoots</p>
                <p>3-Camera setup + Operator + Lighting</p>
                <p className="text-gray-500 font-bold">₹90,000</p>
              </div>
              <div className="p-4  rounded-lg shadow-sm bg-gray-50">
                <p className="font-semibold">12hr Shoots</p>
                <p>3-Camera setup + Operator + Lighting</p>
                <p className="text-gray-500 font-bold">₹1,90,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add-On Blockbusters */}
        <div className="mt-16 flex flex-col items-center text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl mb-2">Add-On Blockbusters</h3>
          <p className="text-gray-700 mb-4">
            Any edits on request. Give your content the star treatment.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Product Shoot possible</li>
            <li>Fashion Shoot possible</li>
            <li>E-commerce Shoot possible</li>
            <li>Any other Production possible</li>
          </ul>
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
            { icon: Wind, label: "Fully Air Conditioned" },
            { icon: User, label: "Green Room" },
            { icon: Droplets, label: "RO Water Dispenser" },
            { icon: Bath, label: "2 Separate Washrooms" },

            { icon: Refrigerator, label: "Refrigerator" },
            { icon: ParkingCircle, label: "Parking Available" },

            { icon: Utensils, label: "Small Pantry" },

            { icon: Lightbulb, label: "Professional Lighting" },
            { icon: Camera, label: "DSLR Camera" },
            { icon: ImageIcon, label: "White Backdrop" },

            {
              icon: Bluetooth,
              label: "Bose Bluetooth Speaker",
              onRequest: true,
            },
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
              <Icon
                size={20}
                className="w-5 h-5 md:w-7 md:h-7 mb-1 md:mb-2 text-gray-700"
              />
              <p className="text-gray-800 font-medium text-xs md:text-sm">
                {label}
              </p>
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
            <ul className="space-y-4">
              {[
                "Arrive at least 15 minutes before your scheduled shoot.",
                "Handle studio equipment with care.",
                "Maintain cleanliness during and after the shoot.",
                "Respect the time slots of other clients.",
                "Only masking tape is permitted.",
                "Furniture may be moved carefully (not dragged).",
                "Please seek assistance or request beforehand if you would like a certain setup.",
                "Switching props between sets requires prior permission.",
                "Please be seated at designated areas only and not where the shooting is going on.",
                "Candles may be used briefly (not left unattended).",
                "Please declare the number of people coming for the shoot on the premises.",
                "It is restricted to 5 crew members maximum at one point of time.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <CheckCircle
                    className="text-green-600 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 leading-snug">{item}</span>
                </li>
              ))}
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
            <ul className="space-y-4">
              {[
                "Eating and refreshments are only allowed in the designated space.",
                "Strictly no eating is allowed during the shoot.",
                "No smoking, vaping, or alcohol consumption.",
                "Don’t tamper with lighting or props without assistance.",
                "No loud music unless discussed with the team.",
                "No children or pets allowed inside the studio.",
                "In case of littering or damage to property, extra charges will apply.",
                "No dragging of equipment; ensure rubber soles on stands/tripods.",
                "No drilling/hammering nails; you may use existing nails for artwork.",
                "Sets are not waiting areas – use only for shooting.",
                "Fireworks, smoke machines, and fire are not allowed.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <XCircle className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section
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
      </section> */}
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
          <FeaturesGrid features={features} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-antonio text-center mb-12">
          FAQs
        </h2>
        <FAQSection />
      </section>

      {/* Instagram section */}
      <InstagramSection />

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
        <p className="text-gray-700">Email: filmestudiogurgaon@gmail.com</p>
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
      <Footer />
      <FloatingWhatsappButton />
    </div>
  );
}
