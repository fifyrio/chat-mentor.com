import Script from 'next/script'
 
function GoogleTagManager() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VESV34LBGL" />
      <Script id="google-analytics">
        {`
           window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VESV34LBGL');
        `}
      </Script>
    </div>
  )
}
 
export default GoogleTagManager