const express = require("express")
const app = express()

const auth = require("./auth")

const user = require("./route/user")
app.use("/", user)

const pegawai = require("./route/pegawai")
app.use("/pegawai", auth, pegawai)

app.listen(2000, () => {
    console.log("Server run on port 2000");
})