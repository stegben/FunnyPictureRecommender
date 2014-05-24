// popup.js
window.onload = function() {
    document.getElementById("button").onclick = function() {
        chrome.extension.sendMessage({
            type: "color-divs"
        });
    }

    document.getElementById("image1").onclick = function() {
        /*
        chrome.extension.sendMessage({
            type: "image-clicked"
        });
        */
        document.getElementById("image1_url").select();
    }
}