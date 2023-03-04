require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    polygontest: {
      url: `https://rpc-mumbai.maticvigil.com`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
};
