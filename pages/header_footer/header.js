import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";

const header = () => {
  const [habuse, habset] = useState(false); //eslint-disable-line
  
  return (
    <div className="menu_bar">
      <Link href="/" passHref>
        <div className="log">
          <Image src={logo} alt="logo" className="log2" />
        </div>
      </Link>

      <div className={habuse ? "manulist" : "manulist active"}>
        <label>
          <AiOutlineClose onClick={() => habset(false)} />
        </label>

        <Link href='/AboutUs'><label>About Us</label></Link>
        <Link href='/ContactUs'><label>Contact Us</label></Link>
        <Link href='/PrivacyPolicy'><label>Privacy Policy</label></Link>
      </div>
      <div className="social">
        <FaFacebook />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
      <div className="join">
        <Link href="/user/files"><label id="Sign_up">All Files</label></Link>
      </div>
      <div className="hamberger">
        <AiOutlineMenu onClick={() => habset(true)} />
      </div>
    </div>
  );
};

export default header;
