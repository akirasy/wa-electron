const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
  const ses = session.fromPartition('persist:whatsapp-session');

  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'WhatsApp Desktop',
    icon: path.join(__dirname, 'build/icon.png'),
    webPreferences: {
      partition: 'persist:whatsapp-session',
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const customUserAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  mainWindow.webContents.setUserAgent(customUserAgent);
  mainWindow.loadURL('https://web.whatsapp.com');
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
