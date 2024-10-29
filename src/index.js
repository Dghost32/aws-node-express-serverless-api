import express from "express";
import ServerlessHttp from "serverless-http";
import router from "./routes/index.js";
import Paths from "./common/Paths.js";

const app = express();

app.use(express.json());

app.use(Paths.Base, router);

app.get("/", (_, res) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.use((_, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


export const handler = ServerlessHttp(app);

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
