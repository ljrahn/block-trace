import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ProductCreated,
  UpdateInstance
} from "../generated/IchnaeaCore/IchnaeaCore"

export function createProductCreatedEvent(
  productId: BigInt,
  productName: string,
  productWeight: string,
  ipfsDocumentUrl: string,
  companyName: Array<string>,
  location: Array<string>,
  travelMethod: Array<string>,
  signer: Array<Address>
): ProductCreated {
  let productCreatedEvent = changetype<ProductCreated>(newMockEvent())

  productCreatedEvent.parameters = new Array()

  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "productName",
      ethereum.Value.fromString(productName)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "productWeight",
      ethereum.Value.fromString(productWeight)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ipfsDocumentUrl",
      ethereum.Value.fromString(ipfsDocumentUrl)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "companyName",
      ethereum.Value.fromStringArray(companyName)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "location",
      ethereum.Value.fromStringArray(location)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "travelMethod",
      ethereum.Value.fromStringArray(travelMethod)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddressArray(signer))
  )

  return productCreatedEvent
}

export function createUpdateInstanceEvent(
  instanceId: Bytes,
  productId: BigInt,
  timeStamp: Array<BigInt>,
  signedOff: Array<boolean>
): UpdateInstance {
  let updateInstanceEvent = changetype<UpdateInstance>(newMockEvent())

  updateInstanceEvent.parameters = new Array()

  updateInstanceEvent.parameters.push(
    new ethereum.EventParam(
      "instanceId",
      ethereum.Value.fromFixedBytes(instanceId)
    )
  )
  updateInstanceEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )
  updateInstanceEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigIntArray(timeStamp)
    )
  )
  updateInstanceEvent.parameters.push(
    new ethereum.EventParam(
      "signedOff",
      ethereum.Value.fromBooleanArray(signedOff)
    )
  )

  return updateInstanceEvent
}
