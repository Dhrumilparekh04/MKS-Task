const CustomerCategory = require('../models/customerCategory');

// Create a new customer category
const createCustomerCategory = async (req, res) => {
  try {
    const customerCategory = new CustomerCategory(req.body);
    const newCategory = await customerCategory.save();
    res.status(201).json({
      success: true,
      data: newCategory,
      message: "Customer category created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all customer categories
const getCustomerCategories = async (req, res) => {
  try {
    const customerCategories = await CustomerCategory.find();
    res.status(200).json({
      success: true,
      data: customerCategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get a single customer category by ID
const getCustomerCategory = async (req, res) => {
  try {
    const customerCategory = await CustomerCategory.findById(req.params.id);
    if (!customerCategory) {
      return res.status(404).json({
        success: false,
        message: "Customer category not found",
      });
    }
    res.status(200).json({
      success: true,
      data: customerCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update a customer category by ID
const updateCustomerCategory = async (req, res) => {
  try {
    const customerCategory = await CustomerCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!customerCategory) {
      return res.status(404).json({
        success: false,
        message: "Customer category not found",
      });
    }
    res.status(200).json({
      success: true,
      data: customerCategory,
      message: "Customer category updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a customer category by ID
const deleteCustomerCategory = async (req, res) => {
  try {
    const customerCategory = await CustomerCategory.findByIdAndDelete(req.params.id);
    if (!customerCategory) {
      return res.status(404).json({
        success: false,
        message: "Customer category not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Customer category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
    createCustomerCategory,
    getCustomerCategories,
    getCustomerCategory,
    updateCustomerCategory,
    deleteCustomerCategory,
};