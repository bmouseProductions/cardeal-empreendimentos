import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-10">
      <a
        href="https://wa.me/5555349964400?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+receber+algumas+informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
