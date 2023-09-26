const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Create elements for Links and photos
function displayPhotos() {
    // Run foreach for each object in photosArray
    photosArray.forEach((photo) => {
        // Creating an <a> element to link to unsplash
        const item = document.createElement("a");
        item.setAttribute("href", photo.links.html);
        item.setAttribute("targer", "_blank");

        // Creating img for photo
        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description);
        img.setAttribute("title", photo.alt_description);

        // Putting img inside a and both inside image-container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Unsplash API
const photoCount = 2;
const apiKey = "hFJU40IXy1iaJqblPpxwBZlkf1HZV8SyOsGR2hWKWwM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photoCount}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        // console.log(photosArray);
    } catch (error) {
        // Catch error here
    }
}

// On Load
getPhotos();
