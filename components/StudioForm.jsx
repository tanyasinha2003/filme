"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";

import Image from "next/image";

import FloatingWhatsappButton from "./FloatingWhatsappButton";
import { useRouter } from "next/navigation";

export default function StudioBookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    selectedPlan: "",
    selectedSpecial: "",
    date: "",
    duration: "",
    name: "",
    email: "",
    phone: "",
    shootType: "",
    otherShootType: "", // <-- new field
    amenities: [],
  });

  const studioPlans = [
    {
      title: "Basanti Package",
      desc: "Bright, bold, and full of life — bring your own gear.",
      price: "From ₹7,600",
    },
    {
      title: "Munna Bhai Package",
      desc: "Perfect for podcasts & brand content.",
      price: "From ₹16,000",
    },
    {
      title: "Don Package",
      desc: "Built for creators who mean business.",
      price: "From ₹78,000",
    },
  ];

  const specialPackages = [
    "Birthday Shoot",
    "College Memories",
    "LinkedIn & Social Profiles",
    "Wedding / Pre-Wedding",
  ];

  const amenitiesList = [
    "Bose Bluetooth Speaker",
    "Hair Dryer / Straightener",
    "Steam Iron",
    "Dyson Air Purifier",
  ];

  // 🟡 Preselect special package from search param
  useEffect(() => {
    const shootType = searchParams.get("shootType");
    if (shootType && specialPackages.includes(shootType)) {
      setFormData((prev) => ({
        ...prev,
        selectedSpecial: shootType,
        selectedPlan: "",
      }));
    }
  }, [searchParams]);

  const handlePlanSelect = (plan) => {
    setFormData({
      ...formData,
      selectedPlan: formData.selectedPlan === plan ? "" : plan,
      selectedSpecial: "",
    });
  };

  const handleSpecialSelect = (e) => {
    setFormData({
      ...formData,
      selectedSpecial: e.target.value,
      selectedPlan: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData((prev) => {
      const alreadySelected = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: alreadySelected
          ? prev.amenities.filter((a) => a !== amenity)
          : [...prev.amenities, amenity],
      };
    });
  };
  function validate() {
    if (!formData) {
      alert("Form data is missing.");
      return false;
    }

    // Must select either a studio plan OR a special package
    if (!formData.selectedPlan && !formData.selectedSpecial) {
      alert("Please choose a studio plan or select a special package.");
      return false;
    }

    // Type of shoot required
    if (!formData.shootType) {
      alert("Please select the type of shoot.");
      return false;
    }

    // If "other" is selected, the text field must be filled
    if (formData.shootType === "other" && !formData.otherShootType.trim()) {
      alert("Please specify your shoot type.");
      return false;
    }

    // Name required
    if (!formData.name.trim()) {
      alert("Please enter your full name.");
      return false;
    }

    // Phone required and must be 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    // Email required and must be valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Preferred date required
    if (!formData.date) {
      alert("Please select a preferred date.");
      return false;
    }

    // Duration required
    if (!formData.duration) {
      alert("Please select the duration.");
      return false;
    }

    // All validations passed
    return true;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const selected = formData.selectedPlan || formData.selectedSpecial;
  //   alert(
  //     `Booking submitted for: ${selected}\nShoot Type: ${formData.shootType}\nDuration: ${formData.duration} hr(s)\nAmenities: ${
  //       formData.amenities.join(", ") || "None"
  //     }`
  //   );
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (validate()) {
        const response = await fetch("/api/submitStudioForm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setLoading(false);
          // alert("Booking submitted! We'll contact you soon.");
          router.push("/thankyou");

          // Reset form if needed
          setFormData({
            selectedPlan: "",
            selectedSpecial: "",
            date: "",
            duration: "",
            name: "",
            email: "",
            phone: "",
            shootType: "",
            amenities: [],
          });
        } else {
          alert(result.error || "Something went wrong.");
        }
      }
    } catch (err) {
      console.error(err);
      // alert("Failed to submit booking.");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 p-6 ">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🎙️ Book Your Studio
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Choose a Plan */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Choose a Studio Plan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {studioPlans.map((plan) => {
                const selected = formData.selectedPlan === plan.title;
                return (
                  <button
                    type="button"
                    key={plan.title}
                    onClick={() => handlePlanSelect(plan.title)}
                    disabled={!!formData.selectedSpecial}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selected
                        ? "border-black bg-gray-100"
                        : formData.selectedSpecial
                          ? "border-gray-200 opacity-50 cursor-not-allowed"
                          : "border-gray-300 hover:border-black"
                    }`}
                  >
                    <p className="font-semibold text-lg">{plan.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{plan.desc}</p>
                    <p className="text-gray-900 font-bold mt-2">{plan.price}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: OR Select a Special Package */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Or Select a Special Package
            </label>
            <select
              className="w-full border rounded-lg px-4 py-3"
              value={formData.selectedSpecial}
              onChange={handleSpecialSelect}
              disabled={!!formData.selectedPlan}
            >
              <option value="">Select Special Package</option>
              {specialPackages.map((pkg) => (
                <option key={pkg} value={pkg}>
                  {pkg}
                </option>
              ))}
            </select>
            {formData.selectedPlan && (
              <p className="text-sm text-gray-500 mt-1">
                (Special packages disabled — a plan is already selected)
              </p>
            )}
          </div>

          {/* Step 3: Type of Shoot */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Type of Shoot
            </label>
            <select
              name="shootType"
              className="w-full border rounded-lg px-4 py-3"
              value={formData.shootType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type of Shoot</option>
              <option value="reel">Reel</option>
              <option value="wedding">Wedding</option>
              <option value="podcast">Podcast</option>
              <option value="still">Still</option>
              <option value="ad film">Ad Film</option>
              <option value="birthday shoot">Birthday Shoot</option>
              <option value="brand shoot">Brand Shoot</option>
              <option value="product shoot">Product Shoot</option>
              <option value="fashion shoot">Fashion Shoot</option>
              <option value="other">Other</option>
            </select>

            {/* Conditional field for "Other" */}
            {formData.shootType === "other" && (
              <input
                type="text"
                name="otherShootType"
                placeholder="Please specify your shoot type"
                className="w-full border rounded-lg px-4 py-2 mt-2"
                value={formData.otherShootType}
                onChange={handleChange}
                required
              />
            )}
          </div>

          {/* Step 4: Optional Amenities (Checkboxes) */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              On Request Amenities{" "}
              <span className="text-gray-500 text-sm">(optional)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-2 border rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="w-4 h-4 accent-black"
                  />
                  <span className="text-gray-800">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Step 5: Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Step 6: Date and Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Duration
              </label>
              <div className="flex items-center border rounded-lg px-4">
                <select
                  name="duration"
                  required
                  className="flex-1 py-2 bg-transparent outline-none"
                  value={formData.duration}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <span className="text-gray-600 ml-2">Hours</span>
              </div>
            </div>
          </div>

          {/* Step 7: Summary */}
          {(formData.selectedPlan || formData.selectedSpecial) && (
            <div className="p-4 bg-gray-50 rounded-lg border mt-4">
              <p className="font-semibold">
                Selected:{" "}
                <span className="text-black">
                  {formData.selectedPlan || formData.selectedSpecial}
                </span>
              </p>
              {formData.duration && (
                <p className="text-gray-700 text-sm mt-1">
                  Duration: {formData.duration} hour
                  {formData.duration > 1 ? "s" : ""}
                </p>
              )}
              {formData.shootType && (
                <p className="text-gray-700 text-sm mt-1">
                  Shoot Type: {formData.shootType}
                </p>
              )}
              {formData.amenities.length > 0 && (
                <p className="text-gray-700 text-sm mt-1">
                  Amenities: {formData.amenities.join(", ")}
                </p>
              )}
            </div>
          )}

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Submit Booking
            </button>
          </div>
        </form>
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
