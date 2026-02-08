const http = require('http')
const url = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.WEBSITE_HOSTNAME || 'localhost'
const port = process.env.PORT || 8080

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    handle(req, res, parsedUrl).catch((err) => {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    })
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
