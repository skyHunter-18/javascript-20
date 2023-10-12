const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const selectMediaBtn = document.getElementById("select-media-btn");
// Prompt to select media stream, then pass it to video element and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {}
}

button.addEventListener("click", async () => {
    // Disable button
    button.disabled = true;

    // Start picture in picture
    await videoElement.requestPictureInPicture();

    // Reset button
    button.disabled = false;
});

// On Load

selectMediaBtn.addEventListener("click", () => {
    selectMediaStream();
});
