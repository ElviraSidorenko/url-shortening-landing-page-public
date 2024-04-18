// URL shortener component
// Includes a form to enter a URL and a list of shortened URLs saved in local storage
// Additions: copy to clipboard functionality, error handling, and fallback for iOS Safari users

import React, { useState } from "react";
import api from "../../api"; // Axios instance for making API requests
import useLocalStorage from "../../utilities/useLocalStorage"; // Custom hook to save data to local storage
import { copyToClipboard } from "../../utilities/clipboard"; // Function to copy the shortened URL to the clipboard


function UrlShortener() {
  // State variables
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [listShortenedUrls, setListShortenedUrls] = useLocalStorage(
    "shortenedUrls",
    []
  ); // Load the list of shortened URLs from local storage
  

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setError(""); // Clear any previous error messages

    try {
      const response = await api.post("/link", { url });
      if (response.status === 201) {
        const newShortenedUrl = {
          originalUrl: response.data.url,
          shortUrl: response.data.shrtlnk,
          copied: false,
        };
        setListShortenedUrls((prevUrls) => [...prevUrls, newShortenedUrl]); 
        setUrl(""); // Clear the URL input field
      } else {
        setError("Unexpected response code: " + response.status);
      }
    } catch (error) {
      setError("Error shortening the URL: " + error.message);
    }
  };
  
  // Function to update the copied state of the shortened URL
  const updateCopiedState = (shortUrl) => {
    setListShortenedUrls((prevUrls) =>
      prevUrls.map((url) =>
        url.shortUrl === shortUrl ? { ...url, copied: true } : url
      )
    );
  }


  // Render the URL shortener component
  return (
    <>
    <div className="url-shortener-section">
      <div id="urlShortener" className="url-shortener-container">
        <form className="url-shortener-form" onSubmit={handleSubmit}> {/* Handle form submission */}
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)} // Update the URL state variable on change
            placeholder="Enter URL here..."
            required
            className="url-shortener-input"
          />
          <button className="url-shortener-button" type="submit">
            Shorten it!
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="url-shortener-results">
        {/* Display the list of shortened URLs in reverse order */}
        {listShortenedUrls
          .slice(0)
          .reverse()
          .map(({ originalUrl, shortUrl, copied }, index) => (
            <div key={index} className="url-shortener-result">
              <a
                className="url-original-link"
                href={originalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {originalUrl}
              </a>
              <a
                className="url-short-link"
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortUrl}
              </a>
              <button
                className="url-copy-button"
                onClick={() => {copyToClipboard(shortUrl); updateCopiedState(shortUrl)}} // Copy the shortened URL to the clipboard and update the copied state
                disabled={copied}
              >
                {copied ? "Copied!" : "Copy"} {/* Display the button text based on the copied state */}
              </button>
            </div>
          ))}
      </div>
    </div>
    </>
  );
}

export default UrlShortener;
