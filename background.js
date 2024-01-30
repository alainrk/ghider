chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url && tab.url.includes("github.com")) {
    chrome.storage.sync.get("hideBanner", function (data) {
      if (data.hideBanner) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: hideBanner,
        });
      }
    });
  }
});

function hideBanner() {
  const banner = document.querySelector(".js-notice");
  if (banner) {
    banner.style.display = "none";
  }
}
