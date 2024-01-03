import Head from "next/head";

export default function Seo({
  title = "Virtual Bonang",
  description = "Pracitce playing the Bonang instrument from the Javanese Gamelan online.",
  keywords = "Bonang, Gamelan, Javanese Gamelan, Bonang Barung, Virtual Bonang, Virtual Gamelan, Gamelan Simulator, Digital Gamelan, Gamelan Online",
  url = process.env.NODE_ENV == "production"
    ? "" /* TODO: Production URL tbd */
    : "http://localhost:3000",
}) {
  console.log(`${url}/opengraph_image.svg`);
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta charSet="UTF-8" />
      <meta property="description" content={description} />
      <meta property="keywords" content={keywords} />
      <meta property="author" content="Calum Bell" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/opengraph-image.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bluesky" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/opengraph-image.svg`} />
    </Head>
  );
}
