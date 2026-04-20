import React from 'react';

export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Range Rover Garage",
    "image": "https://www.rangerover-garage.co.uk/logo.png",
    "@id": "https://www.rangerover-garage.co.uk",
    "url": "https://www.rangerover-garage.co.uk",
    "telephone": "+441708592377",
    "priceRange": "£££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 2, The Enterprise Centre, Paycocke Rd",
      "addressLocality": "Basildon",
      "addressRegion": "Essex",
      "postalCode": "SS14 3DY",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5714,
      "longitude": 0.4912
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:30",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/rangerovergarage/",
      "https://www.instagram.com/rangerovergarage76/"
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Range Rover Engine Rebuild & Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Range Rover Garage"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engine Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engine Rebuild"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Timing Chain Replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Turbocharger Repair"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}
