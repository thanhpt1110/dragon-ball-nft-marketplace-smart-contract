/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DragonBallAuction,
  DragonBallAuctionInterface,
} from "../../contracts/DragonBallAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_nft",
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
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_auctioneer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_previousBidder",
        type: "address",
      },
    ],
    name: "CancelAuction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_initialPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    name: "CreateAuction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_auctioneer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_lastBidder",
        type: "address",
      },
    ],
    name: "FinishAuction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_bidPrice",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_previousBidder",
        type: "address",
      },
    ],
    name: "JoinAuction",
    type: "event",
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
    inputs: [],
    name: "AUCTION_SERVICE_FEE_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_BID_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "cancelAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    name: "createAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "finishAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuction",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "auctioneer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialPrice",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "previousBidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lastBid",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "lastBidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "auctionId",
            type: "uint256",
          },
        ],
        internalType: "struct DragonBallAuction.AuctionInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_active",
        type: "bool",
      },
    ],
    name: "getAuctionByStatus",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "auctioneer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialPrice",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "previousBidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lastBid",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "lastBidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "auctionId",
            type: "uint256",
          },
        ],
        internalType: "struct DragonBallAuction.AuctionInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "joinAuction",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200337d3803806200337d8339818101604052810190620000379190620001e9565b620000576200004b6200009f60201b60201c565b620000a760201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200021b565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200019d8262000170565b9050919050565b6000620001b18262000190565b9050919050565b620001c381620001a4565b8114620001cf57600080fd5b50565b600081519050620001e381620001b8565b92915050565b6000602082840312156200020257620002016200016b565b5b60006200021284828501620001d2565b91505092915050565b613152806200022b6000396000f3fe6080604052600436106100a75760003560e01c806396b5a7551161006457806396b5a755146101bc578063bd0a079d146101e5578063c00a6fb714610210578063cf266ed01461024d578063f0194f8914610276578063f2fde38b14610292576100a7565b8063150b7a02146100ac578063431f21da146100e95780636aadfdd014610112578063715018a61461013d57806378bd7935146101545780638da5cb5b14610191575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190612242565b6102bb565b6040516100e09190612305565b60405180910390f35b3480156100f557600080fd5b50610110600480360381019061010b9190612320565b6102e9565b005b34801561011e57600080fd5b506101276108a4565b6040516101349190612396565b60405180910390f35b34801561014957600080fd5b506101526108a9565b005b34801561016057600080fd5b5061017b600480360381019061017691906123b1565b6108bd565b60405161018891906124f8565b60405180910390f35b34801561019d57600080fd5b506101a6610a6e565b6040516101b39190612523565b60405180910390f35b3480156101c857600080fd5b506101e360048036038101906101de91906123b1565b610a97565b005b3480156101f157600080fd5b506101fa611046565b6040516102079190612396565b60405180910390f35b34801561021c57600080fd5b506102376004803603810190610232919061256a565b61104b565b6040516102449190612728565b60405180910390f35b34801561025957600080fd5b50610274600480360381019061026f91906123b1565b611346565b005b610290600480360381019061028b91906123b1565b61190d565b005b34801561029e57600080fd5b506102b960048036038101906102b4919061274a565b611ed2565b005b60007f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f905095945050505050565b8142111561032c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610323906127d4565b60405180910390fd5b80821061036e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036590612866565b60405180910390fd5b826000106103b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a8906128f8565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e866040518263ffffffff1660e01b81526004016104239190612396565b602060405180830381865afa158015610440573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610464919061292d565b73ffffffffffffffffffffffffffffffffffffffff16146104ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b1906129a6565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b81526004016105179291906129c6565b602060405180830381865afa158015610534573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105589190612a04565b610597576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058e90612aa3565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e3330876040518463ffffffff1660e01b81526004016105f693929190612ac3565b600060405180830381600087803b15801561061057600080fd5b505af1158015610624573d6000803e3d6000fd5b5050505060006040518061016001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001858152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001600015158152602001600115158152602001600280549050815250905060028190806001815401808255809150506001900390600052602060002090600a020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c0820151816006015560e082015181600701556101008201518160080160006101000a81548160ff0219169083151502179055506101208201518160080160016101000a81548160ff021916908315150217905550610140820151816009015550503373ffffffffffffffffffffffffffffffffffffffff167f76f0fec24cdf0c2e47f052b1a0e279a65ecfacffdf4fc0d47ec951a392a23816868686866040516108959493929190612afa565b60405180910390a25050505050565b606e81565b6108b1611f55565b6108bb6000611fd3565b565b6108c561209f565b600282815481106108d9576108d8612b3f565b5b90600052602060002090600a0201604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160068201548152602001600782015481526020016008820160009054906101000a900460ff161515151581526020016008820160019054906101000a900460ff161515151581526020016009820154815250509050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8060028181548110610aac57610aab612b3f565b5b90600052602060002090600a020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610b495750610b1a610a6e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610b88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7f90612be0565b60405180910390fd5b6000151560028381548110610ba057610b9f612b3f565b5b90600052602060002090600a020160080160009054906101000a900460ff16151514610c01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf890612c4c565b60405180910390fd5b60028281548110610c1557610c14612b3f565b5b90600052602060002090600a020160080160019054906101000a900460ff16610c73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6a90612cb8565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e3060028581548110610cc657610cc5612b3f565b5b90600052602060002090600a020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660028681548110610d0c57610d0b612b3f565b5b90600052602060002090600a0201600101546040518463ffffffff1660e01b8152600401610d3c93929190612ac3565b600060405180830381600087803b158015610d5657600080fd5b505af1158015610d6a573d6000803e3d6000fd5b50505050600073ffffffffffffffffffffffffffffffffffffffff1660028381548110610d9a57610d99612b3f565b5b90600052602060002090600a020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e995760028281548110610dfb57610dfa612b3f565b5b90600052602060002090600a020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60028481548110610e5a57610e59612b3f565b5b90600052602060002090600a0201600401549081150290604051600060405180830381858888f19350505050158015610e97573d6000803e3d6000fd5b505b600160028381548110610eaf57610eae612b3f565b5b90600052602060002090600a020160080160006101000a81548160ff021916908315150217905550600060028381548110610eed57610eec612b3f565b5b90600052602060002090600a020160080160016101000a81548160ff02191690831515021790555060028281548110610f2957610f28612b3f565b5b90600052602060002090600a020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660028381548110610f8557610f84612b3f565b5b90600052602060002090600a020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f7a99de43ac96f0e4a85857dffb754b19b2b2466e3b10dbfb41f2478d6521eb99856002878154811061101a57611019612b3f565b5b90600052602060002090600a02016001015460405161103a929190612cd8565b60405180910390a45050565b600381565b60606000805b6002805490508110156110b7578315156002828154811061107557611074612b3f565b5b90600052602060002090600a020160080160019054906101000a900460ff161515036110aa5781806110a690612d30565b9250505b8080600101915050611051565b5060008167ffffffffffffffff8111156110d4576110d3612d78565b5b60405190808252806020026020018201604052801561110d57816020015b6110fa61209f565b8152602001906001900390816110f25790505b5090506000805b60028054905081101561133a578515156002828154811061113857611137612b3f565b5b90600052602060002090600a020160080160019054906101000a900460ff1615150361132d576002818154811061117257611171612b3f565b5b90600052602060002090600a0201604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160068201548152602001600782015481526020016008820160009054906101000a900460ff161515151581526020016008820160019054906101000a900460ff1615151515815260200160098201548152505083838151811061131357611312612b3f565b5b6020026020010181905250818061132990612d30565b9250505b8080600101915050611114565b50819350505050919050565b806002818154811061135b5761135a612b3f565b5b90600052602060002090600a020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806113f857506113c9610a6e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611437576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142e90612be0565b60405180910390fd5b600015156002838154811061144f5761144e612b3f565b5b90600052602060002090600a020160080160009054906101000a900460ff161515146114b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a790612c4c565b60405180910390fd5b600282815481106114c4576114c3612b3f565b5b90600052602060002090600a020160080160019054906101000a900460ff16611522576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151990612cb8565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e306002858154811061157557611574612b3f565b5b90600052602060002090600a020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600286815481106115bb576115ba612b3f565b5b90600052602060002090600a0201600101546040518463ffffffff1660e01b81526004016115eb93929190612ac3565b600060405180830381600087803b15801561160557600080fd5b505af1158015611619573d6000803e3d6000fd5b5050505060006002838154811061163357611632612b3f565b5b90600052602060002090600a020160040154905060006002848154811061165d5761165c612b3f565b5b90600052602060002090600a0201600201546002858154811061168357611682612b3f565b5b90600052602060002090600a02016004015461169f9190612da7565b9050600060646003836116b29190612ddb565b6116bc9190612e4c565b9050600081846116cc9190612da7565b9050600286815481106116e2576116e1612b3f565b5b90600052602060002090600a020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611759573d6000803e3d6000fd5b506001600287815481106117705761176f612b3f565b5b90600052602060002090600a020160080160006101000a81548160ff0219169083151502179055506000600287815481106117ae576117ad612b3f565b5b90600052602060002090600a020160080160016101000a81548160ff021916908315150217905550600286815481106117ea576117e9612b3f565b5b90600052602060002090600a020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166002878154811061184657611845612b3f565b5b90600052602060002090600a020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f5f28c5b55c548d31275b9e946c3d1fbcdf9afd369baefb11250b8f4f4f5f53b48960028b815481106118db576118da612b3f565b5b90600052602060002090600a020160010154896040516118fd93929190612e7d565b60405180910390a4505050505050565b60006002828154811061192357611922612b3f565b5b90600052602060002090600a0201604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160068201548152602001600782015481526020016008820160009054906101000a900460ff161515151581526020016008820160019054906101000a900460ff1615151515815260200160098201548152505090508060c00151421015611afa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611af190612f00565b60405180910390fd5b60001515816101000151151514611b46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b3d90612c4c565b60405180910390fd5b806101200151611b8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8290612cb8565b60405180910390fd5b60008073ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614611be6576064606e8360800151611bd79190612ddb565b611be19190612e4c565b611bec565b81604001515b905034811115611c31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c2890612f92565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1603611ca3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c9a90612ffe565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614611d2b578160a0015173ffffffffffffffffffffffffffffffffffffffff166108fc83608001519081150290604051600060405180830381858888f19350505050158015611d29573d6000803e3d6000fd5b505b8160a0015160028481548110611d4457611d43612b3f565b5b90600052602060002090600a020160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503360028481548110611da857611da7612b3f565b5b90600052602060002090600a020160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503460028481548110611e0c57611e0b612b3f565b5b90600052602060002090600a02016004018190555060028381548110611e3557611e34612b3f565b5b90600052602060002090600a020160030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f973bfc98a37f669dd0550b8a587bbe1591f69a679bb70a917f797e25f16962b28534604051611ec5929190612cd8565b60405180910390a3505050565b611eda611f55565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611f49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f4090613090565b60405180910390fd5b611f5281611fd3565b50565b611f5d612097565b73ffffffffffffffffffffffffffffffffffffffff16611f7b610a6e565b73ffffffffffffffffffffffffffffffffffffffff1614611fd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fc8906130fc565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600015158152602001600015158152602001600081525090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061217482612149565b9050919050565b61218481612169565b811461218f57600080fd5b50565b6000813590506121a18161217b565b92915050565b6000819050919050565b6121ba816121a7565b81146121c557600080fd5b50565b6000813590506121d7816121b1565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112612202576122016121dd565b5b8235905067ffffffffffffffff81111561221f5761221e6121e2565b5b60208301915083600182028301111561223b5761223a6121e7565b5b9250929050565b60008060008060006080868803121561225e5761225d61213f565b5b600061226c88828901612192565b955050602061227d88828901612192565b945050604061228e888289016121c8565b935050606086013567ffffffffffffffff8111156122af576122ae612144565b5b6122bb888289016121ec565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6122ff816122ca565b82525050565b600060208201905061231a60008301846122f6565b92915050565b6000806000806080858703121561233a5761233961213f565b5b6000612348878288016121c8565b9450506020612359878288016121c8565b935050604061236a878288016121c8565b925050606061237b878288016121c8565b91505092959194509250565b612390816121a7565b82525050565b60006020820190506123ab6000830184612387565b92915050565b6000602082840312156123c7576123c661213f565b5b60006123d5848285016121c8565b91505092915050565b6123e781612169565b82525050565b6123f6816121a7565b82525050565b60008115159050919050565b612411816123fc565b82525050565b6101608201600082015161242e60008501826123de565b50602082015161244160208501826123ed565b50604082015161245460408501826123ed565b50606082015161246760608501826123de565b50608082015161247a60808501826123ed565b5060a082015161248d60a08501826123de565b5060c08201516124a060c08501826123ed565b5060e08201516124b360e08501826123ed565b506101008201516124c8610100850182612408565b506101208201516124dd610120850182612408565b506101408201516124f26101408501826123ed565b50505050565b60006101608201905061250e6000830184612417565b92915050565b61251d81612169565b82525050565b60006020820190506125386000830184612514565b92915050565b612547816123fc565b811461255257600080fd5b50565b6000813590506125648161253e565b92915050565b6000602082840312156125805761257f61213f565b5b600061258e84828501612555565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610160820160008201516125da60008501826123de565b5060208201516125ed60208501826123ed565b50604082015161260060408501826123ed565b50606082015161261360608501826123de565b50608082015161262660808501826123ed565b5060a082015161263960a08501826123de565b5060c082015161264c60c08501826123ed565b5060e082015161265f60e08501826123ed565b50610100820151612674610100850182612408565b50610120820151612689610120850182612408565b5061014082015161269e6101408501826123ed565b50505050565b60006126b083836125c3565b6101608301905092915050565b6000602082019050919050565b60006126d582612597565b6126df81856125a2565b93506126ea836125b3565b8060005b8381101561271b57815161270288826126a4565b975061270d836126bd565b9250506001810190506126ee565b5085935050505092915050565b6000602082019050818103600083015261274281846126ca565b905092915050565b6000602082840312156127605761275f61213f565b5b600061276e84828501612192565b91505092915050565b600082825260208201905092915050565b7f41756374696f6e2063616e206e6f742073746172740000000000000000000000600082015250565b60006127be601583612777565b91506127c982612788565b602082019050919050565b600060208201905081810360008301526127ed816127b1565b9050919050565b7f41756374696f6e2063616e206e6f7420656e64206265666f726520697420737460008201527f6172747300000000000000000000000000000000000000000000000000000000602082015250565b6000612850602483612777565b915061285b826127f4565b604082019050919050565b6000602082019050818103600083015261287f81612843565b9050919050565b7f496e697469616c207072696365206d757374206265206772656174657220746860008201527f616e203000000000000000000000000000000000000000000000000000000000602082015250565b60006128e2602483612777565b91506128ed82612886565b604082019050919050565b60006020820190508181036000830152612911816128d5565b9050919050565b6000815190506129278161217b565b92915050565b6000602082840312156129435761294261213f565b5b600061295184828501612918565b91505092915050565b7f4d757374207374616b6520796f7572206f776e20746f6b656e00000000000000600082015250565b6000612990601983612777565b915061299b8261295a565b602082019050919050565b600060208201905081810360008301526129bf81612983565b9050919050565b60006040820190506129db6000830185612514565b6129e86020830184612514565b9392505050565b6000815190506129fe8161253e565b92915050565b600060208284031215612a1a57612a1961213f565b5b6000612a28848285016129ef565b91505092915050565b7f4d61726b6574706c616365206973206e6f7420617070726f76656420746f207460008201527f72616e736665722074686973204e465400000000000000000000000000000000602082015250565b6000612a8d603083612777565b9150612a9882612a31565b604082019050919050565b60006020820190508181036000830152612abc81612a80565b9050919050565b6000606082019050612ad86000830186612514565b612ae56020830185612514565b612af26040830184612387565b949350505050565b6000608082019050612b0f6000830187612387565b612b1c6020830186612387565b612b296040830185612387565b612b366060830184612387565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4f6e6c792061756374696f6e656572206f72206f776e65722063616e2070657260008201527f666f726d207468697320616374696f6e00000000000000000000000000000000602082015250565b6000612bca603083612777565b9150612bd582612b6e565b604082019050919050565b60006020820190508181036000830152612bf981612bbd565b9050919050565b7f41756374696f6e20697320616c726561647920636f6d706c6574656400000000600082015250565b6000612c36601c83612777565b9150612c4182612c00565b602082019050919050565b60006020820190508181036000830152612c6581612c29565b9050919050565b7f41756374696f6e206973206e6f74206163746976650000000000000000000000600082015250565b6000612ca2601583612777565b9150612cad82612c6c565b602082019050919050565b60006020820190508181036000830152612cd181612c95565b9050919050565b6000604082019050612ced6000830185612387565b612cfa6020830184612387565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612d3b826121a7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612d6d57612d6c612d01565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000612db2826121a7565b9150612dbd836121a7565b9250828203905081811115612dd557612dd4612d01565b5b92915050565b6000612de6826121a7565b9150612df1836121a7565b9250828202612dff816121a7565b91508282048414831517612e1657612e15612d01565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612e57826121a7565b9150612e62836121a7565b925082612e7257612e71612e1d565b5b828204905092915050565b6000606082019050612e926000830186612387565b612e9f6020830185612387565b612eac6040830184612387565b949350505050565b7f41756374696f6e20686173206e6f742073746172746564000000000000000000600082015250565b6000612eea601783612777565b9150612ef582612eb4565b602082019050919050565b60006020820190508181036000830152612f1981612edd565b9050919050565b7f426964207072696365206d7573742062652067726561746572207468616e207460008201527f6865206d696e696d756d20707269636500000000000000000000000000000000602082015250565b6000612f7c603083612777565b9150612f8782612f20565b604082019050919050565b60006020820190508181036000830152612fab81612f6f565b9050919050565b7f43616e206e6f7420626964206f6e20796f7572206f776e2061756374696f6e00600082015250565b6000612fe8601f83612777565b9150612ff382612fb2565b602082019050919050565b6000602082019050818103600083015261301781612fdb565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061307a602683612777565b91506130858261301e565b604082019050919050565b600060208201905081810360008301526130a98161306d565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006130e6602083612777565b91506130f1826130b0565b602082019050919050565b60006020820190508181036000830152613115816130d9565b905091905056fea26469706673582212206aae9e57c0cccdccf3575d301620d7c7e7cfb3ab9611e09097a7a2e34b802bf564736f6c63430008180033";

type DragonBallAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DragonBallAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DragonBallAuction__factory extends ContractFactory {
  constructor(...args: DragonBallAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _nft: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_nft, overrides || {});
  }
  override deploy(
    _nft: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_nft, overrides || {}) as Promise<
      DragonBallAuction & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DragonBallAuction__factory {
    return super.connect(runner) as DragonBallAuction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DragonBallAuctionInterface {
    return new Interface(_abi) as DragonBallAuctionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DragonBallAuction {
    return new Contract(address, _abi, runner) as unknown as DragonBallAuction;
  }
}