import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function FeaturesGrid({ features }) {
  // ✅ Track open state for each feature
  const [openIndexes, setOpenIndexes] = useState(
    Array(features.length).fill(false)
  );

  const toggleOpen = (index) => {
    const newOpen = [...openIndexes];
    newOpen[index] = !newOpen[index];
    setOpenIndexes(newOpen);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <div
          key={i}
          className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl px-4 py-3 cursor-pointer transition hover:scale-105 hover:shadow-2xl"
          onClick={() => toggleOpen(i)}
        >
          {/* Header row */}
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-white">{feature.title}</p>
            <motion.div
              animate={{ rotate: openIndexes[i] ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Expanding content */}
          <AnimatePresence>
            {openIndexes[i] && (
              <motion.p
                id={`feature-desc-${i}`}
                key={`feature-content-${i}`}
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
      ))}
    </div>
  );
}

export default FeaturesGrid;
