// let contract;
// let signer;
// let contractWithSigner;

// main();

// async function main() {

//     async function main() {
//         const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//         await provider.send("eth_requestAccounts", []);
//         signer = provider.getSigner();
//         contract = new ethers.Contract(contractAddress, contractABI, provider);
//         contractWithSigner = contract.connect(signer);    



//     displayLetter();

//     contract.on("LetterAddedEvent", (letter) => {
//         const newLetter = `<p class="letter">${letter}</p>`
//         $('#letter').append(newLetter);
//     })

//     $('#submitLetterButton').click(addLetter);

//     function addLetter() {
//        contractWithSigner.addLetter($('#newLetter').val())
//     }

//             allLetters.forEach(letter => {
//                 const newLetter = `<p class="letter">${letter}</p>`
//                 $('#letter').append(newLetter);
//             })
//         }



// main();


// async function main() {


//     const provider = new ethers.providers.Web3Provider(window.ethereum)


//     await provider.send("eth_requestAccounts", []);


// function generatePattern() {
//     const input = document.getElementById("alphabet-input").value;
//     if (input.length !== 1 || !input.match(/[a-zA-Z]/)) {
//         alert("Please enter a single alphabet character.");
//         return;
//     }


// // Create a contract instance
// const contract = new web3.eth.Contract(contractABI, contractAddress);

// async function submitPattern() {
//     const letter = document.getElementById("alphabet-input").value;
//     const pattern = document.getElementById("pattern-input").value;

//     // Get the current Ethereum wallet address (assuming the user is using MetaMask)
//     const accounts = await web3.eth.getAccounts();
//     const sender = accounts[0];

//     // Call the smart contract function to submit the pattern
//     await contract.methods.submitPattern(web3.utils.asciiToHex(letter), pattern).send({ from: sender });

//     // Display a success message or update the UI as needed
//     document.getElementById("pattern-result").textContent = `Pattern submitted for letter: ${letter}`;
// }

//     const canvas = document.getElementById("pattern-canvas");
//     const context = canvas.getContext("2d");

//     context.clearRect(0, 0, canvas.width, canvas.height);

//     const gridSize = 40;
//     const padding = 20;

//     // Draw different patterns based on the input letter
//     const char = input.toUpperCase();
//     const charCode = char.charCodeAt(0);
//     const startX = padding;
//     const startY = padding;

//     // Set different styles for uppercase and lowercase letters
//     context.fillStyle = char === input ? "blue" : "orange";

//     // Draw patterns for specific characters
//     switch (charCode) {
//         case 65: // 'A'
//             drawPatternA(context, startX, startY, gridSize);
//             break;
//         case 66: // 'B'
//             drawPatternB(context, startX, startY, gridSize);
//             break;
//         case 67: // 'C'
//             drawPatternC(context, startX, startY, gridSize);
//             break;
//         case 68: // 'D'
//             drawPatternA(context, startX, startY, gridSize);
//             break;
//         case 69: // 'E'
//             drawPatternB(context, startX, startY, gridSize);
//             break;
//         case 70: // 'F'
//             drawPatternC(context, startX, startY, gridSize);
//             break;
//         // Add more cases for other letters and their corresponding patterns
//         // For example:
//         // case 68: // 'D'
//         //     drawPatternD(context, startX, startY, gridSize);
//         //     break;
//         // ...
//         default:
//             alert("Pattern not defined for this letter.");
//             break;
//     }
// }

// function drawPatternA(context, x, y, gridSize) {
//     // Define pattern for 'A'
//     // For example, draw a triangle
//     context.beginPath();
//     context.moveTo(x, y + gridSize);
//     context.lineTo(x + gridSize / 2, y);
//     context.lineTo(x + gridSize, y + gridSize);
//     context.closePath();
//     context.fill();
// }

// function drawPatternB(context, x, y, gridSize) {
//     // Define pattern for 'B'
//     // For example, draw a rectangle
//     context.fillRect(x, y, gridSize / 2, gridSize);
//     context.beginPath();
//     context.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 2, 0, Math.PI * 2, false);
//     context.fill();
// }

// function drawPatternC(context, x, y, gridSize) {
//     // Define pattern for 'C'
//     // For example, draw a circle
//     context.beginPath();
//     context.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 2, 0, Math.PI * 2, false);
//     context.closePath();
//     context.fill();
// }

// function drawPatternD(context, x, y, gridSize) {
//     // Define pattern for 'D'
//     // For example, draw a triangle
//     context.beginPath();
//     context.moveTo(x, y + gridSize);
//     context.lineTo(x + gridSize / 2, y);
//     context.lineTo(x + gridSize, y + gridSize);
//     context.closePath();
//     context.fill();
// }

// function drawPatternE(context, x, y, gridSize) {
//     // Define pattern for 'E'
//     // For example, draw a rectangle
//     context.fillRect(x, y, gridSize / 2, gridSize);
//     context.beginPath();
//     context.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 2, 0, Math.PI * 2, false);
//     context.fill();
// }

// function drawPatternF(context, x, y, gridSize) {
//     // Define pattern for 'F'
//     // For example, draw a circle
//     context.beginPath();
//     context.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 2, 0, Math.PI * 2, false);
//     context.closePath();
//     context.fill();
// }

// }




let contract;
let signer;
let contractWithSigner;

main();

async function main() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const contractWithSigner = contract.connect(signer);


    // WRITE YOUR CODE BELOW THIS LINE//




    $('#letterSubmitButton').click(addLetter);

    function addLetter() {
        contractWithSigner.addLetter($('#letterInput').val());
        letterSubmit();
    }


    async function letterSubmit() {
        let NewLetters = await contract.getNewLetter();
    }




    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    function letterSubmit() {
    const letter = document.getElementById('letterInput').value.toLowerCase(); 
    
    const canvas = document.getElementById('shapeCanvas');
    const context = canvas.getContext('2d');
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (letters.includes(letter)) {
        context.fillStyle = getColorForLetter(letter);
        context.fillRect(50, 50, 100, 100);
    } else {
        alert(`Shape for letter '${letter}' is not defined.`);
    }
}

function getColorForLetter(letter) {
    const colors = {
        a: 'aliceblue',
        b: 'blue',
        c: 'coral',
        d: 'deeppink',
        e: 'Emerald',
        f: 'FloralWhite',
        g: 'Green',
        h: 'Honeydew',
        i: 'indigo',
        j: 'gold',
        k: 'khaki',
        l: 'lavender',
        m: 'magenta',
        n: 'navy',
        o: 'orange',
        p: 'purple',
        q: 'green',
        r: 'red',
        s: 'silver',
        t: 'teal',
        u: 'linen',
        v: 'violet',
        w: 'white',
        x: 'cyan',
        y: 'yellow',
        z: 'tomato'
    };
    
    return colors[letter] || 'black';
}


}