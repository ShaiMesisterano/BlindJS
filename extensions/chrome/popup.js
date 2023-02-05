(async () => {
    const activateButton = document.getElementById('blindjs-activate');
    const terminateButton = document.getElementById('blindjs-terminate');

    activateButton.addEventListener('click', async () => {
        const res = await chrome.runtime.sendMessage({action: "reportAnalytics"});
        const text = document.getElementById('blindjs-text').value;
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const resp = await chrome.tabs.sendMessage(tab.id, {message: 'activate', text});
    });

    terminateButton.addEventListener('click',  async() => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {message: 'terminate'});
    });
})();