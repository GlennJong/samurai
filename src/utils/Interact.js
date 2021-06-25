import React from 'react';
import Web3 from 'web3';
import { ethers } from "ethers";
import dotenv from 'dotenv'
dotenv.config()
const web3 = new Web3(Web3.givenProvider);
const contractABI = require("../contract-abi.json");
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👉🏽 Awesome let's buy some stuff.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else { 
    return {
      address: "",
      status: (
        <span>
          <p>
            {" 🦊 "}
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noopener noreferrer">
              You must install Metamask, a virtual Ethereum wallet, in your browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👉🏽 Awesome let's buy some stuff.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" 🦊 "} 
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noopener noreferrer">
              You must install Metamask, a virtual Ethereum wallet, in your browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const mintNFT = async (amount, chain) => {

  function chainMap(chainID){
    if(chainID === "0x1") {
      return {
        name: "Mainnet",
        url: "https://etherscan.io/"
      }
    } else if(chainID === "0x3"){
      return {
        name: "Ropsten Test Network",
        url: "https://ropsten.etherscan.io/"
      }
    } else if(chainID === "0x4"){
      return {
        name: "Rinkeby Test Network",
        url: "https://rinkeby.etherscan.io/"
      }
    } else if(chainID === "0x5"){
      return {
        name: "Goerli Test Network",
        url: "https://goerli.etherscan.io/"
      }
    } else if(chainID === "0x2a"){
      return {
        name: "Kovan Test Network",
        url: "https://kovan.etherscan.io/"
      }
    }
  }

  if (chain !== process.env.REACT_APP_CHAIN_ID) {
    const result = chainMap(process.env.REACT_APP_CHAIN_ID);
    return {
      success: false,
      status: "😥 Something went wrong: You should be using " + result.name,
    };
  }
  const SamuraiContract = new web3.eth.Contract(contractABI, contractAddress);

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: ethers.utils.hexlify(ethers.utils.parseEther((amount*0.05).toString())), // Only required to send ether to the recipient from the initiating external account.
    data: SamuraiContract.methods
      .mintSamurai(amount)
      .encodeABI(),
    chainId: process.env.REACT_APP_CHAIN_ID,
  };
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    const result = chainMap(chain);
    return {
      success: true,
      //status: "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" + txHash + "\nYou can check it out on https://opensea.io/ after a while!" ,
      status: (
        <span>
          <p>
            {" ✅ Check out your transaction on Etherscan: "}
            <a target="_blank" href={result.url + 'tx/' + txHash} rel="noopener noreferrer">
              {result.url + 'tx/' + txHash}
            </a>
            {" You can check it out on "}
            <a target="_blank" href={"https://opensea.io/" + txHash} rel="noopener noreferrer">
              https://opensea.io 
            </a>
            {" after a while!"}
          </p>
        </span>
      )
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};