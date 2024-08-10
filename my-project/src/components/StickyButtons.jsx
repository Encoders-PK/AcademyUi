import { useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaComments } from 'react-icons/fa';

const StickyButtons = () => {

  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf"; // Your Tawk.to script source
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const handleTalkToExpertClick = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized properly.");
    }
  };
  
  const buttons = [
    { id: 1, icon: <FaWhatsapp color='#408955' size={25} />, label: 'WhatsApp Now', link: `https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}` },
    { id: 2, icon: <FaPhoneAlt size={20} color='#367285' />, label: 'Call Now', link: 'tel:+441618189341' },
    { id: 3, icon: <FaComments size={20} color='#F1B815' />, label: 'Chat Now' },
  ];

  return (
    <div className="fixed hidden top-[25%] left-4 md:flex flex-col items-center gap-4 z-50">
      {buttons.map((button) => (
        <div key={button.id} className="relative group">
          <a
            href={button.link || '#'}
            target={button.id !== 3 ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg transition-all duration-300 group-hover:w-40"
            onClick={button.id === 3 ? handleTalkToExpertClick : null}
          >
            <span className="text-xl">{button.icon}</span>
            <span className="ml-2 text-sm whitespace-nowrap hidden group-hover:inline">
              {button.label}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default StickyButtons;








