/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('@nomiclabs/hardhat-ethers');

 // hardhat.config.js
 const { alchemyAPIKey, mnemonic } = require('./secrets.json');

  module.exports = {
    defaultNetwork: "rinkeby", 
    networks: {
     rinkeby: {
       url: `https://eth-rinkeby.alchemyapi.io/v2/fHBjmpe7safRhMwp7fmsNyYGgWc4F5eK`,
       accounts: { 
       mnemonic: "annual rare safe pretty polar glue increase olympic stick special creek they" },
     },
   },
   solidity: {
     version: "0.8.4",
   }

};

