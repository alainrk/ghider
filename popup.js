document.getElementById("hideBanner").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Save the preference
  chrome.storage.sync.set({ hideBanner: true }, function () {
    console.log("Preference saved.");
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hideBanner,
  });
});

function hideBanner() {
  const banner = document.querySelector(".js-notice");
  if (banner) {
    banner.style.display = "none";
  }
}

document
  .getElementById("resetPreference")
  .addEventListener("click", async () => {
    chrome.storage.sync.remove("hideBanner", function () {
      console.log("Preference reset.");
    });
  });
