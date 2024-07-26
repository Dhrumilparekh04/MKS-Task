const Role = require('../models/role');

const createRole = async (req, res) => {
    console.log("here");
  try {
    const role = new Role({
      name: req.body.name,
      description: req.body.description,
    });
    const newRole = await role.save();
    res.status(201).json({
      success: true,
      message: "Role created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//get role all list
const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({
      success: true,
      data: roles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get role by id
const getRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: role,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update role by id
const updateRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    role.name = req.body.name;
    role.description = req.body.description;
    const updatedRole = await role.save();
    res.status(200).json({
      success: true,
      message: "Role updated successfully",
      data: updatedRole,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//delete role by id
const deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Role deleted successfully",
      data: role,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { createRole, getRoles, getRole, updateRole, deleteRole };