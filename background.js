chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        return {
            responseHeaders: details.responseHeaders.filter(function(header) {
                return (header.name.toLowerCase() !== 'x-frame-options');
            })
        };
    }, {
        urls: ["<all_urls>"]
    }, ["blocking", "responseHeaders"]);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.popupOpen) {
        var newURL = "http://localizejs.com/editor?url=" + message.url;
        chrome.tabs.create({ url: newURL });
    }
});