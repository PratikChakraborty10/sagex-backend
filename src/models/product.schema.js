const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .required()
    .messages({
      'string.empty': 'Product name is required',
      'string.min': 'Product name must be at least 1 character long'
    }),
    
  price: Joi.number()
    .positive()
    .required()
    .messages({
      'number.base': 'Price must be a number',
      'number.positive': 'Price must be greater than 0'
    }),
    
  quantity: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      'number.base': 'Quantity must be a number',
      'number.integer': 'Quantity must be an integer',
      'number.positive': 'Quantity must be greater than 0'
    }),
    
  total_amount: Joi.number()
    .min(0)
    .required()
    .messages({
      'number.base': 'Total amount must be a number',
      'number.min': 'Total amount cannot be negative'
    })
});

module.exports = productSchema;