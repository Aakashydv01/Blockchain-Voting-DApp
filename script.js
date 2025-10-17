// // ----------------------------
// // Replace with your deployed contract address
// // ----------------------------
// const contractAddress = "0xF9Bf4A955586B07340761f4688d0C0482ae61125";

// // ----------------------------
// // Replace with your contract ABI (from Remix)
// // ----------------------------
// const contractABI = [[
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			}
// 		],
// 		"name": "CandidateAdded",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [],
// 		"name": "ElectionStarted",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [],
// 		"name": "ElectionStopped",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "voter",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "candidateIndex",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "VoteCasted",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			}
// 		],
// 		"name": "addCandidate",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "allowedVoters",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "candidates",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "voteCount",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "electionActive",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getCandidate",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getCandidatesCount",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getWinner",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "voter",
// 				"type": "address"
// 			}
// 		],
// 		"name": "registerVoter",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "startElection",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "stopElection",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "candidateIndex",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "vote",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "voters",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
//   // Copy your contract ABI here exactly as in Remix
//   // For brevity, I assume you already have it
// ];

// // ----------------------------
// // Global variables
// // ----------------------------
// let votingContract;
// let accounts;

// // ----------------------------
// // Connect to MetaMask
// // ----------------------------
// async function connectWallet() {
//     if (window.ethereum) {
//         try {
//             accounts = await ethereum.request({ method: "eth_requestAccounts" });
//             document.getElementById("walletAddress").innerText = accounts[0];
//             initContract();
//         } catch (error) {
//             console.error("User denied account access", error);
//             alert("Please allow MetaMask connection!");
//         }
//     } else {
//         alert("MetaMask is not installed. Please install MetaMask!");
//     }
// }

// // ----------------------------
// // Initialize the contract
// // ----------------------------
// function initContract() {
//     const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//     const signer = provider.getSigner();
//     votingContract = new ethers.Contract(contractAddress, contractABI, signer);
//     loadVotes();
// }

// // ----------------------------
// // Load vote counts and winner
// // ----------------------------
// async function loadVotes() {
//     try {
//         const candidate0 = await votingContract.getCandidate(0);
//         const candidate1 = await votingContract.getCandidate(1);

//         document.getElementById("candidate0Votes").innerText = candidate0[1];
//         document.getElementById("candidate1Votes").innerText = candidate1[1];

//         const winner = await votingContract.getWinner();
//         if (winner[1] > 0) {
//             document.getElementById("winner").innerText = winner[0] + " (" + winner[1] + " votes)";
//         } else {
//             document.getElementById("winner").innerText = "Not declared";
//         }
//     } catch (error) {
//         console.error("Error loading votes:", error);
//     }
// }

// // ----------------------------
// // Cast vote
// // ----------------------------
// async function vote(candidateIndex) {
//     try {
//         const tx = await votingContract.vote(candidateIndex);
//         await tx.wait();
//         alert("Vote cast successfully!");
//         loadVotes();
//     } catch (error) {
//         console.error(error);
//         alert("Error: " + (error.data?.message || error.message));
//     }
// }

// // ----------------------------
// // Declare winner
// // ----------------------------
// async function declareWinner() {
//     try {
//         const winner = await votingContract.getWinner();
//         alert("Winner: " + winner[0] + " with " + winner[1] + " votes!");
//         loadVotes();
//     } catch (error) {
//         console.error(error);
//         alert("Error: " + (error.data?.message || error.message));
//     }
// }

// // ----------------------------
// // Check if address has voted
// // ----------------------------
// async function checkVoted() {
//     const addr = document.getElementById("checkAddress").value;
//     try {
//         const voted = await votingContract.voters(addr);
//         alert(voted ? "This address has voted." : "This address has NOT voted.");
//     } catch (error) {
//         console.error(error);
//         alert("Error: " + (error.data?.message || error.message));
//     }
// }

// // ----------------------------
// // Event listeners
// // ----------------------------
// window.addEventListener('load', () => {
//     document.getElementById("connectWalletBtn").addEventListener("click", connectWallet);
//     document.getElementById("voteCandidate0").addEventListener("click", () => vote(0));
//     document.getElementById("voteCandidate1").addEventListener("click", () => vote(1));
//     document.getElementById("declareWinnerBtn").addEventListener("click", declareWinner);
//     document.getElementById("checkVotedBtn").addEventListener("click", checkVoted);

//     // Listen for account or network changes
//     if (window.ethereum) {
//         window.ethereum.on("accountsChanged", (accounts) => {
//             document.getElementById("walletAddress").innerText = accounts[0] || "Not connected";
//             loadVotes();
//         });
//         window.ethereum.on("chainChanged", () => {
//             window.location.reload();
//         });
//     }
// });




// ✅ Connect to Ethereum provider (MetaMask + Ganache)
let provider, signer, contract;

const contractAddress = "0xF9Bf4A955586B07340761f4688d0C0482ae61125"; // <-- Replace this
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "candidateIndex",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getCandidate",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidatesCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
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
];

// ✅ HTML elements
const walletAddressSpan = document.getElementById("walletAddress");
const connectWalletBtn = document.getElementById("connectWalletBtn");
const voteCandidate0 = document.getElementById("voteCandidate0");
const voteCandidate1 = document.getElementById("voteCandidate1");
const declareWinnerBtn = document.getElementById("declareWinnerBtn");
const winnerSpan = document.getElementById("winner");
const checkAddressInput = document.getElementById("checkAddress");
const checkVotedBtn = document.getElementById("checkVotedBtn");
const candidate0Votes = document.getElementById("candidate0Votes");
const candidate1Votes = document.getElementById("candidate1Votes");

// ✅ Connect Wallet
connectWalletBtn.onclick = async () => {
  if (window.ethereum) {
    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    walletAddressSpan.textContent = await signer.getAddress();

    contract = new ethers.Contract(contractAddress, contractABI, signer);
    alert("Wallet connected successfully!");
    await updateVoteCounts();
  } else {
    alert("MetaMask not detected. Please install it first!");
  }
};

// ✅ Vote for Candidate 1
voteCandidate0.onclick = async () => {
  if (!contract) return alert("Please connect your wallet first.");
  try {
    const tx = await contract.vote(0);
    await tx.wait();
    alert("You voted for Candidate 1!");
    await updateVoteCounts();
  } catch (err) {
    alert("Error: " + err.message);
  }
};

// ✅ Vote for Candidate 2
voteCandidate1.onclick = async () => {
  if (!contract) return alert("Please connect your wallet first.");
  try {
    const tx = await contract.vote(1);
    await tx.wait();
    alert("You voted for Candidate 2!");
    await updateVoteCounts();
  } catch (err) {
    alert("Error: " + err.message);
  }
};

// ✅ Declare Winner (Owner Only)
declareWinnerBtn.onclick = async () => {
  if (!contract) return alert("Connect your wallet first.");
  try {
    const tx = await contract.declareWinner();
    await tx.wait();
    const winnerName = await contract.getWinner();
    winnerSpan.textContent = winnerName;
    alert(`Winner declared: ${winnerName}`);
  } catch (err) {
    alert("Error: " + err.message);
  }
};

// ✅ Check if Address has Voted
checkVotedBtn.onclick = async () => {
  if (!contract) return alert("Connect your wallet first.");
  const address = checkAddressInput.value;
  if (!address) return alert("Please enter an address.");

  try {
    const voted = await contract.hasVoted(address);
    alert(voted ? "This address has voted." : "This address has not voted yet.");
  } catch (err) {
    alert("Error: " + err.message);
  }
};

// ✅ Update vote counts display
async function updateVoteCounts() {
  if (!contract) return;
  try {
    const votes0 = await contract.getVoteCount(0);
    const votes1 = await contract.getVoteCount(1);
    candidate0Votes.textContent = votes0.toString();
    candidate1Votes.textContent = votes1.toString();
  } catch (err) {
    console.error("Error fetching vote counts:", err);
  }
}
