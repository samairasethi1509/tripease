
function updateMap() {
    let location = document.getElementById("locationInput").value;

    if (location.trim() === "") {
        alert("Please enter a location");
        return;
    }

    // Encode location for URL
    location = encodeURIComponent(location);

    // Update Google Maps embed
    document.getElementById("mapFrame").src =
        "https://www.google.com/maps?q=" + location + "&output=embed";
}
