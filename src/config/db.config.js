const AWS = require('aws-sdk');

const initializeDB = () => {
  try {
    AWS.config.update({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    
    // DynamoDB connection testing
    console.log('DynamoDB connection initialized');
    return dynamoDB;
  } catch (error) {
    console.error('Error initializing DynamoDB:', error);
    throw error;
  }
};

module.exports = {
  dynamoDB: initializeDB(),
  PRODUCTS_TABLE_NAME: 'Products'
};