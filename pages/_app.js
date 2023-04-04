import "../styles/globals.css";
import Layout from './Layout'

export default function App({ Component, pageProps }) {
  return (
    <div className="body_part">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
