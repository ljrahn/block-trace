import {
  ProductCreated as ProductCreatedEvent,
  UpdateInstance as UpdateInstanceEvent
} from "../generated/IchnaeaCore/IchnaeaCore"
import { ProductCreated, UpdateInstance } from "../generated/schema"

export function handleProductCreated(event: ProductCreatedEvent): void {
  let entity = new ProductCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.productId = event.params.productId
  entity.productName = event.params.productName
  entity.productWeight = event.params.productWeight
  entity.ipfsDocumentUrl = event.params.ipfsDocumentUrl
  entity.companyName = event.params.companyName
  entity.location = event.params.location
  entity.travelMethod = event.params.travelMethod
  entity.signer = event.params.signer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateInstance(event: UpdateInstanceEvent): void {
  let entity = new UpdateInstance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.instanceId = event.params.instanceId
  entity.productId = event.params.productId
  entity.timeStamp = event.params.timeStamp
  entity.signedOff = event.params.signedOff

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
