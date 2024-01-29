chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hideNotice
  });
});

function hideNotice() {
  const notice = document.querySelector('.js-notice');
  if (notice) {
    notice.style.display = 'none';
  }
}

