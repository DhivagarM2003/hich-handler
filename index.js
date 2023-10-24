const express = require("express");
const app = express();
const student = require("./routes/student_routes");
const admin = require("./routes/admin_routes");

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use("/student",student);
app.use("/admin",admin);
