import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers, providers } from 'ethers';
import { gql, graphql } from '@apollo/client';
import IchnaeaAbi from "./IchnaeaCore.json";

function App() {

  const [walletAddress, setWalletAddress] = useState("");
  const [_provider, setProvider] = useState(null);
  const [createdProduct, setCreatedProduct] = useState({
    productName:'',
    productWeight:'',
    companyName: '',
    signer:'',
    location:'',
    productID:'',
    instanceID:'',
    travelMethod:'', 
  });



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
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(_provider);

    }
  }

  async function createProduct(){
    const signer = provider.getSigner();
    const contract = new ethers.Contract("0x539B0723076683e1804c80817B2A0db3FDC9352b", IchnaeaAbi.abi, signer);
    try {
      const transaction = await contract.createProduct(
        {
          productName: createdProduct.productName,
          productWeight: createdProduct.product
        },
        [
          {
            companyName: createdProduct.companyName,
            location: createdProduct.location,
            signer:createdProduct.signer,
            travelMethod: createdProduct.travelMethod,
          }
        ]
      );
      await transaction.wait();
    } catch (err) {
      console.error(`Error`);
    }
  }

    const handleChange = (event) => {
      setCreatedProduct({ ...createdProduct, [event.target.name]: event.target.value });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(createdProduct.companyName);
    setCreatedProduct({ 
      productName:'',
      productWeight:'',
      companyName: '',
      signer:'',
      location:'',
      productID:'',
      instanceID:'',
      travelMethod:'', });
      console.log(createdProduct.companyName);
      createProduct();
  };

  // async function verifyProduct(instanceID){
  //   const ethers = require('ethers');
  //   const wallet = new ethers.Wallet(walletAddress);
  //   ethos.wallet.addAccount(privateKey);
  //   let signedTx = await ethos.wallet.signTransaction(instanceID);
  //   let ethos.eth.sendSignedTransaction(signedTx.rawTransaction);
  // }
  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{justifyContent:"space-around"}}>
        <button style={{ background: "white"}} onClick={requestAccount}>Request Account</button>
        <button style={{ background: "white"}} onClick={connectWallet}>Connect Wallet</button><br/>
        <button style={{ background: "white"}} >Create Product</button><br/>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="companyName" name="companyName" id="companyName" onChange={handleChange} value={createdProduct.companyName}/>
          <input type="text" placeholder="location" name="location" id="location" onChange={handleChange}  value={createdProduct.location}/>
          <input type="text" placeholder="productName" name="productName" id="productName" onChange={handleChange}  value={createdProduct.productName}/>
          <input type="text" placeholder="productType" name="productType" id="productType" onChange={handleChange} value={createdProduct.productType}/>
          <input type="text" placeholder="signer" name="signer" id="signer" onChange={handleChange}  value={createdProduct.signer}/>
          <input type="text" placeholder="productID" name="productID" id="productID" onChange={handleChange}  value={createdProduct.productID}/>
          <input type="text" placeholder="instanceID" name="instanceID" id="instanceID" onChange={handleChange}  value ={createdProduct.instanceID}/>
          <button type="submit" style={{ background: "white"}}>Create Product</button>
        </form>
        <h2>Wallet Address:{walletAddress}</h2>
        </div>
      </header>
    </div> 
  );
}

export default App;
