"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Volume2,
  VolumeX,
  Pause,
  Play,
} from "lucide-react";
import Link from "next/link";

export default function InstagramSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Replace with your Instagram reel video URLs or MP4s
  const videos = [
    "/videos/review-1.mp4",
    "/videos/review-2.mp4",
    "/videos/review-3.mp4",
    "/videos/review-4.mp4",
  ];

  useEffect(() => {
    // Autoplay loop in carousel
    const interval = setInterval(() => {
      if (activeIndex === null) return;
      nextVideo();
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const openVideo = (index) => {
    setActiveIndex(index);
  };

  const closeVideo = () => {
    setActiveIndex(null);
  };

  const nextVideo = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (activeIndex !== null && videoRefs.current[activeIndex]) {
      videoRefs.current[activeIndex].muted = !isMuted;
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      isPlaying ? currentVideo.pause() : currentVideo.play();
    }
  };

  return (
    <section className="pt-20 px-4 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-antonio text-center mb-10">
        Our Instagram
      </h2>

      {/* Carousel */}
      <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory">
        {videos.map((src, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] md:min-w-[320px] snap-center rounded-xl overflow-hidden cursor-pointer relative"
            whileHover={{ scale: 1.03 }}
            onClick={() => openVideo(index)}
          >
            <video
              src={src}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-[25rem] lg:h-[35rem] object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {activeIndex !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            isMobile ? "bg-black" : "bg-black/80"
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[activeIndex] = el)}
            src={videos[activeIndex]}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className={`${
              isMobile
                ? "w-full h-full object-cover"
                : "max-h-[80vh] max-w-[60vw] rounded-xl object-contain"
            }`}
          />

          {/* Close Icon */}
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 text-white p-2 bg-black/40 rounded-full hover:bg-black/60"
          >
            <X size={24} />
          </button>

          {/* Controls */}
          {isMobile ? (
            <div className="absolute left-4 top-1/2 flex flex-col gap-4 -translate-y-1/2">
              <button
                onClick={prevVideo}
                className="p-2 bg-black/40 rounded-full hover:bg-black/60"
              >
                <ChevronUp size={20} color="white" />
              </button>
              <button
                onClick={toggleMute}
                className="p-2 bg-black/40 rounded-full hover:bg-black/60"
              >
                {isMuted ? (
                  <VolumeX size={20} color="white" />
                ) : (
                  <Volume2 size={20} color="white" />
                )}
              </button>
              <button
                onClick={togglePlay}
                className="p-2 bg-black/40 rounded-full hover:bg-black/60"
              >
                {isPlaying ? (
                  <Pause size={20} color="white" />
                ) : (
                  <Play size={20} color="white" />
                )}
              </button>
              <button
                onClick={nextVideo}
                className="p-2 bg-black/40 rounded-full hover:bg-black/60"
              >
                <ChevronDown size={20} color="white" />
              </button>
            </div>
          ) : (
            <>
              {/* Left / Right Navigation */}
              <button
                onClick={prevVideo}
                className="absolute left-10 text-white p-2 bg-black/40 rounded-full hover:bg-black/60"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={nextVideo}
                className="absolute right-10 text-white p-2 bg-black/40 rounded-full hover:bg-black/60"
              >
                <ChevronRight size={28} />
              </button>

              {/* Mute / Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white p-2 bg-black/40 rounded-full hover:bg-black/60"
              >
                {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
              </button>
            </>
          )}
        </div>
      )}

      <Link
        href="https://www.instagram.com/filmestudiogurgaon/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-gray-700 hover:text-black font-medium pt-[3rem] transition-colors duration-300"
      >
        @filmestudiogurgaon
      </Link>
    </section>
  );
}
