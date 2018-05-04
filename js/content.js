
chrome.tabs.executeScript(null, {
    code: 'var config = ' + JSON.stringify(getKeywords)
}, function() {
    chrome.tabs.executeScript(null, {file: 'custom.js'});
});