const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.status(200).json({
      messages: "Get All Users Success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      messages: "Server Error",
      error: error,
    });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [data] = await UsersModel.getUser(id);

    if (data.length === 0) {
      return res.status(404).json({
        messages: "User Not Found",
      });
    }

    res.status(200).json({
      messages: "Get User Success",
      data: data[0],
    });
  } catch (error) {
    res.status(500).json({
      messages: "Server Error",
      error: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { name, email, address } = req.body;

  if (!name || !email || !address) {
    return res.status(400).json({
      messages: "Name, Email, and Address are required",
    });
  }

  try {
    await UsersModel.createNewUser(name, email, address);
    res.status(201).json({
      messages: "Create New User Success",
      data: {
        name: name,
        email: email,
        address: address,
      },
    });
  } catch (error) {
    res.status(500).json({
      messages: "Server Error",
      error: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, address } = req.body;
  try {
    await UsersModel.updateUser(id, name, email, address);
    res.status(200).json({
      messages: "Update User Success",
      data: {
        id: id,
        name: name,
        email: email,
        address: address,
      },
    });
  } catch (error) {
    res.status(500).json({
      messages: "Server Error",
      error: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await UsersModel.deleteUser(id);
    res.status(200).json({
      messages: "Delete User Success",
      data: {
        id: id,
      },
    });
  } catch (error) {
    res.status(500).json({
      messages: "Server Error",
      error: error,
    });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
};
