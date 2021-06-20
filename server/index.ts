import express, { Request, Response } from "express";
import next from "next";
import { assetsCacheMiddleware } from "./middleware/caching";
import morgan from "morgan";

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const server = express();
const logger = morgan('[ACCESS] [:date[clf]] :status :remote-addr - :remote-user ":method :url HTTP/:http-version" :res[content-length] ":referrer" ":user-agent"');

module.exports = app
  .prepare()
  .then(() => {
    /** Handles NextJs request */
    server
      .use(logger)
      .use(assetsCacheMiddleware)
      .get("*", (req: Request, res: Response) => handle(req, res));
  })
  .then(() => {
    server.listen(port, (err?: any) => {
      if (err) {
        throw err;
      }

      console.log(`> [${dev ? "DEV" : "PROD"}] Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
