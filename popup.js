document.getElementById('hideNotice').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hideNotice,
  });
});

function hideNotice() {
  const notice = document.querySelector('.js-notice');
  if (notice) {
    notice.style.display = 'none';
  }
}

