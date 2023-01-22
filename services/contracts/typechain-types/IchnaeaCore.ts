/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IchnaeaCore {
  export type ProductStruct = {
    productName: PromiseOrValue<string>;
    productWeight: PromiseOrValue<string>;
    ipfsDocumentUrl: PromiseOrValue<string>;
  };

  export type ProductStructOutput = [string, string, string] & {
    productName: string;
    productWeight: string;
    ipfsDocumentUrl: string;
  };

  export type ProductVerifierDetailsStruct = {
    companyName: PromiseOrValue<string>;
    location: PromiseOrValue<string>;
    travelMethod: PromiseOrValue<string>;
    signer: PromiseOrValue<string>;
  };

  export type ProductVerifierDetailsStructOutput = [
    string,
    string,
    string,
    string
  ] & {
    companyName: string;
    location: string;
    travelMethod: string;
    signer: string;
  };
}

export interface IchnaeaCoreInterface extends utils.Interface {
  functions: {
    "createProduct((string,string,string),(string,string,string,address)[])": FunctionFragment;
    "instanceIdToInstanceVerifierSupplyChain(bytes32,uint256)": FunctionFragment;
    "instanceIdToProductId(bytes32)": FunctionFragment;
    "instantiateProductInstance(bytes32,uint32)": FunctionFragment;
    "productIdCounter()": FunctionFragment;
    "productIdToProduct(uint32)": FunctionFragment;
    "productIdToProductVerifierSupplyChain(uint32,uint256)": FunctionFragment;
    "verifyInstance(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createProduct"
      | "instanceIdToInstanceVerifierSupplyChain"
      | "instanceIdToProductId"
      | "instantiateProductInstance"
      | "productIdCounter"
      | "productIdToProduct"
      | "productIdToProductVerifierSupplyChain"
      | "verifyInstance"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createProduct",
    values: [
      IchnaeaCore.ProductStruct,
      IchnaeaCore.ProductVerifierDetailsStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "instanceIdToInstanceVerifierSupplyChain",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "instanceIdToProductId",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "instantiateProductInstance",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "productIdCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "productIdToProduct",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "productIdToProductVerifierSupplyChain",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyInstance",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instanceIdToInstanceVerifierSupplyChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instanceIdToProductId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instantiateProductInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productIdCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productIdToProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productIdToProductVerifierSupplyChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyInstance",
    data: BytesLike
  ): Result;

  events: {
    "ProductCreated(uint32,string,string,string,string[],string[],string[],address[])": EventFragment;
    "UpdateInstance(bytes32,uint32,uint64[],bool[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProductCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateInstance"): EventFragment;
}

export interface ProductCreatedEventObject {
  productId: number;
  productName: string;
  productWeight: string;
  ipfsDocumentUrl: string;
  companyName: string[];
  location: string[];
  travelMethod: string[];
  signer: string[];
}
export type ProductCreatedEvent = TypedEvent<
  [number, string, string, string, string[], string[], string[], string[]],
  ProductCreatedEventObject
>;

export type ProductCreatedEventFilter = TypedEventFilter<ProductCreatedEvent>;

export interface UpdateInstanceEventObject {
  instanceId: string;
  productId: number;
  timeStamp: BigNumber[];
  signedOff: boolean[];
}
export type UpdateInstanceEvent = TypedEvent<
  [string, number, BigNumber[], boolean[]],
  UpdateInstanceEventObject
>;

export type UpdateInstanceEventFilter = TypedEventFilter<UpdateInstanceEvent>;

export interface IchnaeaCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IchnaeaCoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createProduct(
      _product: IchnaeaCore.ProductStruct,
      _supplyChainRoute: IchnaeaCore.ProductVerifierDetailsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    instanceIdToInstanceVerifierSupplyChain(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { timeStamp: BigNumber; signedOff: boolean }
    >;

    instanceIdToProductId(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    instantiateProductInstance(
      _instanceId: PromiseOrValue<BytesLike>,
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    productIdCounter(overrides?: CallOverrides): Promise<[number]>;

    productIdToProduct(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        productName: string;
        productWeight: string;
        ipfsDocumentUrl: string;
      }
    >;

    productIdToProductVerifierSupplyChain(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        companyName: string;
        location: string;
        travelMethod: string;
        signer: string;
      }
    >;

    verifyInstance(
      _instanceId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createProduct(
    _product: IchnaeaCore.ProductStruct,
    _supplyChainRoute: IchnaeaCore.ProductVerifierDetailsStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  instanceIdToInstanceVerifierSupplyChain(
    arg0: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean] & { timeStamp: BigNumber; signedOff: boolean }
  >;

  instanceIdToProductId(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  instantiateProductInstance(
    _instanceId: PromiseOrValue<BytesLike>,
    _productId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  productIdCounter(overrides?: CallOverrides): Promise<number>;

  productIdToProduct(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      productName: string;
      productWeight: string;
      ipfsDocumentUrl: string;
    }
  >;

  productIdToProductVerifierSupplyChain(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      companyName: string;
      location: string;
      travelMethod: string;
      signer: string;
    }
  >;

  verifyInstance(
    _instanceId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createProduct(
      _product: IchnaeaCore.ProductStruct,
      _supplyChainRoute: IchnaeaCore.ProductVerifierDetailsStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    instanceIdToInstanceVerifierSupplyChain(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { timeStamp: BigNumber; signedOff: boolean }
    >;

    instanceIdToProductId(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    instantiateProductInstance(
      _instanceId: PromiseOrValue<BytesLike>,
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    productIdCounter(overrides?: CallOverrides): Promise<number>;

    productIdToProduct(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        productName: string;
        productWeight: string;
        ipfsDocumentUrl: string;
      }
    >;

    productIdToProductVerifierSupplyChain(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        companyName: string;
        location: string;
        travelMethod: string;
        signer: string;
      }
    >;

    verifyInstance(
      _instanceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ProductCreated(uint32,string,string,string,string[],string[],string[],address[])"(
      productId?: PromiseOrValue<BigNumberish> | null,
      productName?: PromiseOrValue<string> | null,
      productWeight?: null,
      ipfsDocumentUrl?: null,
      companyName?: null,
      location?: null,
      travelMethod?: null,
      signer?: null
    ): ProductCreatedEventFilter;
    ProductCreated(
      productId?: PromiseOrValue<BigNumberish> | null,
      productName?: PromiseOrValue<string> | null,
      productWeight?: null,
      ipfsDocumentUrl?: null,
      companyName?: null,
      location?: null,
      travelMethod?: null,
      signer?: null
    ): ProductCreatedEventFilter;

    "UpdateInstance(bytes32,uint32,uint64[],bool[])"(
      instanceId?: PromiseOrValue<BytesLike> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      timeStamp?: null,
      signedOff?: null
    ): UpdateInstanceEventFilter;
    UpdateInstance(
      instanceId?: PromiseOrValue<BytesLike> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      timeStamp?: null,
      signedOff?: null
    ): UpdateInstanceEventFilter;
  };

  estimateGas: {
    createProduct(
      _product: IchnaeaCore.ProductStruct,
      _supplyChainRoute: IchnaeaCore.ProductVerifierDetailsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    instanceIdToInstanceVerifierSupplyChain(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    instanceIdToProductId(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    instantiateProductInstance(
      _instanceId: PromiseOrValue<BytesLike>,
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    productIdCounter(overrides?: CallOverrides): Promise<BigNumber>;

    productIdToProduct(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    productIdToProductVerifierSupplyChain(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyInstance(
      _instanceId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createProduct(
      _product: IchnaeaCore.ProductStruct,
      _supplyChainRoute: IchnaeaCore.ProductVerifierDetailsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    instanceIdToInstanceVerifierSupplyChain(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    instanceIdToProductId(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    instantiateProductInstance(
      _instanceId: PromiseOrValue<BytesLike>,
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    productIdCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    productIdToProduct(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    productIdToProductVerifierSupplyChain(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyInstance(
      _instanceId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}