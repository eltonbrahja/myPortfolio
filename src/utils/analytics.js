export const initGoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = 'G-C0TSKJ5SKD';

  // Prevent multiple injections
  if (document.getElementById('google-analytics')) {
    return;
  }

  // Inject the Google tag script
  const script1 = document.createElement('script');
  script1.id = 'google-analytics';
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Inject the initialization script
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
      anonymize_ip: true
    });
  `;
  document.head.appendChild(script2);
};
