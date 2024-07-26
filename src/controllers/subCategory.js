const SubCategory = require("../models/subCategory");

//create subCategory
const createSubCategory = async (req, res) => {
  try {
    const subCategory = new SubCategory(req.body);
    const newsubCategory = await subCategory.save();
    res.status(201).json({
      success: true,
      message: "SubCategory created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//get all subcategories
const getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json({
      success: true,
      data: subCategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get subcategory by id
const getSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: subCategory,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

//update subcategory by id
const updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    subCategory.name = req.body.name;
    subCategory.description = req.body.description;
    subCategory.image = req.body.image;
    const updatedCategory = await subCategory.save();
    res.status(200).json({
      success: true,
      message: "SubCategory updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

//delete subCategory by id
const deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "SubCategory deleted successfully",
      data: subCategory,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
};