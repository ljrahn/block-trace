import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';

function App() {

  const [walletAddress, setWalletAddress] = useState("");
  const [gasPrice, setGasPrice] = useState("");

  async function requestAccount(){
    console.log("Requesting Account...");
    if(window.ethereum){
      console.log('detected');
      try{
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      }catch(error){
        console.log("Error connecting");
      }
    } 
    else{
      alert('Meta Mask not directed');
    }
  }

  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const checkGasPrice = provider.getGasPrice();
      setGasPrice(checkGasPrice);
    }
  }

  async function readProduct(){
      //fetch
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{justifyContent:"space-around"}}>
        <button style={{ background: "white"}} onClick={requestAccount}>Request Account</button>
        <button style={{ background: "white"}} onClick={connectWallet}>Connect Wallet</button><br/>
        <input value="productID"/>
        <button style={{ background: "white"}}>Check Product</button>
        <h2>Wallet Address:{walletAddress|"N/A"}</h2>
        <h2>GasPrice: {gasPrice|"na"}</h2>
        </div>
      </header>
    </div> 
  );
}

export default App;
