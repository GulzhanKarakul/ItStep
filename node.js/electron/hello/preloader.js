const { ipcRenderer, contextBridge, dialog } = require('electron');

contextBridge.exposeInMainWorld('backend', {
  save: (text) => ipcRenderer.invoke('save', text),
  openFile: () => ipcRenderer.invoke('open')
});

ipcRenderer.on('loadedFile', (event, fileContent) => {
  window.dispatchEvent(new CustomEvent('load', { detail: fileContent }));
});
