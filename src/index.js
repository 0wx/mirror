const express = require("express")
const app = express()
const request = require("request")
app.get("/image/:url", (req, res) => {
  const url = decodeURIComponent(req.params.url)
  request(url).pipe(res)
})
app.listen(process.env.PORT || 3000)
