const mongoose = require("mongoose");

const customerCategorySchema = new mongoose.Schema(
  {
    customerType: {
      enum: ["elite", "silver", "gold", "platinum"],
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CustomerCategory", customerCategorySchema);
