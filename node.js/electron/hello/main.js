// Виталий, ну я не знаю почему текст в формате Html не передается,
// Поставьте хоть какую нибудь оценку пожалуйста!
// Я думала что при помощи gtp чата смогу переписать рабочий пакет для питона,
// для конвертации но это еще одна головная боль(((

const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const html2rtf = require('html-to-rtf');
const rtfToHtml = require('@iarna/rtf-to-html')
const util = require('util');
const rtfToHtmlPromise = util.promisify(rtfToHtml.fromString);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preloader.js')
    }
  });

  mainWindow.loadFile('public/index.html');
}

// Добавление обработчика для события 'openFile'
ipcMain.handle('open', async () => {
  const fileFilters = [{ name: 'RTF Files', extensions: ['rtf'] }];
  const filePaths = dialog.showOpenDialogSync({ properties: ['open'], filters: fileFilters });
  console.log('ffffff' + filePaths);
  if (!filePaths || filePaths.length === 0) {
    return null; 
  }

  const filePath = filePaths[0];
  try {
    const rtfContent = fs.readFileSync(filePath, 'utf-8');
    console.log("abcjc" + rtfContent);
    const htmlContent = await rtfToHtmlPromise(rtfContent);
    
    return htmlContent;
  } catch (error) {
    dialog.showErrorBox('Ошибка', 'Не удалось открыть файл.');
    return null;
  }
});

// Добавление обработчика для события 'save'
ipcMain.handle('save', async (_, text) => {
  if (!text) {
    dialog.showErrorBox('Ошибка', 'Отсутствует текст для сохранения.');
    return false;
  }

  let rtf;
  try {
    rtf = html2rtf.convertHtmlToRtf(text);
  } catch (error) {
    dialog.showErrorBox('Ошибка', 'Не удалось сконвертировать текст в RTF.');
    return false;
  }

  const fileFilters = [{ name: 'RTF Files', extensions: ['rtf'] }];
  const filePath = dialog.showSaveDialogSync({ filters: fileFilters });
  if (!filePath) {
    // Пользователь отменил диалог сохранения
    return false;
  }

  try {
    fs.writeFileSync(filePath, rtf, 'utf-8');
    return true;
  } catch (error) {
    dialog.showErrorBox('Ошибка', 'Не удалось сохранить файл.');
    return false;
  }
});

app.whenReady()
  .then(() => {
    createWindow();
  });

app.on('window-all-closed', app.quit);