chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    chrome.tabs.sendMessage(tabId, {
      message: "TabUpdated",
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender) {
  chrome.tabs.update(sender.tab.id, { url: request.redirect });
});
