// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { getEnabledCategories } = require('trace_events');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete:'CASCADE',
} )
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: ProductTag}, {
  foreignKey: 'productTag_id',
  });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag}, {
    foreignKey: 'productTag_id',
  });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
