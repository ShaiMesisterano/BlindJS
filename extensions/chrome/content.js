chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        if (request.message === "activate"){
            const textareas = document.getElementsByTagName('textarea');

            if (textareas.length > 0){
                window.BlindJS.start({
                    input: request.text,
                    output: textareas[0]
                });
                sendResponse({response: "activated"});
            }
        } else if (request.message === "terminate"){
            window.BlindJS.reset();
            sendResponse({response: "terminated"});
        }
    }
);