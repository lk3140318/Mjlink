function shortenUrl() {
    let longUrl = document.getElementById("longUrl").value;
    if (longUrl === "") {
        alert("Please enter a URL!");
        return;
    }
    
    // Dummy short URL (Replace with API logic if needed)
    let shortUrl = "https://short.ly/" + Math.random().toString(36).substr(2, 6);
    
    document.getElementById("shortUrl").innerHTML = `Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}
