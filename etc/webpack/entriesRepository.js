const path = require('path')
const fs = require('fs')

const findEntriesFiles = (startPath, filter) => {
  let entries = []
  const findEntries = (startPath, filter) => {
    if (!fs.existsSync(startPath)) {
      console.log(`${startPath} folder not found`)
      return false
    }
    let files = fs.readdirSync(startPath)
    files.forEach((file) => {
      let fileName = path.join(startPath, file)
      let fileStat = fs.lstatSync(fileName)
      if (fileStat.isDirectory()) {
        findEntries(fileName, filter)
      } else if (fileName.indexOf(filter) > 0) {
        entries.push(fileName)
      }
    })
  }
  findEntries(startPath, filter)

  return [...entries]
}

module.exports = {
  getJsEntryFiles: () => {
    return findEntriesFiles(path.join(__dirname, '/../../src/frontend/js'), '.js')
  },
  getScssEntryFiles: () => {
    return findEntriesFiles(path.join(__dirname, '/../../src/frontend/scss'), '.scss')
  }
}