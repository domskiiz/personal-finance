const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const path = require('path');
const url = require('url');

const DEV_MODE = process.argv.includes('--dev');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window
  mainWindow = new BrowserWindow({ height: 600, width: 900, minHeight: 400, minWidth: 850 });

  // Load the index.html of the app
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'build', DEV_MODE ? 'index.dev.html' : 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  if (DEV_MODE) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object
    mainWindow = null;
  });


  installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
    console.log(`Added Extension:  ${name}`);
  }).catch((err) => {
    console.log('An error occurred: ', err);
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  // Quit when all windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', function () {
  // Mac OS: re-create window in the app when dock icon is clicked
  // and no other windows are open
  if (mainWindow === null) {
    createWindow();
  }
});
