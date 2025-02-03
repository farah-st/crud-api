interface User {
    id: number;
    name: string;
    email: string;
  }
  
  let users: User[] = [];
  
  export const getUsers = (): User[] => users;
  export const getUserById = (id: number): User | undefined => users.find(user => user.id === id);
  export const createUser = (user: User): User => {
    users.push(user);
    return user;
  };
  export const updateUser = (id: number, updatedUser: Partial<User>): User | undefined => {
    const user = getUserById(id);
    if (user) {
      Object.assign(user, updatedUser);
      return user;
    }
    return undefined;
  };
  export const deleteUser = (id: number): boolean => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  };
  