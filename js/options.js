// Save function to store proxy settings in chrome storage
function save() {
    // Get values from the input fields and save them in chrome.storage.sync
    chrome.storage.sync.set({
        proxyAddress: document.getElementById("proxyAddress").value,
        proxyUsername: document.getElementById("proxyUsername").value,
        proxyPassword: document.getElementById("proxyPassword").value
    }, function () {
        // Update the status element to show a "Saved" message
        var status = document.getElementById("status");
        status.textContent = "Saved";
        
        // Clear the "Saved" message after 1 second
        setTimeout(function () {
            status.textContent = "";
        }, 1000);
    });
}

// Clear function to reset the input fields
function clear() {
    document.getElementById("proxyAddress").value = "";
    document.getElementById("proxyUsername").value = "";
    document.getElementById("proxyPassword").value = "";
}

// Restore function to load saved proxy settings from chrome.storage.sync
function restore() {
    chrome.storage.sync.get({
        proxyAddress: "",
        proxyUsername: "",
        proxyPassword: ""
    }, function (items) {
        // Populate the input fields with saved data
        document.getElementById("proxyAddress").value = items.proxyAddress;
        document.getElementById("proxyUsername").value = items.proxyUsername;
        document.getElementById("proxyPassword").value = items.proxyPassword;
    });
}

// Add event listeners after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    restore(); // Restore proxy settings when the page is loaded
    document.getElementById("clear").addEventListener("click", clear); // Clear button event
    document.getElementById("save").addEventListener("click", save); // Save button event
});
