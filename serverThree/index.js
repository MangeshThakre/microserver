require("dotenv").config();
const app = require("./app");
const connectToDb = require("./config/database.js");

const PORT = process.env.PORT || 8082;

// connecto to data base
connectToDb();

app.listen(PORT, () =>
  console.log("server Three is listning   http://localhost:" + PORT)
);
