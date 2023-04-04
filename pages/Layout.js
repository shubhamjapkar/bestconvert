import Header from "./header_footer/header";
import Footer from "./header_footer/footer";

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