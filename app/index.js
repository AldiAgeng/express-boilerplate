const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes/routes.main");

const app = express();

/* parses incoming requests with urlencoded payloads and is based on body-parser */
app.use(express.urlencoded({ extended: true }));

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());

/** Install Router */
app.use(router);

module.exports = app;
