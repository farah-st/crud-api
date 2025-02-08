"use strict";

let users = []; // In-memory user store

// Get all users
const getUsers = () => users;

// Get user by ID
const getUserById = (id) => users.find(user => user.id === String(id));

// Create a new user
const createUser = (user) => {
    users.push(user);
    return user;
};

// Update user (returns a new object instead of mutating)
const updateUser = (id, updatedUser) => {
    const index = users.findIndex(user => user.id === String(id));
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser }; // Create a new updated object
        return users[index];
    }
    return undefined;
};

// Delete user
const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === String(id));
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};

// Export functions
module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };

