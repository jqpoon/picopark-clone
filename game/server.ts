// const express = require("express");
// const app = express();
// const path = require("path");

// // app.use("/static", express.static("build/static"));
// // app.use(express.static("build/dist"));

// app.use(express.static(__dirname + "/src"));

// app.listen(3000, () => {
//   console.log("server started at 3000");
// });

// app.get("/", function (req, res) {
//   // res.sendFile(path.join(__dirname, 'index.html'));
//   res.sendFile(path.join(__dirname, "index.html"));
// });

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/hello", (req: any, res: any) => {
  res.send({
    message: "hello world",
  });
});

app.listen(8080, () => {
  console.log("Server listening on http://localhost:8080");
});
