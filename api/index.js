const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3030;

app.get('/', (request, response)=> {
        response.status(200).send({messagem: "API"});
    }
)

app.listen(port, () => console.log('running...'));