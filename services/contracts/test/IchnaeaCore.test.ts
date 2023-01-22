import { assert, expect } from "chai"
import { network, deployments, ethers } from "hardhat"
import { IchnaeaCore } from "../typechain-types"
import { developmentChains, networkConfig } from "../helper-hardhat-config"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { moveTime } from "../utils/move-network"
import { ZERO_ADDRESS } from "../utils/constants"

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Fund Me Contract Unit Test Suite", async function () {
      let IchnaeaCore: IchnaeaCore,
        deployer: SignerWithAddress,
        company1: SignerWithAddress,
        company2: SignerWithAddress,
        company3: SignerWithAddress,
        company4: SignerWithAddress

      beforeEach(async () => {
        ;[deployer, company1, company2, company3, company4] =
          await ethers.getSigners()
        await deployments.fixture(["main"])
        IchnaeaCore = await ethers.getContract("IchnaeaCore")
      })

      describe("createProduct()", async () => {
        it("Successfully create product", async () => {
          const product = {
            productName: "cream cheese",
            productWeight: "57",
            ipfsDocumentUrl: "ipfs://asd",
          }

          const supplyChain = [
            {
              companyName: "Lucas inc.",
              location: "ontario",
              travelMethod: "plane",
              signer: company1.address,
            },
          ]

          await expect(
            IchnaeaCore.connect(company1).createProduct(product, supplyChain)
          )
            .to.emit(IchnaeaCore, "ProductCreated")
            .withArgs(
              0,
              product.productName,
              product.productWeight,
              product.ipfsDocumentUrl,
              ["Lucas inc."],
              ["ontario"],
              ["plane"],
              [company1.address]
            )
        })
      })
    })

// // should revert if not enough ether is sent to create the transaction
// await expect(
//   fundMeContract
//     .connect(receiver)
//     .createTransaction(
//       milestoneAmountUnlockable,
//       arbitratorExtraData,
//       RECEIVER_WITHDRAW_TIMEOUT,
//       erc20Contract.address,
//       metaEvidenceUri,
//       {
//         value: CREATE_TRANSACTION_FEE.sub(
//           ethers.utils.parseEther("0.0001")
//         ),
//       }
//     )
// ).to.be.revertedWith("FundMe__PaymentTooSmall")
