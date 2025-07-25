import router from "#api/employees";
import express from "express";
const app = express();
export default app;

// TODO: this file!
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.route("/").get((req, res) => {
  res.send("Welcome to the Fullstack Employees API.")
})

app.use("/employees", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});
