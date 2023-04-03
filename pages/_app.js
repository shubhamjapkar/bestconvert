import "../styles/globals.css";
import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  return (
    <div className="body_part">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
