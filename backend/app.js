const express = require("express");
require("./db");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/api/user", userRouter);

app.post(
  "/sign-in",
  (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ error: "email/password missing!" });
    next();
  },
  (req, res) => {
    res.send("<h1>Hello I am about page</h1>");
  }
);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`the port is listening on port ${PORT}`);
});
