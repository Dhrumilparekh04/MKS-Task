const Category = require("../models/category");

//create Category
const createCategory = async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
      image: req.body.logo,
    });
    const newCategory = await category.save();
    res.status(201).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get category by id
const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

//update category by id
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    category.name = req.body.name;
    category.description = req.body.description;
    category.image = req.body.image;
    const updatedCategory = await category.save();
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

//delete category by id
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
