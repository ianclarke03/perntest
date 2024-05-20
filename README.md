# Final Project Build Instructions

Make sure you have Node.js installed before running these commands.

## Server Setup

To run the server, navigate to the “server” directory and follow these steps:

1. **Install ts-node**:
   - Ensure ts-node is installed:
     ```sh
     npm install -g ts-node
     ```
     Or if you prefer to install it locally:
     ```sh
     npm install ts-node --save-dev
     ```
   - Verify the installation:
     After installing ts-node, you can verify its installation by running:
     ```sh
     ts-node --version
     ```

2. **Install the 'cors' module**:
   ```sh
   npm install cors

Ensure that the types for 'cors' are available:
Sometimes TypeScript requires type declarations for modules. In this case, 'cors' might not have its own types, but you can install the types from DefinitelyTyped:
```sh
npm install @types/cors --save-dev
 ```

3.**Begin running the server**:
```sh
nodemon index.ts
 ```



## Client Setup

To run the client, navigate to the “frontend” directory and follow these steps:

1. **Install TypeScript as a development dependency**:
   ```sh
   npm install typescript --save-dev
```

2. **Begin running the client**:
     ```sh
     nodemon index.ts
     ```
 - Access the web application:
     Navigate to localhost:3000 in your web browser.
