chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url && tab.url.includes("github.com")) {
    chrome.storage.sync.get('hideNotice', function(data) {
      if(data.hideNotice) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: hideNotice
        });
      }
    });
  }
});

function hideNotice() {
  const notice = document.querySelector('.js-notice');
  if (notice) {
    notice.style.display = 'none';
  }
}

