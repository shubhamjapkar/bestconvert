import React from "react";
import Header from "../components/headerFooter/Header";
import Footer from "../components/headerFooter/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;