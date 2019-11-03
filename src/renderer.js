// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;

// When document has loaded, initialise
document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        handleWindowControls();
    }
};

let win = remote.getCurrentWindow();

function handleWindowControls() {
    // Make minimise/maximise/restore/close buttons work when they are clicked
    document.getElementById('min-button').addEventListener("click", event => {
      win.minimize();
    });

    document.getElementById('max-button').addEventListener("click", event => {
      win.maximize();
    });

    document.getElementById('restore-button').addEventListener("click", event => {
      win.unmaximize();
    });

    document.getElementById('close-button').addEventListener("click", event => {
      win.close();
    });

    // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
    toggleMaxRestoreButtons();
    win.on('maximize', toggleMaxRestoreButtons);
    win.on('unmaximize', toggleMaxRestoreButtons);

    function toggleMaxRestoreButtons() {
        if (win.isMaximized()) {
            maxButton.style.display = "none";
            restoreButton.style.display = "flex";
        } else {
            restoreButton.style.display = "none";
            maxButton.style.display = "flex";
        }
    }

}
