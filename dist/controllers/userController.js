"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const UserModel = __importStar(require("../models/userModel"));
const getAllUsers = (req, res) => {
    res.status(200).json(UserModel.getUsers());
};
exports.getAllUsers = getAllUsers;
const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = UserModel.getUserById(id);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const { name, email } = req.body;
    const id = Math.floor(Math.random() * 1000); // Simulate a simple ID generator
    const newUser = UserModel.createUser({ id, name, email });
    res.status(201).json(newUser);
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    const user = UserModel.updateUser(id, updatedUser);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const success = UserModel.deleteUser(id);
    if (success) {
        res.status(200).json({ message: 'User deleted' });
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.deleteUser = deleteUser;
