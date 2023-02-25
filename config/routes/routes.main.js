const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../docs/swagger-docs.json");

const controllers = require("../../app/controllers");
const post = require("./posts");
const user = require("./user");

const apiRouter = express.Router();

apiRouter.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

apiRouter.use("/api/v1/posts", post);
apiRouter.use("/api/v1/users", user);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error("The Industrial Revolution and its consequences have been a disaster for the human race.");
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
