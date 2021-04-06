import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <hr className="footer-line"></hr>
        <ul className="footer-links">
          <li>
            <a
              className="link "
              href="https://www.linkedin.com/in/sagar-dhamani-a8b066114/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href="https://twitter.com/SagarDhamani1">
              Twitter
            </a>
          </li>
          <li>
            <a className="link" href="https://github.com/sdhamani">
              Git Hub
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
