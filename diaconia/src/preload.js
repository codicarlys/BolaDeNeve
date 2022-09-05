const { contextBridge } = require("electron");
const fs = require('fs');
const path = require('path');

try {
    const jsonString = fs.readFileSync(path.join(path.dirname(''),'src/database/grupos.json'));
    const configFile = JSON.parse(jsonString);
    contextBridge.exposeInMainWorld('configFile', configFile);
} catch (err) {
    console.log('Erro ao Ler arquivo json');
    console.log(err);
}



