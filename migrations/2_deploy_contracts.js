var ProofOfExistence = artifacts.require("./ProofOfExistence.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ProofOfExistence);
};

