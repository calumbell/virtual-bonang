import Head from "next/head";

export default function Seo({
  title = "Virtual Bonang",
  description = "Pracitce playing the Bonang instrument from the Javanese Gamelan online.",
  keywords = "Bonang, Gamelan, Javanese Gamelan, Bonang Barung, Virtual Bonang, Virtual Gamelan, Gamelan Simulator",
}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta charSet="UTF-8" />
      <meta property="description" content={description} />
      <meta property="keywords" content={keywords} />
      <meta property="author" content="Calum Bell" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
