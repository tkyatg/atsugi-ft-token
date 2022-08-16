const { ethers } = require("hardhat");

async function main() {
  // deploy
  const Contract = await ethers.getContractFactory("AtsugibleToken");
  const contract = await Contract.deploy();

  console.log("contract deployed to:", contract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
