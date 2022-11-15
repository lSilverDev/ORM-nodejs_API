const bodyParser = require("body-parser");

const people = require("./peopleRoute");
const classes = require("./classesRoute");
const levels = require("./levelsRoute");

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({extended: false}),
        people,
        levels,
        classes
    )
}