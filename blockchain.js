require('dotenv').config();
const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

// Imposta provider e wallet
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet   = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Carica ABI e crea istanza del contratto DeliveryStorage
const contractAddress = process.env.CONTRACT_ADDRESS;
const abiPath = path.join(
  __dirname,
  'artifacts/contracts/DeliveryStorage.sol/DeliveryStorage.json'
);
const fullJson = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
const abi      = fullJson.abi;

const contract = new ethers.Contract(contractAddress, abi, wallet);

module.exports = contract;
