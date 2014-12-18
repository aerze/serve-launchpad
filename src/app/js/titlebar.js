'use strict';
// var gui = require('nw.gui');
// var win = gui.Window.get();


function addTitlebar (titlebarName) {
    var isMax = false;
    
    var titlebar = document.createElement('div');
    titlebar.setAttribute('id', titlebarName);
    titlebar.setAttribute('class', titlebarName);

    var image  = document.createElement('img');
    image.setAttribute('class', titlebarName + '-image');
    // image.setAttribute('src', 'lib/img/warp-icon.png');
    titlebar.appendChild(image);

    var title = document.createElement('div');
    title.setAttribute('class', titlebarName + '-text');
    title.innerText = 'Warp - A Lightweight HTTP Server';
    titlebar.appendChild(title);

    var closeButton = document.createElement('div');
    closeButton.setAttribute('id', titlebarName + '-close-button');
    closeButton.setAttribute('class', titlebarName + '-close-button');
    closeButton.onclick = closeWindow;
    titlebar.appendChild(closeButton);

    var maxButton = document.createElement('div');
    maxButton.setAttribute('id', titlebarName + '-max-button');
    maxButton.setAttribute('class', titlebarName + '-max-button');
    maxButton.onclick = maxWindows;
    titlebar.appendChild(maxButton);

    var devButton = document.createElement('div');
    devButton.setAttribute('id', titlebarName + '-dev-button');
    devButton.setAttribute('class', titlebarName + '-dev-button');
    devButton.onclick = openDevTools;
    titlebar.appendChild(devButton);


    document.body.appendChild(titlebar);
    
    function closeWindow() {
        window.close();
    }

    function maxWindows() {
        if (isMax) {
            win.unmaximize();
            isMax = false;
        } else {
            win.maximize();
            isMax = true;
        }
    }

    function openDevTools(){
        require('nw.gui').Window.get().showDevTools();
    }
};