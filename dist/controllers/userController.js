"use strict";

const { v4: uuidv4 } = require("uuid"); // Import UUID for unique ID generation
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../models/userModel");

// Get all users
const getAllUsers = (req, res) => {
    const users = getUsers();
    res.status(200).json(users);
};

// Get a single user by ID
const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    const user = getUserById(id);
    
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

// Create a new user
const createNewUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const id = uuidv4(); // Generate a unique ID
    const newUser = createUser({ id, name, email });

    res.status(201).json(newUser);
};

// Update an existing user
const updateExistingUser = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    const existingUser = getUserById(id);
    
    if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = { ...existingUser, ...req.body }; // Merge old & new data
    const user = updateUser(id, updatedUser);

    res.status(200).json(user);
};

// Delete a user
const deleteExistingUser = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    const success = deleteUser(id);

    if (success) {
        res.status(200).json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

// Export controller functions
module.exports = {
    getAllUsers,
    getUser,
    createNewUser,
    updateExistingUser,
    deleteExistingUser
};

