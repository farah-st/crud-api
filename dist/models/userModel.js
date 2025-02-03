"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
let users = [];
const getUsers = () => users;
exports.getUsers = getUsers;
const getUserById = (id) => users.find(user => user.id === id);
exports.getUserById = getUserById;
const createUser = (user) => {
    users.push(user);
    return user;
};
exports.createUser = createUser;
const updateUser = (id, updatedUser) => {
    const user = (0, exports.getUserById)(id);
    if (user) {
        Object.assign(user, updatedUser);
        return user;
    }
    return undefined;
};
exports.updateUser = updateUser;
const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteUser = deleteUser;
