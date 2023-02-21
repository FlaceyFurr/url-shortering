import "./style.css";

const Navbar = () => {
  const logo: string = require("./../../images/logo-header.svg").default;

  return (
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="navigation__left">
            <img src={logo} alt="logo" className="navigation__logo" />
            <ul className="navigation__list-links">
              <li>
                <a href="#" className="navigation__link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="navigation__link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="navigation__link">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="navigation__right">
            <button className="navigation__button-login">Login</button>
            <button className="navigation__button-sign">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
