require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
   networks: {
    localhost: {
      url: 'http://localhost:7545',
      accounts: [process.env.PRIVATEKEY]
    },
    mumbai: {
      url: 'https://matic-mumbai.chainstacklabs.com',
      accounts: [process.env.PRIVATEKEY]
    },
    rinkeby: {
      url: process.env.URL,
      accounts: [process.env.PRIVATEKEY]
    }
  },
};
