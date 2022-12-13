require("dotenv").config();
const app = require("./app");
const connectToDb = require("./config/database.js");

const PORT = process.env.PORT || 8081;

// connecto to data base
connectToDb();

app.listen(PORT, () =>
  console.log("server Two is listning   http://localhost:" + PORT)
);
