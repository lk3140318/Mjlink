async function shortenUrl() {
    let longUrl = document.getElementById("longUrl").value;
    if (!longUrl) {
        alert("Please enter a valid URL!");
        return;
    }
    
    try {
        let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
        let data = await response.json();

        if (data.ok) {
            let shortUrl = data.result.short_link;
            document.getElementById("shortUrl").innerHTML = `Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
        } else {
            document.getElementById("shortUrl").innerHTML = "Error: Unable to shorten the URL!";
        }
    } catch (error) {
        document.getElementById("shortUrl").innerHTML = "Error: Network issue or invalid URL!";
    }
}
