import React from "react";
import SEO from "../components/SEO";
import HeroSection from "../components/HomeComponents/HeroSection";
import Specializations from "../components/HomeComponents/Specializations";
import Education from "../components/HomeComponents/Education";
import AdditionalEducation from "../components/HomeComponents/AdditionalEducation";
import ResearchInterests from "../components/HomeComponents/ResearchInterests";
import Projects from "../components/HomeComponents/Projects";
import WorkExperience from "../components/HomeComponents/WorkExperience";
import Awards from "../components/HomeComponents/Awards";
import Memberships from "../components/HomeComponents/Memberships";
import Publications from "../components/HomeComponents/Publications";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://your-domain.com/",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Somasundaram Subramanian",
    "alternateName": "Сомасундарам Субраманиан",
    "jobTitle": "Хирург-онколог",
    "description": "Хирург-онколог, основатель и директор Евразийской федерации онкологии (EAFO). Специализации: онкология головы и шеи, меланома, рак молочной железы, онкопластическая хирургия.",
    "image": "https://static.wixstatic.com/media/e6f22e_5e866c4c42e643099cc60be0ec2a5f0e~mv2.png/v1/fill/w_600,h_890,al_c,q_90,enc_avif,quality_auto/DSC_6089_edited.png",
    "url": "https://your-domain.com/",
    "email": "drsoma@gmail.com",
    "telephone": "+79153333066",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Евразийская федерация онкологии (EAFO)",
        "url": "https://www.eafo.info"
      },
      {
        "@type": "Organization",
        "name": "Евразийский совет по онкологическим исследованиям (ECRC)"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Волоколамское шоссе, д. 1, офис 606C",
      "addressLocality": "Москва",
      "postalCode": "125080",
      "addressCountry": "RU"
    },
    "sameAs": [
      "https://scholar.google.com/citations?user=extI4LAAAAAJ&hl=en&oi=ao"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Научно-образовательный центр «Евразийская онкологическая программа» ЕАФО",
    "url": "https://your-domain.com/",
    "telephone": "+79153333066",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Волоколамское шоссе, д. 1, офис 606C",
      "addressLocality": "Москва",
      "postalCode": "125080",
      "addressCountry": "RU"
    }
  }
];

const Home = () => {
  return (
    <div className="bg-[#e8e6e6] px-4 md:px-6 xl:px-0">
      <SEO
        title="Хирург-онколог, Москва"
        description="Доктор Сомасундарам Субраманиан — хирург-онколог, основатель EAFO. Специализации: онкология головы и шеи, меланома, рак молочной железы, онкопластическая хирургия. Приём в Москве."
        path="/"
        jsonLd={homeJsonLd}
      />
      <HeroSection />
      <Specializations />
      <Education />
      <AdditionalEducation />
      <ResearchInterests />
      <Projects />
      <WorkExperience />
      <Awards />
      <Memberships />
      <Publications />
    </div>
  );
};

export default Home;
