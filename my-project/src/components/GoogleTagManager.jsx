import { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    // Create the script tag
    const script = document.createElement('script');
    script.async = true; // Asynchronously load GTM
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WFLRMZF';
    
    // Append the script to the head
    document.head.appendChild(script);

    // Add the noscript fallback to the body
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFLRMZF" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);

    // Clean up the script tag on component unmount (optional)
    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
};

export default GoogleTagManager;
