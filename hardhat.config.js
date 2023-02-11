require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "r5kZB1cH0NvUC7mFmYiqSV--foCrC-TQ";

const GOERLI_PRIVATE_KEY = "69c3c294c026d1c80bfb9e418e50cf0ecb1f714d85bc8304d26dd024fdc5ccbe";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};

