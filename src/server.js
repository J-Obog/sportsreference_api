const express = require("express")
const app = express()
const port = process.env.PORT || 8000


//app.use("/nba", require("./api/nba"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})















