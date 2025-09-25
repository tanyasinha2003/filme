import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection() {
  const faqs = [
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
  ];

  // Track open state for each FAQ
  const [openIndexes, setOpenIndexes] = useState(Array(faqs.length).fill(false));

  const toggleOpen = (index) => {
    const newOpen = [...openIndexes];
    newOpen[index] = !newOpen[index];
    setOpenIndexes(newOpen);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => toggleOpen(i)}
            className="w-full flex justify-between items-center px-6 py-4 text-left"
          >
            <span className="font-semibold">{faq.q}</span>
            <span>{openIndexes[i] ? "−" : "+"}</span>
          </button>
          <AnimatePresence>
            {openIndexes[i] && (
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
      ))}
    </div>
  );
}

export default FAQSection;
