
const Category = require('../models/category');
const User = require('../models/user');
require('dotenv').config();

exports.category = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 6;
    const categories = await Category.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(categories);
  };


exports.markedCategory = async (req, res) => {
    const { categoryId } = req.body;
    const user = await User.findById(req.user.userId);
    if (!user.interests.includes(categoryId)) {
      user.interests.push(categoryId);
      await user.save();
    }
    res.json({ message: 'Interest marked' });
  };


