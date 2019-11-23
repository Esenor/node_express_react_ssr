import ejs from 'ejs'
import path from 'path'
import fs from 'fs'

const defaultTemplate = (ssrStringComponent, preloadedData, jsFile) => ejs.render(fs.readFileSync(path.join(__dirname, '/../views/default.ejs')).toString(), {
  ssrRenderedApp: ssrStringComponent,
  preloadedData: `${JSON.stringify(preloadedData)}`,
  appLibPath: `/dist/${jsFile}.min.js`
})

export default defaultTemplate
