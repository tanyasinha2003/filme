import { useRef, useState } from "react";

export default function Reviews() {
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlay = (index) => {
    // Pause all other videos
    videoRefs.forEach((ref, i) => {
      if (ref.current) {
        if (i === index) {
          ref.current.play();
        } else {
          ref.current.pause();
          ref.current.currentTime = 0; // reset
        }
      }
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-antonio text-center mb-12">
        Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {["review-1.mp4", "review-2.mp4", "review-3.MP4", "review-4.mp4"].map(
          (src, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-lg border-2 ${
                activeIndex === i ? "border-green-500" : "border-transparent"
              }`}
              onClick={() => handlePlay(i)}
            >
              <video
                ref={videoRefs[i]}
                className="w-full aspect-[9/16] object-cover"
                playsInline
                muted
                controls={true}
              >
                <source src={`/videos/${src}`} type="video/mp4" />
              </video>
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
                {activeIndex === i ? "Playing" : "Click to play"}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
