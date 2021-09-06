const MasterChef = artifacts.require("MasterChef.sol");
const BicornLocker = artifacts.require("BicornLocker.sol");
const BicornReferral = artifacts.require("BicornReferral.sol");
const BicornToken = artifacts.require("BicornToken.sol");
const BicornVoteProxy = artifacts.require("BicornVoteProxy.sol");

module.exports = async function (deployer, network, addresses) {
    await deployer.deploy(BicornLocker);
    const locker = await BicornLocker.deployed();
    await deployer.deploy(BicornReferral);
    const referral = await BicornReferral.deployed();
    await deployer.deploy(BicornToken);
    const token = await BicornToken.deployed();
    await deployer.deploy(BicornVoteProxy);
    const voteProxy = await BicornVoteProxy.deployed();
    await deployer.deploy(MasterChef, token.address, 0, 10);
    const masterChef = await MasterChef.deployed();
}