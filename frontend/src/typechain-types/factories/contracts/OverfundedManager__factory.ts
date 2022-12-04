/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  OverfundedManager,
  OverfundedManagerInterface,
} from "../../contracts/OverfundedManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "erc20",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "master",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "propertyManager",
    outputs: [
      {
        internalType: "contract PropertyManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_property",
        type: "uint256",
      },
    ],
    name: "verifyProperty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b9e380380610b9e83398181016040528101906100329190610250565b61004e61004361010f60201b60201c565b61011760201b60201c565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160036000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505061027d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061020b826101e0565b9050919050565b600061021d82610200565b9050919050565b61022d81610212565b811461023857600080fd5b50565b60008151905061024a81610224565b92915050565b600060208284031215610266576102656101db565b5b60006102748482850161023b565b91505092915050565b6109128061028c6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100eb578063e7356cb514610109578063ee97f7f314610127578063f2fde38b1461014557610088565b80631785f53c1461008d5780634212a8ae146100a957806370480275146100c5578063715018a6146100e1575b600080fd5b6100a760048036038101906100a29190610603565b610161565b005b6100c360048036038101906100be9190610666565b6101c4565b005b6100df60048036038101906100da9190610603565b6102e7565b005b6100e961034a565b005b6100f361035e565b60405161010091906106a2565b60405180910390f35b610111610387565b60405161011e919061071c565b60405180910390f35b61012f6103ad565b60405161013c91906106a2565b60405180910390f35b61015f600480360381019061015a9190610603565b6103d3565b005b610169610456565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610257576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024e90610794565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634212a8ae826040518263ffffffff1660e01b81526004016102b291906107c3565b600060405180830381600087803b1580156102cc57600080fd5b505af11580156102e0573d6000803e3d6000fd5b5050505050565b6102ef610456565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610352610456565b61035c60006104d4565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103db610456565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361044a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044190610850565b60405180910390fd5b610453816104d4565b50565b61045e610598565b73ffffffffffffffffffffffffffffffffffffffff1661047c61035e565b73ffffffffffffffffffffffffffffffffffffffff16146104d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c9906108bc565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105d0826105a5565b9050919050565b6105e0816105c5565b81146105eb57600080fd5b50565b6000813590506105fd816105d7565b92915050565b600060208284031215610619576106186105a0565b5b6000610627848285016105ee565b91505092915050565b6000819050919050565b61064381610630565b811461064e57600080fd5b50565b6000813590506106608161063a565b92915050565b60006020828403121561067c5761067b6105a0565b5b600061068a84828501610651565b91505092915050565b61069c816105c5565b82525050565b60006020820190506106b76000830184610693565b92915050565b6000819050919050565b60006106e26106dd6106d8846105a5565b6106bd565b6105a5565b9050919050565b60006106f4826106c7565b9050919050565b6000610706826106e9565b9050919050565b610716816106fb565b82525050565b6000602082019050610731600083018461070d565b92915050565b600082825260208201905092915050565b7f596f7520617265206e6f7420616e2061646d696e000000000000000000000000600082015250565b600061077e601483610737565b915061078982610748565b602082019050919050565b600060208201905081810360008301526107ad81610771565b9050919050565b6107bd81610630565b82525050565b60006020820190506107d860008301846107b4565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061083a602683610737565b9150610845826107de565b604082019050919050565b600060208201905081810360008301526108698161082d565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006108a6602083610737565b91506108b182610870565b602082019050919050565b600060208201905081810360008301526108d581610899565b905091905056fea2646970667358221220d6df1d27f8c937cd35cc04ddbd980eaf02643c51d146c68a8cb5dd6d3c6284bc64736f6c63430008110033";

type OverfundedManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OverfundedManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OverfundedManager__factory extends ContractFactory {
  constructor(...args: OverfundedManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OverfundedManager> {
    return super.deploy(erc20, overrides || {}) as Promise<OverfundedManager>;
  }
  override getDeployTransaction(
    erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(erc20, overrides || {});
  }
  override attach(address: string): OverfundedManager {
    return super.attach(address) as OverfundedManager;
  }
  override connect(signer: Signer): OverfundedManager__factory {
    return super.connect(signer) as OverfundedManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OverfundedManagerInterface {
    return new utils.Interface(_abi) as OverfundedManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OverfundedManager {
    return new Contract(address, _abi, signerOrProvider) as OverfundedManager;
  }
}
