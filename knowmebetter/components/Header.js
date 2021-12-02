import Head from "next/head";

export const Header = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Head>
  );
};
