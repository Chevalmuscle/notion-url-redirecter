let regexNotion = new RegExp("https://www.notion.so/.+");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "TabUpdated") {
    const url = document.location.href;
    if (regexNotion.test(url)) {
      chrome.runtime.sendMessage({ redirect: url.replace("https://www.", "notion://") });
    }
  }
});
