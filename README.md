**Deploy del contratto su Sepolia**

# 0 Dipendenze e compilazione
npm install
npx hardhat compile

DeliveryStorage.json, salvato in artifacts/contracts, conitenie l'abi e il bin

# Usa cat artifacts/contracts/DeliveryStorage.sol/DeliveryStorage.json | jq .abi > DeliveryStorage.abi per estrarre l'abi

# Usa cat artifacts/contracts/DeliveryStorage.sol/DeliveryStorage.json | jq -r .bytecode > DeliveryStorage.bin per estrarre il bin
# 1
npx hardhat run scripts/deploy.js --network sepolia

# 2
Si ricevera un nuovo contract address, modificalo nell' .env
nano .env

# 3
node store.js save "6957de2166" "DELIVERED" "694fef0a57"

# 4
Attendere il messaggio JSON salvato on-chain

# Test di lettura 
node store.js list

**Verifica su sepolia**

# 1 Andare su https://sepolia.etherscan.io/

# 2 Inserire il contract address e cercare

# 3 Cliccare su Transaction Hash per vedere i dettagli


**Ogni volta che si modifica il contratto bisogna fare il deploy, estrarre abi e bin e aggiornare lo smart contract**