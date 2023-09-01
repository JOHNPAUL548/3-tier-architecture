const mongoose = require("mongoose");
const Template = mongoose.Schema;

const foodTemplate = new Template({
  foodName: {
    type: String,
    required: true,
  },

  foodDesc: {
    type: String,
    required: true,
  },
  foodOrigin: {
    type: String,
    required: true,
  },
  foodImg: {
    type: String,
    required: true,
  },
  foodPopularity: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("foodStore", foodTemplate);
