import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="body_part">
        <Component {...pageProps} />
    </div>
  )
}
