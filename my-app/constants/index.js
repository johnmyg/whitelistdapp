export const WHITELIST_CONTRACT_ADDRESS = "0x082Fcc01B3ca0f503Dca47975d2cCF790e618137";
export const abi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "Whitelist",
    "sourceName": "contracts/Whitelist.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "_maxWhitelistedAddresses",
            "type": "uint8"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "addAddressToWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "maxWhitelistedAddresses",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "numAddressesWhitelisted",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "whitelistedAddresses",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5060405161062438038061062483398181016040528101906100329190610090565b806000806101000a81548160ff021916908360ff160217905550506100bd565b600080fd5b600060ff82169050919050565b61006d81610057565b811461007857600080fd5b50565b60008151905061008a81610064565b92915050565b6000602082840312156100a6576100a5610052565b5b60006100b48482850161007b565b91505092915050565b610558806100cc6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306c933d81461005157806331a72188146100815780634011d7cd1461009f5780638e7314d9146100bd575b600080fd5b61006b600480360381019061006691906102ef565b6100c7565b6040516100789190610337565b60405180910390f35b6100896100e7565b604051610096919061036e565b60405180910390f35b6100a76100f8565b6040516100b4919061036e565b60405180910390f35b6100c561010b565b005b60016020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018f9061040c565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f39061049e565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008282829054906101000a900460ff1661027291906104ed565b92506101000a81548160ff021916908360ff160217905550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102bc82610291565b9050919050565b6102cc816102b1565b81146102d757600080fd5b50565b6000813590506102e9816102c3565b92915050565b6000602082840312156103055761030461028c565b5b6000610313848285016102da565b91505092915050565b60008115159050919050565b6103318161031c565b82525050565b600060208201905061034c6000830184610328565b92915050565b600060ff82169050919050565b61036881610352565b82525050565b6000602082019050610383600083018461035f565b92915050565b600082825260208201905092915050565b7f53656e6465722068617320616c7265616479206265656e2077686974656c697360008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b60006103f6602383610389565b91506104018261039a565b604082019050919050565b60006020820190508181036000830152610425816103e9565b9050919050565b7f4d6f7265206164647265737365732063616e742062652061646465642c206c6960008201527f6d69742072656163686564000000000000000000000000000000000000000000602082015250565b6000610488602b83610389565b91506104938261042c565b604082019050919050565b600060208201905081810360008301526104b78161047b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006104f882610352565b915061050383610352565b9250828201905060ff81111561051c5761051b6104be565b5b9291505056fea264697066735822122079e15259c16af6af602757c252aa27caaae8dc78e8ae0cb45644193e051e9cb364736f6c63430008110033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806306c933d81461005157806331a72188146100815780634011d7cd1461009f5780638e7314d9146100bd575b600080fd5b61006b600480360381019061006691906102ef565b6100c7565b6040516100789190610337565b60405180910390f35b6100896100e7565b604051610096919061036e565b60405180910390f35b6100a76100f8565b6040516100b4919061036e565b60405180910390f35b6100c561010b565b005b60016020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018f9061040c565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f39061049e565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008282829054906101000a900460ff1661027291906104ed565b92506101000a81548160ff021916908360ff160217905550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102bc82610291565b9050919050565b6102cc816102b1565b81146102d757600080fd5b50565b6000813590506102e9816102c3565b92915050565b6000602082840312156103055761030461028c565b5b6000610313848285016102da565b91505092915050565b60008115159050919050565b6103318161031c565b82525050565b600060208201905061034c6000830184610328565b92915050565b600060ff82169050919050565b61036881610352565b82525050565b6000602082019050610383600083018461035f565b92915050565b600082825260208201905092915050565b7f53656e6465722068617320616c7265616479206265656e2077686974656c697360008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b60006103f6602383610389565b91506104018261039a565b604082019050919050565b60006020820190508181036000830152610425816103e9565b9050919050565b7f4d6f7265206164647265737365732063616e742062652061646465642c206c6960008201527f6d69742072656163686564000000000000000000000000000000000000000000602082015250565b6000610488602b83610389565b91506104938261042c565b604082019050919050565b600060208201905081810360008301526104b78161047b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006104f882610352565b915061050383610352565b9250828201905060ff81111561051c5761051b6104be565b5b9291505056fea264697066735822122079e15259c16af6af602757c252aa27caaae8dc78e8ae0cb45644193e051e9cb364736f6c63430008110033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  ;
