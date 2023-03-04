const hre = require("hardhat");

async function main() {
  console.log("OK");
  const MartianMunchies = await hre.ethers.getContractFactory(
    "MartianMunchies"
  );
  const martianMunchies = await MartianMunchies.deploy();
  await martianMunchies.deployed();

  console.log(`Contract deployed at ${martianMunchies.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
