// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://localizejs.com/editor?url=" + activeTab.url;
  chrome.tabs.create({ url: newURL });
});

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