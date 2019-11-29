import path from 'path'

const api = async (req, res) => {
  res.sendFile(await delay(req.params.filename))
}

const delay = (filename) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(path.join(__dirname, `../../../static/dist/js/${filename}`))
    }, 2000)
  })
}

export default api
