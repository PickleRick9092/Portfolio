// app/head.tsx
export default function Head() {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohammad Kalateh",
      "url": "https://mohammadkalateh.com/",
      "sameAs": [
        "https://www.linkedin.com/in/mohammad-kalateh-46b65a239/",
        "https://github.com/PickleRick9092"
      ],
      "jobTitle": "SEO Expert & Web Designer",
      "worksFor": {
        "@type": "Organization",
        "name": "Mohammad Kalateh"
      }
    };
  
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Mohammad Kalateh",
      "url": "https://mohammadkalateh.com/"
    };
  
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </>
    );
  }
  