import "./style.css";

const ShorterLink = () => {
  return (
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
      <input type="submit" className="url-short__button" value="Shorten It!" />
    </section>
  );
};

export default ShorterLink;
