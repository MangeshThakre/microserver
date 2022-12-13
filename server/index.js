require("dotenv").config();
const connectToDb = require("./config/database.js");
const app = require("./app.js");
const PORT = process.env.PORT || 8081;

// connecto to data base
connectToDb();

app.listen(PORT, () =>
  console.log("server One is listning   http://localhost:" + PORT)
);
