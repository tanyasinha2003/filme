// components/FloatingWhatsappButton.jsx
import Image from "next/image";

export default function FloatingWhatsappButton() {
  const whatsappNumber = "919650258881"; // your number
  const message = "Hello, I want to know more about your services";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 z-50"
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="white"
        className="w-7 h-7"
      ></svg> */}
      <Image src="/images/whatsapp-logo.png" width={60} height={60} alt="Heart" />
    </a>
  );
}
