// https://eth-rinkeby.alchemyapi.io/v2/nyUR-1W8r7BSNcL2fpgL5nIP5IFsP2yo
require('@nomiclabs/hardhat-waffle');
module.exports={
  solidity:'0.8.0',
  networks:{
    rinkeby:{
     url:'https:eth-rinkeby.alchemyapi.io/v2/nyUR-1W8r7BSNcL2fpgL5nIP5IFsP2yo',
     accounts:["9894f61225dc14b36480e33f71043abd3d44d065851251bdb0c9a34c111c4df3"]
    }
    
  }

}