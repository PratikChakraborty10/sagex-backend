const { v4: uuidv4 } = require("uuid");
const { dynamoDB, PRODUCTS_TABLE_NAME } = require("../config/db.config");

const addProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    const product = {
      id: uuidv4(),
      name,
      price: Number(price),
      quantity: Number(quantity),
      total_amount: Number((price * quantity).toFixed(2)),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const params = {
      TableName: PRODUCTS_TABLE_NAME,
      Item: product,
    };

    await dynamoDB.put(params).promise();

    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to create product",
      error: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const params = {
      TableName: PRODUCTS_TABLE_NAME,
    };

    const result = await dynamoDB.scan(params).promise();

    res.status(200).json({
      status: "success",
      message: "Products retrieved successfully",
      data: result.Items,
      count: result.Count,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const params = {
      TableName: PRODUCTS_TABLE_NAME,
      Key: { id },
    };

    const result = await dynamoDB.get(params).promise();

    if (!result.Item) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Product retrieved successfully",
      data: result.Item,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const params = {
      TableName: PRODUCTS_TABLE_NAME,
      Key: { id },
    };

    const result = await dynamoDB.delete(params).promise();

    if (result) {
      res.status(200).json({
        status: "success",
        message: "Product deleted successfully",
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const params = {
      TableName: PRODUCTS_TABLE_NAME,
      Key: { id },
      UpdateExpression:
        "SET #name = :name, price = :price, quantity = :quantity, total_amount = :total_amount, updated_at = :updated_at",
      ExpressionAttributeNames: {
        "#name": "name", // Mapping 'name' to '#name' to avoid reserved keyword conflict
      },
      ExpressionAttributeValues: {
        ":name": name,
        ":price": Number(price),
        ":quantity": Number(quantity),
        ":total_amount": Number((price * quantity).toFixed(2)),
        ":updated_at": new Date().toISOString(),
      },
      ReturnValues: "ALL_NEW", // This will return the updated item
    };

    const result = await dynamoDB.update(params).promise();

    if (!result.Attributes) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: result.Attributes,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to update product",
      error: error.message,
    });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
};
