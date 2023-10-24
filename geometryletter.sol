// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract geometryletter {

    string[] public letters;

    // string myString = "AtoZ"; 

    event LetterAddedEvent(string letter);

    function addLetter(string memory _letter) public {
        letters.push(_letter);
        emit LetterAddedEvent(_letter);
    }

    function getNewLetter() public view returns (string[] memory) {
        return letters;
    }

}