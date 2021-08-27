import Head from "next/head";

export default function Meta({ title, description, siteName, url, image }) {
  if (title.length > 60) {
    throw new Error("meta title lenght too long");
  }

  if (description.length < 120) {
    throw new Error("meta description lenght too short");
  }

  if (description.length > 155) {
    throw new Error("meta description lenght too long");
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      {image && <meta property="og:image" content={image.src} />}
      {image && <meta property="og:image:type" content={image.type} />}
      {image && <meta property="og:image:width" content={image.width} />}
      {image && <meta property="og:image:height" content={image.height} />}
    </Head>
  );
}
