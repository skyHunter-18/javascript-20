const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Creating a helper function
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for Links and photos
function displayPhotos() {
    // Run foreach for each object in photosArray
    photosArray.forEach((photo) => {
        // Creating an <a> element to link to unsplash
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank",
        });

        // Creating img for photo
        const img = document.createElement("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Putting img inside a and both inside image-container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Unsplash API
const photoCount = 10;
const apiKey = "PQfapZjuxLeUabGDpmNY_GtuchLEURH1obzhSP0mrQg";
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
