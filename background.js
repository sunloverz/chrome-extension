chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        for (var i = 0; i < details.responseHeaders.length; ++i) {
            if (details.responseHeaders[i].name.toLowerCase() == 'x-frame-options') {
                details.responseHeaders.splice(i, 1);
                return {
                    responseHeaders: details.responseHeaders
                };
            }
        }
    }, {
        urls: ["<all_urls>"]
    }, ["blocking", "responseHeaders"]);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.popupOpen) {
        var newURL = "http://localizejs.com/editor?url=" + message.url;
        chrome.tabs.create({ url: newURL });
    }
});