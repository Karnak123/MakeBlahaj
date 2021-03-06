function changeInnerHTML() {
    let text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
    for (let i=0; i<text.length; ++i) {
        text[i].innerHTML = text[i].innerHTML.replace(/shark/gi, '&#x1f988');
    }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: changeInnerHTML
    });
});