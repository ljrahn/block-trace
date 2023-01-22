/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { IchnaeaCore, IchnaeaCoreInterface } from "../IchnaeaCore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productWeight",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsDocumentUrl",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "companyName",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "location",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "travelMethod",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "signer",
        type: "address[]",
      },
    ],
    name: "ProductCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "timeStamp",
        type: "uint64[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "signedOff",
        type: "bool[]",
      },
    ],
    name: "UpdateInstance",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "string",
            name: "productWeight",
            type: "string",
          },
          {
            internalType: "string",
            name: "ipfsDocumentUrl",
            type: "string",
          },
        ],
        internalType: "struct IchnaeaCore.Product",
        name: "_product",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "companyName",
            type: "string",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "string",
            name: "travelMethod",
            type: "string",
          },
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
        ],
        internalType: "struct IchnaeaCore.ProductVerifierDetails[]",
        name: "_supplyChainRoute",
        type: "tuple[]",
      },
    ],
    name: "createProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "instanceIdToInstanceVerifierSupplyChain",
    outputs: [
      {
        internalType: "uint64",
        name: "timeStamp",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "signedOff",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "instanceIdToProductId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_instanceId",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "_productId",
        type: "uint32",
      },
    ],
    name: "instantiateProductInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "productIdCounter",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "productIdToProduct",
    outputs: [
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "string",
        name: "productWeight",
        type: "string",
      },
      {
        internalType: "string",
        name: "ipfsDocumentUrl",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "productIdToProductVerifierSupplyChain",
    outputs: [
      {
        internalType: "string",
        name: "companyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "travelMethod",
        type: "string",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_instanceId",
        type: "bytes32",
      },
    ],
    name: "verifyInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0604052601460ff1660809060ff1681525034801561001e57600080fd5b50608051612d4b61003a60003960006101c70152612d4b6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634c065fbd1161005b5780634c065fbd146101155780634fdce8bf146101315780639a64f04b14610162578063eb120df91461019557610088565b8063107899621461008d5780631bb33c6d146100a9578063342ae8c6146100db578063420627af146100f9575b600080fd5b6100a760048036038101906100a29190611ef4565b6101c5565b005b6100c360048036038101906100be9190611fa8565b61077f565b6040516100d29392919061205d565b60405180910390f35b6100e3610941565b6040516100f091906120b8565b60405180910390f35b610113600480360381019061010e9190612109565b610957565b005b61012f600480360381019061012a9190612136565b61105a565b005b61014b600480360381019061014691906121ac565b61179f565b60405161015992919061222a565b60405180910390f35b61017c60048036038101906101779190612253565b6117fd565b60405161018c94939291906122a2565b60405180910390f35b6101af60048036038101906101aa9190612109565b611a02565b6040516101bc91906120b8565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000060ff168151111561022c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022390612394565b60405180910390fd5b600181511015610271576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102689061244c565b60405180910390fd5b8160026000600160009054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200190815260200160002060008201518160000190805190602001906102bf929190611a25565b5060208201518160010190805190602001906102dc929190611a25565b5060408201518160020190805190602001906102f9929190611a25565b509050506000815167ffffffffffffffff81111561031a57610319611af2565b5b60405190808252806020026020018201604052801561034d57816020015b60608152602001906001900390816103385790505b5090506000825167ffffffffffffffff81111561036d5761036c611af2565b5b6040519080825280602002602001820160405280156103a057816020015b606081526020019060019003908161038b5790505b5090506000835167ffffffffffffffff8111156103c0576103bf611af2565b5b6040519080825280602002602001820160405280156103f357816020015b60608152602001906001900390816103de5790505b5090506000845167ffffffffffffffff81111561041357610412611af2565b5b6040519080825280602002602001820160405280156104415781602001602082028036833780820191505090505b50905060005b85518160ff1610156106b95760036000600160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001908152602001600020868260ff168151811061049a5761049961246c565b5b6020026020010151908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000190805190602001906104e7929190611a25565b506020820151816001019080519060200190610504929190611a25565b506040820151816002019080519060200190610521929190611a25565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050858160ff16815181106105815761058061246c565b5b602002602001015160000151858260ff16815181106105a3576105a261246c565b5b6020026020010181905250858160ff16815181106105c4576105c361246c565b5b602002602001015160200151848260ff16815181106105e6576105e561246c565b5b6020026020010181905250858160ff16815181106106075761060661246c565b5b602002602001015160400151838260ff16815181106106295761062861246c565b5b6020026020010181905250858160ff168151811061064a5761064961246c565b5b602002602001015160600151828260ff168151811061066c5761066b61246c565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080806106b1906124d7565b915050610447565b5085600001516040516106cc919061253c565b6040518091039020600160009054906101000a900463ffffffff1663ffffffff167f59b517b3a398dd3526a6a225dd84eb5720dccc0cf9b266558d2740755d6318de886020015189604001518888888860405161072e9695949392919061271d565b60405180910390a36001600081819054906101000a900463ffffffff1680929190610758906127a8565b91906101000a81548163ffffffff021916908363ffffffff16021790555050505050505050565b60026020528060005260406000206000915090508060000180546107a290612803565b80601f01602080910402602001604051908101604052809291908181526020018280546107ce90612803565b801561081b5780601f106107f05761010080835404028352916020019161081b565b820191906000526020600020905b8154815290600101906020018083116107fe57829003601f168201915b50505050509080600101805461083090612803565b80601f016020809104026020016040519081016040528092919081815260200182805461085c90612803565b80156108a95780601f1061087e576101008083540402835291602001916108a9565b820191906000526020600020905b81548152906001019060200180831161088c57829003601f168201915b5050505050908060020180546108be90612803565b80601f01602080910402602001604051908101604052809291908181526020018280546108ea90612803565b80156109375780601f1061090c57610100808354040283529160200191610937565b820191906000526020600020905b81548152906001019060200180831161091a57829003601f168201915b5050505050905083565b600160009054906101000a900463ffffffff1681565b600080600083815260200190815260200160002060009054906101000a900463ffffffff16905060006004600084815260200190815260200160002080549050116109d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ce906128a6565b60405180910390fd5b6000600360008363ffffffff1663ffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610c565783829060005260206000209060040201604051806080016040529081600082018054610a4b90612803565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7790612803565b8015610ac45780601f10610a9957610100808354040283529160200191610ac4565b820191906000526020600020905b815481529060010190602001808311610aa757829003601f168201915b50505050508152602001600182018054610add90612803565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0990612803565b8015610b565780601f10610b2b57610100808354040283529160200191610b56565b820191906000526020600020905b815481529060010190602001808311610b3957829003601f168201915b50505050508152602001600282018054610b6f90612803565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9b90612803565b8015610be85780601f10610bbd57610100808354040283529160200191610be8565b820191906000526020600020905b815481529060010190602001808311610bcb57829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190610a18565b5050505090506000815167ffffffffffffffff811115610c7957610c78611af2565b5b604051908082528060200260200182016040528015610ca75781602001602082028036833780820191505090505b5090506000825167ffffffffffffffff811115610cc757610cc6611af2565b5b604051908082528060200260200182016040528015610cf55781602001602082028036833780820191505090505b50905060005b83518160ff1610156110115760001515600460008881526020019081526020016000208260ff1681548110610d3357610d3261246c565b5b9060005260206000200160000160089054906101000a900460ff16151503610ef6573373ffffffffffffffffffffffffffffffffffffffff16848260ff1681518110610d8257610d8161246c565b5b60200260200101516060015173ffffffffffffffffffffffffffffffffffffffff1614610de4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddb90612912565b60405180910390fd5b6001600460008881526020019081526020016000208260ff1681548110610e0e57610e0d61246c565b5b9060005260206000200160000160086101000a81548160ff02191690831515021790555042600460008881526020019081526020016000208260ff1681548110610e5b57610e5a61246c565b5b9060005260206000200160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001828260ff1681518110610ea657610ea561246c565b5b60200260200101901515908115158152505042838260ff1681518110610ecf57610ece61246c565b5b602002602001019067ffffffffffffffff16908167ffffffffffffffff1681525050611011565b60011515600460008881526020019081526020016000208260ff1681548110610f2257610f2161246c565b5b9060005260206000200160000160089054906101000a900460ff161515148015610f5b575060018451610f559190612932565b8160ff16145b15610f9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f92906129d8565b60405180910390fd5b6001828260ff1681518110610fb357610fb261246c565b5b60200260200101901515908115158152505042838260ff1681518110610fdc57610fdb61246c565b5b602002602001019067ffffffffffffffff16908167ffffffffffffffff16815250508080611009906124d7565b915050610cfb565b508363ffffffff16857f6edd60784858fed557f6a2f1d8044bf210d97f98b0c49af5de72d13aa84ca776848460405161104b929190612b74565b60405180910390a35050505050565b6000600360008363ffffffff1663ffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156112d957838290600052602060002090600402016040518060800160405290816000820180546110ce90612803565b80601f01602080910402602001604051908101604052809291908181526020018280546110fa90612803565b80156111475780601f1061111c57610100808354040283529160200191611147565b820191906000526020600020905b81548152906001019060200180831161112a57829003601f168201915b5050505050815260200160018201805461116090612803565b80601f016020809104026020016040519081016040528092919081815260200182805461118c90612803565b80156111d95780601f106111ae576101008083540402835291602001916111d9565b820191906000526020600020905b8154815290600101906020018083116111bc57829003601f168201915b505050505081526020016002820180546111f290612803565b80601f016020809104026020016040519081016040528092919081815260200182805461121e90612803565b801561126b5780601f106112405761010080835404028352916020019161126b565b820191906000526020600020905b81548152906001019060200180831161124e57829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250508152602001906001019061109b565b50505050905060008263ffffffff16101580156113135750600160009054906101000a900463ffffffff1663ffffffff168263ffffffff16105b611352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134990612bf7565b60405180910390fd5b60006004600085815260200190815260200160002080549050146113ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a290612c63565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16816000815181106113d6576113d561246c565b5b60200260200101516060015173ffffffffffffffffffffffffffffffffffffffff1614611438576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142f90612cf5565b60405180910390fd5b8160008085815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff1602179055506000815167ffffffffffffffff81111561148657611485611af2565b5b6040519080825280602002602001820160405280156114b45781602001602082028036833780820191505090505b5090506000825167ffffffffffffffff8111156114d4576114d3611af2565b5b6040519080825280602002602001820160405280156115025781602001602082028036833780820191505090505b50905060005b83518160ff1610156117565760008160ff1603611632576004600087815260200190815260200160002060405180604001604052804267ffffffffffffffff168152602001600115158152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff02191690831515021790555050506001828260ff16815181106115e2576115e161246c565b5b60200260200101901515908115158152505042838260ff168151811061160b5761160a61246c565b5b602002602001019067ffffffffffffffff16908167ffffffffffffffff1681525050611743565b600460008781526020019081526020016000206040518060400160405280600067ffffffffffffffff168152602001600015158152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff02191690831515021790555050506000828260ff16815181106116f6576116f561246c565b5b6020026020010190151590811515815250506000838260ff16815181106117205761171f61246c565b5b602002602001019067ffffffffffffffff16908167ffffffffffffffff16815250505b808061174e906124d7565b915050611508565b508363ffffffff16857f6edd60784858fed557f6a2f1d8044bf210d97f98b0c49af5de72d13aa84ca7768484604051611790929190612b74565b60405180910390a35050505050565b600460205281600052604060002081815481106117bb57600080fd5b90600052602060002001600091509150508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900460ff16905082565b6003602052816000526040600020818154811061181957600080fd5b90600052602060002090600402016000915091505080600001805461183d90612803565b80601f016020809104026020016040519081016040528092919081815260200182805461186990612803565b80156118b65780601f1061188b576101008083540402835291602001916118b6565b820191906000526020600020905b81548152906001019060200180831161189957829003601f168201915b5050505050908060010180546118cb90612803565b80601f01602080910402602001604051908101604052809291908181526020018280546118f790612803565b80156119445780601f1061191957610100808354040283529160200191611944565b820191906000526020600020905b81548152906001019060200180831161192757829003601f168201915b50505050509080600201805461195990612803565b80601f016020809104026020016040519081016040528092919081815260200182805461198590612803565b80156119d25780601f106119a7576101008083540402835291602001916119d2565b820191906000526020600020905b8154815290600101906020018083116119b557829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905084565b60006020528060005260406000206000915054906101000a900463ffffffff1681565b828054611a3190612803565b90600052602060002090601f016020900481019282611a535760008555611a9a565b82601f10611a6c57805160ff1916838001178555611a9a565b82800160010185558215611a9a579182015b82811115611a99578251825591602001919060010190611a7e565b5b509050611aa79190611aab565b5090565b5b80821115611ac4576000816000905550600101611aac565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611b2a82611ae1565b810181811067ffffffffffffffff82111715611b4957611b48611af2565b5b80604052505050565b6000611b5c611ac8565b9050611b688282611b21565b919050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff821115611b9757611b96611af2565b5b611ba082611ae1565b9050602081019050919050565b82818337600083830152505050565b6000611bcf611bca84611b7c565b611b52565b905082815260208101848484011115611beb57611bea611b77565b5b611bf6848285611bad565b509392505050565b600082601f830112611c1357611c12611b72565b5b8135611c23848260208601611bbc565b91505092915050565b600060608284031215611c4257611c41611adc565b5b611c4c6060611b52565b9050600082013567ffffffffffffffff811115611c6c57611c6b611b6d565b5b611c7884828501611bfe565b600083015250602082013567ffffffffffffffff811115611c9c57611c9b611b6d565b5b611ca884828501611bfe565b602083015250604082013567ffffffffffffffff811115611ccc57611ccb611b6d565b5b611cd884828501611bfe565b60408301525092915050565b600067ffffffffffffffff821115611cff57611cfe611af2565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d4082611d15565b9050919050565b611d5081611d35565b8114611d5b57600080fd5b50565b600081359050611d6d81611d47565b92915050565b600060808284031215611d8957611d88611adc565b5b611d936080611b52565b9050600082013567ffffffffffffffff811115611db357611db2611b6d565b5b611dbf84828501611bfe565b600083015250602082013567ffffffffffffffff811115611de357611de2611b6d565b5b611def84828501611bfe565b602083015250604082013567ffffffffffffffff811115611e1357611e12611b6d565b5b611e1f84828501611bfe565b6040830152506060611e3384828501611d5e565b60608301525092915050565b6000611e52611e4d84611ce4565b611b52565b90508083825260208201905060208402830185811115611e7557611e74611d10565b5b835b81811015611ebc57803567ffffffffffffffff811115611e9a57611e99611b72565b5b808601611ea78982611d73565b85526020850194505050602081019050611e77565b5050509392505050565b600082601f830112611edb57611eda611b72565b5b8135611eeb848260208601611e3f565b91505092915050565b60008060408385031215611f0b57611f0a611ad2565b5b600083013567ffffffffffffffff811115611f2957611f28611ad7565b5b611f3585828601611c2c565b925050602083013567ffffffffffffffff811115611f5657611f55611ad7565b5b611f6285828601611ec6565b9150509250929050565b600063ffffffff82169050919050565b611f8581611f6c565b8114611f9057600080fd5b50565b600081359050611fa281611f7c565b92915050565b600060208284031215611fbe57611fbd611ad2565b5b6000611fcc84828501611f93565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561200f578082015181840152602081019050611ff4565b8381111561201e576000848401525b50505050565b600061202f82611fd5565b6120398185611fe0565b9350612049818560208601611ff1565b61205281611ae1565b840191505092915050565b600060608201905081810360008301526120778186612024565b9050818103602083015261208b8185612024565b9050818103604083015261209f8184612024565b9050949350505050565b6120b281611f6c565b82525050565b60006020820190506120cd60008301846120a9565b92915050565b6000819050919050565b6120e6816120d3565b81146120f157600080fd5b50565b600081359050612103816120dd565b92915050565b60006020828403121561211f5761211e611ad2565b5b600061212d848285016120f4565b91505092915050565b6000806040838503121561214d5761214c611ad2565b5b600061215b858286016120f4565b925050602061216c85828601611f93565b9150509250929050565b6000819050919050565b61218981612176565b811461219457600080fd5b50565b6000813590506121a681612180565b92915050565b600080604083850312156121c3576121c2611ad2565b5b60006121d1858286016120f4565b92505060206121e285828601612197565b9150509250929050565b600067ffffffffffffffff82169050919050565b612209816121ec565b82525050565b60008115159050919050565b6122248161220f565b82525050565b600060408201905061223f6000830185612200565b61224c602083018461221b565b9392505050565b6000806040838503121561226a57612269611ad2565b5b600061227885828601611f93565b925050602061228985828601612197565b9150509250929050565b61229c81611d35565b82525050565b600060808201905081810360008301526122bc8187612024565b905081810360208301526122d08186612024565b905081810360408301526122e48185612024565b90506122f36060830184612293565b95945050505050565b7f70726f766964656420737570706c79436861696e526f757465206c656e67746860008201527f20697320746f6f206c6f6e672e206c656e677468206d757374206265206c657360208201527f73207468616e206f7220657175616c20746f2032300000000000000000000000604082015250565b600061237e605583611fe0565b9150612389826122fc565b606082019050919050565b600060208201905081810360008301526123ad81612371565b9050919050565b7f70726f766964656420737570706c79436861696e526f75746520697320746f6f60008201527f2073686f72742e206c656e677468206d7573742062652067726561746572207460208201527f68616e206f7220657175616c20746f20312e0000000000000000000000000000604082015250565b6000612436605283611fe0565b9150612441826123b4565b606082019050919050565b6000602082019050818103600083015261246581612429565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff82169050919050565b60006124e2826124ca565b915060ff82036124f5576124f461249b565b5b600182019050919050565b600081905092915050565b600061251682611fd5565b6125208185612500565b9350612530818560208601611ff1565b80840191505092915050565b6000612548828461250b565b915081905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061259b82611fd5565b6125a5818561257f565b93506125b5818560208601611ff1565b6125be81611ae1565b840191505092915050565b60006125d58383612590565b905092915050565b6000602082019050919050565b60006125f582612553565b6125ff818561255e565b9350836020820285016126118561256f565b8060005b8581101561264d578484038952815161262e85826125c9565b9450612639836125dd565b925060208a01995050600181019050612615565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61269481611d35565b82525050565b60006126a6838361268b565b60208301905092915050565b6000602082019050919050565b60006126ca8261265f565b6126d4818561266a565b93506126df8361267b565b8060005b838110156127105781516126f7888261269a565b9750612702836126b2565b9250506001810190506126e3565b5085935050505092915050565b600060c08201905081810360008301526127378189612024565b9050818103602083015261274b8188612024565b9050818103604083015261275f81876125ea565b9050818103606083015261277381866125ea565b9050818103608083015261278781856125ea565b905081810360a083015261279b81846126bf565b9050979650505050505050565b60006127b382611f6c565b915063ffffffff82036127c9576127c861249b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061281b57607f821691505b60208210810361282e5761282d6127d4565b5b50919050565b7f696e7374616e636520686173206e6f7420796574206265656e20696e7374616e60008201527f7469617465640000000000000000000000000000000000000000000000000000602082015250565b6000612890602683611fe0565b915061289b82612834565b604082019050919050565b600060208201905081810360008301526128bf81612883565b9050919050565b7f696e76616c6964207369676e6572000000000000000000000000000000000000600082015250565b60006128fc600e83611fe0565b9150612907826128c6565b602082019050919050565b6000602082019050818103600083015261292b816128ef565b9050919050565b600061293d82612176565b915061294883612176565b92508282101561295b5761295a61249b565b5b828203905092915050565b7f70726f647563742068617320616c726561647920676f6e65207468726f75676860008201527f20636f6d706c65746520737570706c7920636861696e00000000000000000000602082015250565b60006129c2603683611fe0565b91506129cd82612966565b604082019050919050565b600060208201905081810360008301526129f1816129b5565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612a2d816121ec565b82525050565b6000612a3f8383612a24565b60208301905092915050565b6000602082019050919050565b6000612a63826129f8565b612a6d8185612a03565b9350612a7883612a14565b8060005b83811015612aa9578151612a908882612a33565b9750612a9b83612a4b565b925050600181019050612a7c565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612aeb8161220f565b82525050565b6000612afd8383612ae2565b60208301905092915050565b6000602082019050919050565b6000612b2182612ab6565b612b2b8185612ac1565b9350612b3683612ad2565b8060005b83811015612b67578151612b4e8882612af1565b9750612b5983612b09565b925050600181019050612b3a565b5085935050505092915050565b60006040820190508181036000830152612b8e8185612a58565b90508181036020830152612ba28184612b16565b90509392505050565b7f70726f64756374496420646f6573206e6f742065786973742e00000000000000600082015250565b6000612be1601983611fe0565b9150612bec82612bab565b602082019050919050565b60006020820190508181036000830152612c1081612bd4565b9050919050565b7f696e7374616e6365496420616c72656164792065786973747300000000000000600082015250565b6000612c4d601983611fe0565b9150612c5882612c17565b602082019050919050565b60006020820190508181036000830152612c7c81612c40565b9050919050565b7f696e636f7272656374207369676e657220666f7220696e7374616e746961746960008201527f6e6720612070726f6475637420696e7374616e63650000000000000000000000602082015250565b6000612cdf603583611fe0565b9150612cea82612c83565b604082019050919050565b60006020820190508181036000830152612d0e81612cd2565b905091905056fea2646970667358221220a7c85e7bd1a467db02fb5e87dc2160aa56d288acd12438cc7a477f0f7a5ffbbf64736f6c634300080d0033";

type IchnaeaCoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IchnaeaCoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IchnaeaCore__factory extends ContractFactory {
  constructor(...args: IchnaeaCoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IchnaeaCore> {
    return super.deploy(overrides || {}) as Promise<IchnaeaCore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): IchnaeaCore {
    return super.attach(address) as IchnaeaCore;
  }
  override connect(signer: Signer): IchnaeaCore__factory {
    return super.connect(signer) as IchnaeaCore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IchnaeaCoreInterface {
    return new utils.Interface(_abi) as IchnaeaCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IchnaeaCore {
    return new Contract(address, _abi, signerOrProvider) as IchnaeaCore;
  }
}
