const express = require('express');
const router = express.Router();
const roleRoutes = require('./role');
const userRoutes = require('./user');
const brandRoutes = require('./brand')
const categoryRoutes = require('./category')
const subCategoryRoutes = require('./subCategory')
const customerCategoriesRoutes = require('./customerCategory')

router.use('/role', roleRoutes);
router.use('/user', userRoutes);
router.use('/brand', brandRoutes);
router.use('/category', categoryRoutes)
router.use('/subCategory', subCategoryRoutes)
router.use('/customerCategory', customerCategoriesRoutes)

module.exports = router;