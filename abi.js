    let contractAddress = '0x0D7b8c56152d4BCDC336a1Db20e1cd1Ff04dc666';
    let abi = [
        [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes1",
                        "name": "letter",
                        "type": "bytes1"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "pattern",
                        "type": "string"
                    }
                ],
                "name": "PatternSubmitted",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes1",
                        "name": "letter",
                        "type": "bytes1"
                    },
                    {
                        "internalType": "string",
                        "name": "pattern",
                        "type": "string"
                    }
                ],
                "name": "submitPattern",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes1",
                        "name": "letter",
                        "type": "bytes1"
                    }
                ],
                "name": "getPattern",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes1",
                        "name": "",
                        "type": "bytes1"
                    }
                ],
                "name": "patterns",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    ];