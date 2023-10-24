    let contractAddress = '0x9C70b57B64a9D1297Ba1F683F66919Fc799D0660';
    let abi = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_letter",
                        "type": "string"
                    }
                ],
                "name": "addLetter",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "letter",
                        "type": "string"
                    }
                ],
                "name": "LetterAddedEvent",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "getNewLetter",
                "outputs": [
                    {
                        "internalType": "string[]",
                        "name": "",
                        "type": "string[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "letters",
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
    ];