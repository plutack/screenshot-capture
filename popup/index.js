document.addEventListener('DOMContentLoaded', () => {
    // Listen for messages from the background script
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.message === 'image') {
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = `<img src="${request.image}" alt="Processed Image"/>`;
        }
    });
});
