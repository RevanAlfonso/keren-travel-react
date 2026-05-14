import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, canonical, jsonLd }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  );
}
