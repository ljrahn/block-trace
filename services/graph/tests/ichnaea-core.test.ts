import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { ProductCreated } from "../generated/schema"
import { ProductCreated as ProductCreatedEvent } from "../generated/IchnaeaCore/IchnaeaCore"
import { handleProductCreated } from "../src/ichnaea-core"
import { createProductCreatedEvent } from "./ichnaea-core-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let productId = BigInt.fromI32(234)
    let productName = "Example string value"
    let productWeight = "Example string value"
    let ipfsDocumentUrl = "Example string value"
    let companyName = ["Example string value"]
    let location = ["Example string value"]
    let travelMethod = ["Example string value"]
    let signer = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let newProductCreatedEvent = createProductCreatedEvent(
      productId,
      productName,
      productWeight,
      ipfsDocumentUrl,
      companyName,
      location,
      travelMethod,
      signer
    )
    handleProductCreated(newProductCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProductCreated created and stored", () => {
    assert.entityCount("ProductCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "productId",
      "234"
    )
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "productName",
      "Example string value"
    )
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "productWeight",
      "Example string value"
    )
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ipfsDocumentUrl",
      "Example string value"
    )
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "companyName",
      "[Example string value]"
    )
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "location",
      "[Example string value]"
    )
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "travelMethod",
      "[Example string value]"
    )
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "signer",
      "[0x0000000000000000000000000000000000000001]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
