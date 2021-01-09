var toPrint = document.getElementById("currentTab");

var clickButton = document.getElementById("clickButton");

var express = require('express');
var app = express();

clickButton.addEventListener("click", () => {
    chrome.tabs.query({active:true, lastFocusedWindow:true}, tabs => {
        let url = tabs[0].url;
        toPrint.innerHTML = url;
        let toSave = {url: url};

    });
});
