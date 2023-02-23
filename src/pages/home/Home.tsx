import "./style.css";

const Home = () => {
  const heroImage = require("./../../images/illustration-working.svg").default;
  const cardImageFirst =
    require("./../../images/icon-brand-recognition.svg").default;
  const cardImageSecond =
    require("./../../images/icon-detailed-records.svg").default;
  const cardImageThird =
    require("./../../images/icon-fully-customizable.svg").default;

  return (
    <main className="main">
      <section className="hero">
        <h1 className="hero__title">More than just shorter links</h1>
        <p className="hero__subtitle">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="action__button">Get Started</button>
        <img
          src={heroImage}
          alt="illustration working"
          className="hero__image"
        />
      </section>

      <section className="url-short">
        <input
          type="url"
          className="url-short__input"
          name="url"
          id="url"
          placeholder="Shorten a link here..."
          pattern="https://.*"
          required
        />
        <input
          type="submit"
          className="url-short__button"
          value="Shorten It!"
        />
      </section>

      <section className="stats">
        <h2 className="stats__title">Advanced Statistics</h2>
        <p className="stats__subtitle">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="stats__cards">
          <div className="card card__first">
            <div className="card__background">
              <img src={cardImageFirst} alt="logo" />
            </div>
            <h3 className="card__title">Brand Recognition</h3>
            <p className="card__subtitle">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card card__second">
            <div className="card__background">
              <img src={cardImageSecond} alt="logo" />
            </div>
            <h3 className="card__title">Detailed Records</h3>
            <p className="card__subtitle">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card card__third">
            <div className="card__background">
              <img src={cardImageThird} alt="logo" />
            </div>
            <h3 className="card__title">Fully Customizable</h3>
            <p className="card__subtitle">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <hr className="card-line" />
      </section>

      <section className="action">
        <h2 className="action__title">Boost your links today</h2>
        <button className="action__button">Get Started</button>
      </section>
    </main>
  );
};

export default Home;
