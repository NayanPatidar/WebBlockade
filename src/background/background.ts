chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      console.log("Tab URL updated: ", changeInfo.url);
  
      chrome.storage.local.get("blockedUrls", ({ blockedUrls }) => {
        if (!blockedUrls) {
          console.log("No blocked URLs configured.");
          return;
        }
  
        const blocked = blockedUrls.some((url) => changeInfo.url.includes(url));
        if (blocked) {
          console.log("Blocked URL: ", changeInfo.url);
  
          chrome.tabs.update(tabId, {
            url: `chrome-extension://${chrome.runtime.id}/blockedPage.html`,
          });
        }
      });
    } else {
      console.log("No URL update detected for this event.");
    }
  });
  