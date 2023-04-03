import Header from "./header";
import Footer from "./footer";

const header_footer = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default header_footer;
