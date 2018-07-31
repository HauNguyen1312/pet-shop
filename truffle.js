
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "unaware sustain plastic ensure pretty erosion still sketch success warrior gravity airport";

  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
//     }
//   }
// };

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/6513f667810a49ee9ca217978d325407")
      },
      network_id: 3,
      // gas: 400000,
      // gasPrice: 22000000000
    }   
  }
};
