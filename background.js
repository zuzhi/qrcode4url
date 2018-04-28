chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        convertLocalhost: true // Convert localhost to intranet IP or not
    }, function() {
        chrome.storage.sync.get(['convertLocalhost'], function(result) {
            console.log('convertLocalhost is ' + result.convertLocalhost);
        });
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                // pageUrl: {
                    // hostEquals: 'developer.chrome.com'
                // },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});