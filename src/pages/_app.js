import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import 'styles/globals.scss';
import 'styles/reset.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
