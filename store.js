const contract = require('./blockchain');
require('dotenv').config();

/**
 * Salva un JSON on-chain
 */
async function recordDelivery(id, result, riderId) {
  const tx = await contract.recordDelivery(
    id.toString(),
    result.toString(),
    riderId.toString()
  );
  await tx.wait();
  console.log('JSON salvato on-chain.');
}

/**
 * Recupera tutti i JSON salvati
 */
async function fetchAllDeliveries() {
  const count = await contract.getAllDeliveriesCount();
  console.log(`Consegne salvate: ${count.toString()}`);

  for (let i = 0; i < count; i++) {
    const [id, result, riderId] = await contract.getDelivery(i);
    console.log(`\n#${i}`);
    console.log(`  id:        ${id}`);
    console.log(`  result:    ${result}`);
    console.log(`  rider_id:  ${riderId}`);
  }
}

if (require.main === module) {
  const [,, cmd, ...args] = process.argv;

  if (cmd === 'save') {
    const [id, result, riderId] = args;
    if (!id || !result || !riderId) {
      console.error('Usage: node store.js save <id> <result> <rider_id>');
      process.exit(1);
    }
    recordDelivery(id, result, riderId);
  } else if (cmd === 'list') {
    fetchAllDeliveries();
  } else {
    console.log('Usage:');
    console.log('  node store.js save <id> <result> <rider_id>');
    console.log('  node store.js list');
  }
}

module.exports = { recordDelivery, fetchAllDeliveries };
