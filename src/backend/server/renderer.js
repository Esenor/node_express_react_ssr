import ejs from 'ejs'
import path from 'path'
import fs from 'fs'

const viewFolder = path.join(__dirname, '/../views/')
const distLibUri = '/dist'

export function render(templateName, ssrApp, preloadedData, frontUiName) {
  return ejs.render(fs.readFileSync(path.join(viewFolder, `${templateName}.ejs`)).toString(), {
    ssrApp: ssrApp,
    jsonPreloadedData: `${JSON.stringify(preloadedData)}`,
    frontUiName: path.join(distLibUri, 'js', `${frontUiName}.min.js`)
  })
}
