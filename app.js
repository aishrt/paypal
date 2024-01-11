const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("./config");
const port = 3001;

const app = express();
app.use(express.json());
app.use(cors());

// Register routes before defining specific routes
app.use("/", routes);

// app.get("/", (req, res) => {
//   res.send("Heyyyyyyyyyyyyyyyyyyyyy");
// });

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
