# DeliveryStorage - Blockchain Tracking Module

Questo repository contiene lo Smart Contract e gli script necessari per gestire la tracciabilità delle consegne su blockchain Ethereum (rete Sepolia). Il progetto utilizza Hardhat come ambiente di sviluppo.

## Struttura del Progetto

.
├── contracts/
│   └── DeliveryStorage.sol  # Smart Contract (Solidity)
├── scripts/
│   └── deploy.js            # Script di deployment su Sepolia
├── blockchain.js            # Modulo di interfaccia blockchain
├── store.js                 # CLI per salvare/leggere dati on-chain
├── hardhat.config.js        # Configurazione Hardhat
└── package.json             # Dipendenze Node.js

## Prerequisiti

* Node.js (versione 16 o superiore)
* jq (necessario per l'estrazione di ABI e Bytecode)

## Installazione

1. Installare le dipendenze del progetto:
   npm install

2. Creare un file .env nella root del progetto e configurare le seguenti variabili:
   SEPOLIA_URL="https://eth-sepolia.g.alchemy.com/v2/TUO_API_KEY"
   PRIVATE_KEY="TUA_CHIAVE_PRIVATA"
   CONTRACT_ADDRESS=""

## Compilazione e Deployment

Ogni volta che si modifica il contratto, seguire questa procedura in ordine:

1. Compilazione
   npx hardhat compile

2. Estrazione ABI e Bytecode
   Eseguire i seguenti comandi per generare i file necessari al client:

   cat artifacts/contracts/DeliveryStorage.sol/DeliveryStorage.json | jq .abi > DeliveryStorage.abi
   cat artifacts/contracts/DeliveryStorage.sol/DeliveryStorage.json | jq -r .bytecode > DeliveryStorage.bin

3. Deploy su Sepolia
   npx hardhat run scripts/deploy.js --network sepolia

   Dopo il deploy, copiare il nuovo indirizzo del contratto stampato a video e aggiornare la variabile CONTRACT_ADDRESS nel file .env.

## Utilizzo

Utilizzare lo script store.js per interagire con la blockchain.

Salvare una consegna (Write)
Sintassi: node store.js save "ID_PACCO" "STATO" "TIMESTAMP/ID_UTENTE"

Esempio:
node store.js save "6957de2166" "DELIVERED" "694fef0a57"

Attendere il messaggio di conferma JSON salvato on-chain.

Leggere le consegne (Read)
Per visualizzare i dati salvati:
node store.js list

## Verifica su Etherscan

Per verificare le transazioni pubblicamente:
1. Andare su https://sepolia.etherscan.io/
2. Inserire il Contract Address nella barra di ricerca.
3. Cliccare su Transaction Hash per vedere i dettagli dell'operazione.