import "./style.css";

const BurgerMenu = () => {
  return (
    <>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <a href="#" className="menu__link">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="menu__link">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="menu__link">
            Resources
          </a>
        </li>
        <li><button className="menu__button-login">Login</button></li>
        <li><button className="menu__button-sign">Sign Up</button></li>
      </ul>
    </>
  );
};

export default BurgerMenu;
