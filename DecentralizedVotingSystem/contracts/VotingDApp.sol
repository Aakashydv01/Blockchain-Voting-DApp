// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VotingDApp {
    address public owner;
    bool public electionActive;

    struct Candidate {
        string name;
        uint voteCount;
    }

    Candidate[] public candidates;
    mapping(address => bool) public voters;

    event VoteCasted(address voter, uint candidateIndex);
    event ElectionStarted();
    event ElectionStopped();

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this");
        _;
    }

    modifier electionRunning() {
        require(electionActive, "Election is not active");
        _;
    }

    constructor(string memory candidate1, string memory candidate2) {
        owner = msg.sender;
        candidates.push(Candidate(candidate1, 0));
        candidates.push(Candidate(candidate2, 0));
    }

    function startElection() public onlyOwner {
        electionActive = true;
        emit ElectionStarted();
    }

    function stopElection() public onlyOwner {
        electionActive = false;
        emit ElectionStopped();
    }

    function vote(uint candidateIndex) public electionRunning {
        require(!voters[msg.sender], "You have already voted");
        require(candidateIndex < candidates.length, "Invalid candidate");
        voters[msg.sender] = true;
        candidates[candidateIndex].voteCount++;
        emit VoteCasted(msg.sender, candidateIndex);
    }

    function getCandidate(uint index) public view returns (string memory, uint) {
        require(index < candidates.length, "Invalid index");
        return (candidates[index].name, candidates[index].voteCount);
    }

    function getWinner() public view returns (string memory, uint) {
        uint maxVotes = 0;
        uint winnerIndex = 0;
        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > maxVotes) {
                maxVotes = candidates[i].voteCount;
                winnerIndex = i;
            }
        }
        return (candidates[winnerIndex].name, maxVotes);
    }
}
