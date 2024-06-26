import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

async function sleep<T = any>(ms: number): Promise<T> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  try {
    /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.provider.getBalance(deployer.address);
    console.log("Deploying the contracts with the account:", await deployer.getAddress());
    console.log("Account balance:", accountBalance.toString());
    const nftMarketplaceContract = await hre.deployments.deploy("FakeNFTMarketplace", {
      from: deployer.address,
    });
    console.log(`contract deployed${"nftMarketplaceContract"} with address: ${nftMarketplaceContract.address}`);
    const cryptoDevsNFTContract = await hre.deployments.deploy("CryptoDevsNFT", {
      from: deployer.address,
      args: [process.env.IPFS_METADATA_CID],
    });
    console.log(`contract deployed${"CryptoDevsNFT"} with address: ${cryptoDevsNFTContract.address}`);
    const CryptoDevsDaoContract = await hre.deployments.deploy("CryptoDevsDao", {
      from: deployer.address,
      args: [nftMarketplaceContract.address, cryptoDevsNFTContract.address],
    });
    console.log(`contract deployed${"CryptoDevsDao"} with address: ${CryptoDevsDaoContract.address}`);

    const randomWinnerGameContract = await hre.deployments.deploy("RandomWinnerGame", {
      from: deployer.address,
      args: [process.env.COORDINATOR, process.env.SUBSCRIBTION_ID, process.env.KEY_HASH],
    });
    console.log(`contract deployed${"RandomWinnerGame"} with address: ${randomWinnerGameContract.address}`);

    await sleep(30 * 1000);

    // https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify#using-programmatically

    `graph init --contract-name RandomWinnerGame --studio dev --from-contract 0xD5B2b1051FB624469CEBc818a19d030063269733  --abi /Users/lamtim/repos/dao-example/packages/abis/RandomWinnerGame.json --network sepolia`;
    await Promise.allSettled([
      hre.run("verify:verify", {
        address: nftMarketplaceContract.address,
      }),

      hre.run("verify:verify", {
        address: cryptoDevsNFTContract.address,
      }),
      hre.run("verify:verify", {
        address: CryptoDevsDaoContract.address,
        constructorArguments: [nftMarketplaceContract.address, cryptoDevsNFTContract.address],
      }),
      hre.run("verify:verify", {
        address: randomWinnerGameContract.address,
        constructorArguments: [process.env.COORDINATOR, process.env.SUBSCRIBTION_ID, process.env.KEY_HASH],
      }),
    ]);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
    }
    throw err;
  }
};

export default deployContracts;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployContracts.tags = ["deployAllContracts"];
