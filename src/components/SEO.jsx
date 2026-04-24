import { Helmet } from "react-helmet-async";

const SITE_NAME = "Др. Сома Субраманиан";
const DEFAULT_OG_IMAGE =
  "https://static.wixstatic.com/media/e6f22e_5e866c4c42e643099cc60be0ec2a5f0e~mv2.png/v1/fill/w_600,h_890,al_c,q_90,enc_avif,quality_auto/DSC_6089_edited.png";
const BASE_URL = "https://your-domain.com";

/**
 * Reusable SEO component for per-page meta tag management.
 * Uses react-helmet-async to dynamically update <head> tags.
 *
 * @param {Object} props
 * @param {string} props.title - Page-specific title
 * @param {string} props.description - Page-specific meta description
 * @param {string} [props.path="/"] - Page path (e.g. "/about")
 * @param {string} [props.ogImage] - Open Graph image URL
 * @param {string} [props.ogType="website"] - Open Graph type
 * @param {Object} [props.jsonLd] - Additional JSON-LD structured data
 */
const SEO = ({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd = null,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Additional JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
