const Brand = require("../models/brand");

//create brand
const createBrand = async (req, res) => {
  try {
    const brand = new Brand({
      name: req.body.name,
      description: req.body.description,
      logo: req.body.logo,
      countryOrigin: req.body.countryOrigin,
    });
    const newBrand = await brand.save();
    res.status(201).json({
      success: true,
      message: "Brand created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//get all brand
const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json({
      success: true,
      data: brands,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get brand by id
const getBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: brand,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update brand by id
const updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    brand.name = req.body.name;
    brand.description = req.body.description;
    brand.logo = req.body.logo;
    brand.countryOrigin = req.body.countryOrigin;
    const updatedBrand = await brand.save();
    res.status(200).json({
      success: true,
      message: "Brand updated successfully",
      data: updateBrand,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//delete brand by id
const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Brand deleted successfully",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createBrand, getBrands, getBrand, updateBrand, deleteBrand };
