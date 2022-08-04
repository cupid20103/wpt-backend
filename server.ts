import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      return callback(null, true);
    },
  })
);

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
