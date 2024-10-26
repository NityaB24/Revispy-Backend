const mongoose = require('mongoose');
const {faker} = require('@faker-js/faker');
const Category = require('../models/category');
const ConnectToDatabase = require('../config/db-connection');

async function loadCategories() {
  await ConnectToDatabase();

  await Category.deleteMany({});
  const categories = Array.from({ length: 100 }, () => ({
    name: faker.commerce.department(),
  }));

  await Category.insertMany(categories);
  console.log('Loaded categories');

}

module.exports = loadCategories;