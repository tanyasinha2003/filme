import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection() {
  const faqs = [
    {
      q: "What are the payment terms?",
      a: "18% GST is applicable on all bookings. 50% advance payment is required to block dates. 100% payment must be cleared before the shoot date. An additional refundable security deposit of ₹10,000/day is required at the time of booking, which will be refunded after the shoot subject to inspection for damages.",
    },
    {
      q: "What are the studio timings?",
      a: "Filme Studio operates Monday to Saturday, 9:00 AM – 7:00 PM. Rental is on an 8-hour basis including setup time. A 30-minute grace period is allowed for pack-up, after which ₹3,000/hour will be charged. Rental time starts when the first team member enters (or at the given call time, whichever is earlier) and ends when the last person exits.",
    },
    {
      q: "What happens in case of damages?",
      a: "Any damage must be reported immediately to avoid issues later. The client is responsible for damages caused by their team during the shoot. The refundable security deposit will be returned after inspection of the space.",
    },
    {
      q: "What is the cancellation and rescheduling policy?",
      a: "Rescheduling is allowed up to 7 days prior to the booking date, subject to availability. Cancellations: 7 days prior – Full refund, 6–3 days prior – 50% refund, 48 hours prior – 30% refund, 24 hours prior – No refund.",
    },
    {
      q: "Do you provide equipment?",
      a: "Filme Studio does not provide cameras. However, we can connect you with our panel of vendors at actuals. ",
    },
    {
      q: "Will I lose my security deposit for violations?",
      a: "Yes. Violation of house rules or damages to the property may lead to fines or forfeiture of the security deposit.",
    },
     {
    q: "Are there any hidden charges?",
    a: "Not at all. We maintain transparent pricing for all our services. Everything included in your selected podcast studio package is clearly mentioned, and any add-ons or extras (like editing, branding, or off-site recording) are quoted in advance.",
  },
  {
    q: "Can I take a studio tour or test the setup before booking?",
    a: "Yes! We offer complimentary studio tours of our Gurgaon podcast studio (by prior appointment). You can also book a short trial session at a nominal cost, which will be adjusted in your final package if you proceed with booking.",
  },
  {
    q: "What are your payment options and cancellation terms?",
    a: "We accept UPI, bank transfers, credit/debit cards, and cash. To confirm your slot, a 50% advance payment is required. The remaining balance is due after your session. For rescheduling or cancellations, please inform us at least 48 hours in advance to avoid cancellation charges.",
  },
  ];

  // Track open state for each FAQ
  const [openIndexes, setOpenIndexes] = useState(
    Array(faqs.length).fill(false)
  );

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
