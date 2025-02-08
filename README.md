# Overview

In this project, I developed a **CRUD API using TypeScript and Express** to demonstrate my understanding of backend development and API testing. This project enhances my skills as a software engineer by reinforcing my knowledge of RESTful APIs, TypeScript syntax, and debugging using Postman.

The API allows users to **Create, Read, Update, and Delete (CRUD) user data**, following best practices such as modular architecture and data validation. The goal was to gain hands-on experience with TypeScript while building a functional backend service that could be expanded for real-world applications.

The **software includes:**
- An **Express.js server** written in TypeScript.
- API routes for handling user operations.
- A simple in-memory data store for user management.
- Testing using **Postman** for API validation.


**Watch my walkthrough and demo here:** 
[Software Demo Video](https://www.youtube.com/watch?v=Uc68mumtrLI)

# Development Environment

- **Code Editor:** Visual Studio Code
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Testing Tool:** Postman
- **Build Tool:** TypeScript Compiler (`tsc`)
- **Package Manager:** npm

### **Libraries Used:**
- `express` - Web framework for Node.js
- `uuid` - Unique ID generation for users
- `nodemon` - Auto-restart server during development
- `ts-node` - Run TypeScript files without compiling

# Useful Websites
- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Postman API Testing Guide](https://learning.postman.com/docs/getting-started/introduction/)
- [UUID Package](https://www.npmjs.com/package/uuid)

# Future Work
Here are some improvements and features I plan to add:

- **Persist user data using a database** (MongoDB or PostgreSQL).
- **Add input validation** using `express-validator` to ensure proper data submission.
- **Implement authentication and authorization** using JWT.
- **Improve error handling** by adding middleware for better debugging.