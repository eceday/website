import Head from 'next/head';

const title = 'ECE Day';
// TODO: Website description
const description =
  'ECE Day is a celebration of the students and faculty members of the ECE Department at UCSD.';

const SEO = () => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="shortcut icon" href="/favicon.ico" />

    <meta property="og:url" content="https://eceday.ucsd.edu/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={title} />
    <meta property="og:title" content="ECE Day" />
    <meta property="og:image" content="assets/bear.png" />
    <meta property="og:description" content={description} />
  </Head>
);

export default SEO;
