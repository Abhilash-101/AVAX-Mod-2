
# **AVALANCHE INTERMEDIATE MODULE 2**

## **Project Title: Solidity Smart Contract for School Grading **

### **Smart Contract Interface**



### **Description**
The `SchoolGradingSystem` Solidity smart contract is designed to securely manage balances for a single owner. It allows the owner to deposit, withdraw, and send Ether, with built-in checks and logging for each transaction. This project serves as an excellent example for those looking to understand the basics of smart contract development on the Ethereum blockchain.

### **Overview**


## **Getting Started**

Follow these steps to set up and run the contract on your local machine:

### **Installing**

1. **Clone the GitHub repository to your local machine:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repo
   ```

3. **Install the project dependencies:**

   ```bash
   npm install
   ```

### **Executing Program**

1. **Open two additional terminals in your VS Code.**

2. **In the second terminal, start a local Ethereum node using Hardhat:**

   ```bash
   npx hardhat node
   ```

3. **In the third terminal, deploy the smart contract to the local network:**

   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```

4. **In the first terminal, launch the front-end (if applicable):**

   ```bash
   npm run dev
   ```

5. **Access the project in your web browser at [http://localhost:3000/](http://localhost:3000/).**

### **Project Structure**

- **`contracts/`**: Contains the Solidity smart contract file `Assessment.sol`.
- **`artifacts/`**: Stores compiled contract artifacts.
- **`scripts/`**: Includes scripts for deploying contracts.
- **`frontend/`**: (If applicable) Holds the front-end code for interacting with the contract.
- **`hardhat.config.js`**: Hardhat configuration file.
- **`package.json`**: Project configuration and dependencies.
- **`README.md`**: Project documentation.

### **Author**

Abhilash-101



