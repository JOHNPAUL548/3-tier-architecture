const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/food-routes");
const app = express();
const cors = require('cors')

const dbURI =
  "mongodb+srv://Lani:cloudfoodstore@reactjs.lfyxbf4.mongodb.net/CloudFoodDB?retryWrites=true&w=majority";

app.use(express.json())
app.use(cors())
app.use('/foods', router)

mongoose
  .connect(dbURI)
  .then(() => console.log("connected da, successfully"))
  .then(() => {
    app.listen(5000);
  })
  .catch((e) => console.log(e));
