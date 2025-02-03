import { Request, Response } from 'express';
import * as UserModel from '../models/userModel';

export const getAllUsers = (req: Request, res: Response): void => {
  res.status(200).json(UserModel.getUsers());
};

export const getUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = UserModel.getUserById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const createUser = (req: Request, res: Response): void => {
  const { name, email } = req.body;
  const id = Math.floor(Math.random() * 1000); // Simulate a simple ID generator
  const newUser = UserModel.createUser({ id, name, email });
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  const user = UserModel.updateUser(id, updatedUser);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const deleteUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const success = UserModel.deleteUser(id);
  if (success) {
    res.status(200).json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
