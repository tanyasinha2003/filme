import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FeatureCard({ index, title, description, isOpen, toggle }) {
  return (
    <div className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition text-left">
      {/* Header */}
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center"
      >
        <p className="text-xl font-semibold">{title}</p>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </button>

      {/* Collapsible body */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-gray-600"
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
