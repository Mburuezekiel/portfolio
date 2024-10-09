import React, { useState } from "react";
import qrCodeImage from '../assets/portfolio_qr_code.png'; // Make sure to import the QR code image

function Footer() {
  const [copied, setCopied] = useState(false);
  const portfolioLink = "https://portfolio-ezekielmburu.vercel.app/";

  // Function to handle link copying
  const handleCopyLink = () => {
    navigator.clipboard.writeText(portfolioLink)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));

    // Reset the copied message after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Mburuezekiel">
          <i className="bi bi-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ezekiel-mburu-5aaa00262"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://wa.me/message/WYNADJ57N66UG1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i> WhatsApp
        </a>
      </div>

      {/* QR code and link copy section */}
      <div className="qr-section">
        <img
          src={qrCodeImage}
          alt="QR code for portfolio"
          className="qr-code"
          onClick={handleCopyLink}
          style={{ cursor: 'pointer' }}
        />
        <p className="copy-message">
          {copied ? 'Link Copied!' : 'Click QR Code to Copy Portfolio Link'}
        </p>
      </div>

      <p>&copy; 2024 Ezekiel Njuguna Mburu. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
