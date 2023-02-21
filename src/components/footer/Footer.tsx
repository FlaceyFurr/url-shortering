import "./style.css";

const Footer = () => {
  const logo: string = require("./../../images/logo-footer.svg").default;
  const facebook: string = require("./../../images/icon-facebook.svg").default;
  const twitter: string = require("./../../images/icon-twitter.svg").default;
  const pinterest: string =
    require("./../../images/icon-pinterest.svg").default;
  const instagram: string =
    require("./../../images/icon-instagram.svg").default;

  return (
    <footer className="footer">
      <div className="navigation">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__links">
          <div>
            <h4 className="footer__title">Features</h4>
            <ul className="footer__list">
              <li className="footer__link">
                <a href="#" className="link">
                  Link Shortening
                </a>
              </li>
              <li className="footer__link">
                <a href="#" className="link">
                  Branded Links
                </a>
              </li>
              <li className="footer__link">
                <a href="#" className="link">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer__title">Resources</h4>
            <ul className="footer__list">
              <li className="footer__link">
                <a href="#" className="link">
                  Blog
                </a>
              </li>
              <li className="footer__link">
                <a href="#" className="link">
                  Developers
                </a>
              </li>
              <li className="footer__link">
                <a href="#" className="link">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer__title">Company</h4>
            <ul className="footer__list">
              <li className="footer__link">
                <a href="#" className="link">
                  About
                </a>
              </li>
              <li className="footer__link">
                <a href="#" className="link">
                  Our Team
                </a>
              </li>
              <li className="footer__link">
                <a href="#" className="link">
                  Careers
                </a>
              </li>
              <li className="footer__link">
                <a href="#" className="link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__icons">
          <a href="#" className="footer__icon">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={pinterest} alt="pinterest" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
