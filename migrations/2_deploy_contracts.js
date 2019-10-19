var Election = artifacts.require("./Election.sol");//name of the contract
//this is contract abstraction i.e is specific to truffle and th
module.exports = function(deployer) {
  deployer.deploy(Election);//we are deploying it
};
