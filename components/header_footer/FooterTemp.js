import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";

import logo1 from "./logo.png";
import Link from "next/link";

const Footer = () => {
  const date = new Date();

  return (
    <div className="footer">
      <div className="socialfooter">
        <label>Follow Us On</label>
        <br />
        <FaFacebook />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
      <div className="footermiddle">
        <div className="logofooter">
          <Link href="/" passHref>
            <div>
              <Image src={logo1} alt="logo" className="log2" />
            </div>
          </Link>
        </div>
        <div className="allsitesfooter">
          <label>Sites</label>
          <label>Convert Tools</label>
          <label>Jpg To Png</label>
          <label>Image Migration</label>

          <label>Jpg To Png</label>
          <label>Convert Tools</label>
          <label>Sites</label>
          <label>Image Migration</label>

          <label>Convert Tools</label>
          <label>Sites</label>
          <label>Jpg To Png</label>
          <label>Image Migration</label>

          <label>Image Migration</label>
          <label>Jpg To Png</label>
          <label>Convert Tools</label>
          <label>Sites</label>
        </div>
        <div className="menufooter">
          <Link href='/AboutUs'><label>About Us</label></Link>
          <Link href='/ContactUs'><label>Contact Us</label></Link>
          <Link href='/PrivacyPolicy'><label>Privacy Policy</label></Link>
        </div>
      </div>
      <div className="footerlast">

        <label className="authorName">build by <span className="author">Shubham Japkar</span>.</label>
        <label className="copyRT">Copyright &#169; {date.getFullYear()}. All rights reserved.</label>
      </div>
    </div>
  );
};

export default Footer;
