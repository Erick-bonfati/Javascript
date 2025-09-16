
const fs = require('fs').promises;
const path = require('path');

fs.readdir(path.resolve(__dirname)) // busca caminho da pasta atual
  .then(files => console.log(files)) // exibe arquivos da pasta
  .catch(e => console.log(e))


async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir)
  walk(files);
}

function walk(files) {
  for(let file of files) {
    console.log(files)
  }
}

readdir()