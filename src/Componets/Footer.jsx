import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <h4 className="footer-heading">CONTACT</h4>
                    <p className="footer-text">
                        We're focused on building brands and a better future.<br />
                        If you'd like to partner with us, we're <span className="highlight">here</span> to talk.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <ul>
                            <li>Open Spaces</li>
                            <li>GIR</li>
                            <li>Letterfolk</li>
                            <li>Yield</li>
                            <li>Poketo</li>
                            <li>Equal Parts</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className="footer-column footer-contact">
                        <p>228 Park Ave S.</p>
                        <p>New York, NY 10003</p>
                        <p>acquisitions@patternbrands.com</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 <strong>Pattern Brands</strong></p>
            </div>
        </footer>
    );
};

export default Footer;