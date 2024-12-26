require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  networks: {
    polygonAmoy: {
      url: process.env.rpc_url,
      accounts: [process.env.priv_key],
    }
  },
  etherscan: {
    apiKey: {
      polygonAmoy: process.env.ok_api_key,
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/amoy",
        }
      }
    ]
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}

