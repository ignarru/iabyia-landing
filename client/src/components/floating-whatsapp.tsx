import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  const handleClick = () => {
    window.open("https://wa.me/5491160390755", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print">
      <button
        onClick={handleClick}
        className="group w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/25 hover:scale-110 transition-all duration-300 animate-pulse-slow"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  );
}
