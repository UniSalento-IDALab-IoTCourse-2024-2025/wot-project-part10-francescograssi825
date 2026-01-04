async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying con account:', deployer.address);

  const Factory = await ethers.getContractFactory('DeliveryStorage');
  const contract = await Factory.deploy();
  await contract.waitForDeployment();

  console.log('Contract Address:', contract.target);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
