document.getElementById('hideNotice').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Save the preference
  chrome.storage.sync.set({ 'hideNotice': true }, function() {
    console.log('Preference saved.');
  });

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

document.getElementById('resetPreference').addEventListener('click', async () => {
  chrome.storage.sync.remove('hideNotice', function() {
    console.log('Preference reset.');
  });
});

