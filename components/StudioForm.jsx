"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function Studioform() {
   const searchParams = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    shootType: searchParams.get("shootType") ? "other": "",
    packageType: searchParams.get("packageType") ? "other": "",
    message: "",
    packageOther: searchParams.get("packageType") || "",
    shootTypeOther: searchParams.get("shootType") || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim())
      tempErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last name is required.";

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid phone number (10+ digits).";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email.";
    }

    if (!formData.date) tempErrors.date = "Date is required.";
    if (!formData.shootType)
      tempErrors.shootType = "Please select a shoot type.";
    if (!formData.packageType)
      tempErrors.packageType = "Please choose a package.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validate()) {
      console.log("Form Submitted ✅", formData);
      const res = await fetch("/api/submitStudioForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setLoading(false);
        router.push("/thankyou");
      }
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-6 pt-[4rem] pb-[2rem]">
        {/* Form Section */}
        <div className="flex-1">
          <h1 className="text-[3rem] font-bold mb-6">Book Your Studio</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2 w-full"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2 w-full"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Email ID
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Booking Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}
            </div>

            {/* Type of Shoot */}
            <div>
              <label
                htmlFor="shootType"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Type of Shoot
              </label>
              <select
                name="shootType"
                value={formData.shootType}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              >
                <option value="">Select Type of Shoot</option>
                <option value="reel">Reel</option>
                <option value="wedding">Wedding</option>
                <option value="podcast">Podcast</option>
                <option value="still">Still</option>
                <option value="ad film">Ad Film</option>
                <option value="birthday shoot">Birthday Shoot</option>
                <option value="brand shoot">Brand Shoot</option>
                <option value="brand shoot">Product Shoot</option>
                <option value="brand shoot">Fashion Shoot</option>
                <option value="other">Other</option>
              </select>
              {errors.shootType && (
                <p className="text-red-500 text-sm">{errors.shootType}</p>
              )}

              {/* Show extra input if "other" is selected */}
              {formData.shootType === "other" && (
                <div className="mt-2">
                  <label
                    htmlFor="shootTypeOther"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Specify Other Shoot Type
                  </label>
                  <input
                    type="text"
                    name="shootTypeOther"
                    placeholder="Please specify your shoot type"
                    value={formData.shootTypeOther || ""}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 w-full"
                    required
                  />
                  {errors.shootTypeOther && (
                    <p className="text-red-500 text-sm">
                      {errors.shootTypeOther}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Package */}
            <div>
              <label
                htmlFor="packageType"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Package Type
              </label>
              <select
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              >
                <option value="">Choose a Package</option>
                <option value="hourly">Shoot anything per hour — ₹3800</option>
                <option value="advanced">
                  Advanced booking (1 week before) — ₹14000 / 4 hrs
                </option>
                <option value="video">Video — ₹28000 / 8 hrs</option>
                {/* <option value="workshop">Workshop — ₹12000 / 3 hrs</option> */}
                <option value="other">Other</option>
              </select>
              {errors.packageType && (
                <p className="text-red-500 text-sm">{errors.packageType}</p>
              )}

              {/* Show extra input if "other" is selected */}
              {formData.packageType === "other" && (
                <div className="mt-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Your Package Proposal
                  </label>
                  <input
                    type="text"
                    name="packageOther"
                    placeholder="Please specify your package proposal"
                    value={formData.packageOther || ""}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 w-full"
                    required
                  />
                  {errors.packageOther && (
                    <p className="text-red-500 text-sm">
                      {errors.packageOther}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Message */}

            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full h-32"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`bg-black hover:bg-red-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Submit Booking"
              )}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/s1.png"
            alt="Studio"
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

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
    </>
  );
}
