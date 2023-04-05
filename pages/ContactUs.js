const ContactUs = () => {
    return (
        <div className="siteDenotePages">

            <h1>Contact Us !</h1>
            <h2>Welcome to <span id="W_Name"> bestconvert.in</span>!</h2>

            <p>Please email us if you have any queries about the site, advertising, or anything else.</p>

            <div>

                {/* <img alt="contact-us" height="87" src="https://lh3.googleusercontent.com/-BA7qy8h_v1g/YLVCWDNZdCI/AAAAAAAAALw/rsHNJWX0BK4P5CuB0ymG8QkJ9A9E8KchgCLcBGAsYHQ/w320-h87/email-us-1805514__480.webp" width="320"> */}

                <p>
                    <i className="fas fa-envelope-open-text"></i>
                    <b><i> <span id="W_Email"><a href="mailto:shuraj2001@gmail.com">shuraj2001@gmail.com</a></span></i></b>
                    <br />

                    <i className="fab fa-whatsapp-square"></i> <b><span id="W_whatsapp"><a href="tel:7020023506">7020023506</a></span></b><br/></p>

                <h3>We will revert you as soon as possible...!</h3>
                <p>Thank you for contacting us! <br /><b>Have a great day</b></p>
            </div>

        </div>
    );
}

export default ContactUs;