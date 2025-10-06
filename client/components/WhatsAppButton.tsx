import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919773176242';
    const message = encodeURIComponent('Hi! I would like to know more about your accounting services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed z-[100] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mobile-touch transform hover:scale-110 mobile-safe-bottom mobile-safe-right"
      style={{
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 1.5rem) + env(keyboard-inset-height, 0px))',
        right: 'calc(1.5rem + env(safe-area-inset-right, 1.5rem))',
        boxShadow: '0 20px 30px -5px rgba(34, 197, 94, 0.5), 0 10px 15px -2px rgba(34, 197, 94, 0.2), 0 0 0 1px rgba(34, 197, 94, 0.1)',
        zIndex: 100
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
