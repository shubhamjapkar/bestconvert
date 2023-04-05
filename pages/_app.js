import "../styles/globals.css";
import Layout from '../components/header_footer/Layout'

export default function App({ Component, pageProps }) {
  return (
    <div className="body_part">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
