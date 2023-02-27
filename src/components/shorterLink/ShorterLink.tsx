import { useState } from "react";
import "./style.css";

const ShorterLink = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${longUrl}`
    );
    const data = await response.json();

    setShortUrl(data.result.short_link);
    setLongUrl(data.result.original_link);

    const button = document.getElementById("shorter-btn");
    if (button) {
      button.textContent = "Copy";
      button.style.backgroundColor = "hsl(180, 66%, 49%)";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      shortUrl.replace("https://api.shrtco.de/v2/", "")
    );

    const button = document.getElementById("shorter-btn");
    if (button) {
      button.textContent = "Copied!";
      button.style.backgroundColor = "hsl(257, 27%, 26%)";
    }
  };

  return (
    <section className="url">
      <form className="url-short" onSubmit={handleSubmit}>
        <input
          type="text"
          className="url-short__input"
          name="url"
          id="url"
          value={longUrl}
          onChange={(event) => setLongUrl(event.target.value)}
          placeholder="Shorten a link here..."
          pattern="https://.*"
          required
        />
        <button type="submit" className="url-short__button">
          Shorten It!
        </button>
      </form>

      {shortUrl && (
        <div className="shorter">
          <div className="shorter__background">
            <p className="shorter__text-left">
              {longUrl.length > 40 ? longUrl.slice(0, 40) + "..." : longUrl}
            </p>
            <div className="shorter__right">
              <p className="shorter__text-right">{shortUrl}</p>
              <button
                onClick={handleCopy}
                className="shorter__copy"
                id="shorter-btn"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShorterLink;
