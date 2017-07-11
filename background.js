chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://localizejs.com/editor?url=" + activeTab.url;
  chrome.tabs.create({ url: newURL });
});

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        //chrome.extension.getBackgroundPage().console.log(details);
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

