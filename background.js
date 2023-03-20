chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	var currentUrl = tabs[0].url;
	var newUrl = "https://12ft.io/proxy?q=" + currentUrl.replace(/ /g, "%20").replace(/\//g, "%2F").replace(/:/g, "%3A");
	chrome.tabs.update({url: newUrl});
    });
});


