// var app = chrome.runtime.getBackgroundPage();


document.body.onload = function() {
    chrome.storage.sync.get("isEnabled", function(items) {
        if (!chrome.runtime.error && items.isEnabled == true) {
            chrome.tabs.query({'active': true}, function (tabs) {
               var url = tabs[0].url;
               chrome.runtime.sendMessage({popupOpen: true, url: url});
            });
        }
    });
};

document.getElementById("agree-btn").onclick = function() {
    var isEnabled = document.getElementById("agree").checked;
    chrome.storage.sync.set({ "isEnabled" : isEnabled }, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    });
    window.close();
};
