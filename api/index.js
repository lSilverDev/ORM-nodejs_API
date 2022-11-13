const express = require("express");
const routes = require("./routes")

const app = express();
const port = 3030;

routes(app);

app.listen(port, () => console.log('running...'));

module.exports = app;