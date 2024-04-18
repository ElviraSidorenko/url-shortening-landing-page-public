// This function copies the shortened URL to the clipboard and updates the state to show that the URL has been copied. If the browser does not support the Clipboard API, it will fallback to using the Share API or an alert to prompt the user to copy the URL manually.

export const copyToClipboard = async (shortUrl) => {
  try {
    await navigator.clipboard.writeText(shortUrl);

  } catch (error) {
    console.error("Error copying to clipboard", error);
    // Fallback for iOS Safari users

    if (navigator.share) {
      await navigator.share({
        title: "Shortened URL",
        text: "Check out this shortened URL:",
        url: shortUrl,
      });
    } else {
      alert(
        "Please long-press the URL below and select 'Copy' to copy the shortened URL:\n\n" +
          shortUrl
      );
    }
  }
};
