  chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: "menu.html"
      });
  });


/*

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

*/