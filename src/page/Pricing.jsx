import React from 'react'
import { Helmet } from 'react-helmet-async'

import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ServicesPage = () => {
  return (
    <div>
      <Helmet>
        <title>CIO Advisory Services & Engagement Models | Wendigo Advisors</title>
        <meta name="description" content="Flexible CIO leadership and advisor services for healthcare organizations. Explore our Strategic CIO Advisor, Fractional CIO Leadership, and Interim CIO models." />
        <meta name="keywords" content="healthcare CIO services, fractional CIO, interim CIO, strategic IT advisory, healthcare IT leadership" />
        <meta name="author" content="Brian Damiani, Wendigo Advisors" />
        <link rel="canonical" href="https://www.wendigoadvisors.com/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wendigoadvisors.com/services" />
        <meta property="og:title" content="CIO Advisory Services & Engagement Models | Wendigo Advisors" />
        <meta property="og:description" content="Flexible CIO leadership and advisor services for healthcare organizations." />
        <meta property="og:image" content="https://www.wendigoadvisors.com/card1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wendigoadvisors.com/services" />
        <meta property="twitter:title" content="CIO Advisory Services & Engagement Models | Wendigo Advisors" />
        <meta property="twitter:description" content="Flexible CIO leadership and advisor services for healthcare organizations." />
        <meta property="twitter:image" content="https://www.wendigoadvisors.com/card1.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.wendigoadvisors.com/services#webpage",
              "name": "CIO Advisory Services - Wendigo Advisors",
              "description": "Flexible CIO Advisory and Leadership services for healthcare organizations.",
              "url": "https://www.wendigoadvisors.com/services",
              "inLanguage": "en-US",
              "isPartOf": { "@id": "https://www.wendigoadvisors.com/#webpage" },
              "provider": {
                "@type": "Organization",
                "name": "Wendigo Advisors",
                "founder": {
                  "@type": "Person",
                  "name": "Brian Damiani",
                  "jobTitle": "Healthcare CIO Advisor & Founder"
                }
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.wendigoadvisors.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.wendigoadvisors.com/services"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      {/* Wrapper to handle navbar on stand-alone page */}
      <div className="bg-[#001224] pb-10">
        <Navbar />
      </div>

      <Pricing />
      
      <Footer />
    </div>
  )
}

export default ServicesPage;
