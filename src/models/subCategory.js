const mongoose = require('mongoose')

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true
    },
    image: {
      type: String,
    },
    categorySchema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);