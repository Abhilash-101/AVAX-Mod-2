
# **AVALANCHE INTERMEDIATE MODULE 2**

## Project Title: Simple Server Store to buy Resources 

### **Smart Contract Interface**



### **Description**
![image0](https://github.com/user-attachments/assets/06df1ada-4946-47a2-bd0e-fd5cd3f47726)
This is a Smart Contract Management in Solidity called Store with React as a front end for Metacrafters Assessment Module 2. It employs a preloaded account for the purpose of function testing. The platform is designed to operate as a Server Store, enabling users to conduct deposits utilizing ETH. Users are afforded the capability to specify any amount they wish to deposit within their designated tab and are also able to monitor their current tab balance. Furthermore, users will have the opportunity to acquire various categories of resources, each with distinct pricing structures. As users engage in the procurement of resources, their accrued point level will correspondingly elevate. They will have the ability to continuously track their point level throughout the entirety of their sessions.

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

5. **Access the front-end of the project in your web browser at [http://localhost:3000/](http://localhost:3000/).**

6. **Go to the second terminal, when you ran `npx hardhat node`, you will be given 20 different accounts. Use the first account and link it with you metamask wallet using the given private key.**

7. **Once you linked the account given to your metamask wallet, you may now be able to use the coins inside to see how the bank works.
Input the desired number and click on Deposit or Withdraw to see the changes to your current balance.**

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



