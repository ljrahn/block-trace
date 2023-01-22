import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

export const AccountContext = createContext(null);

export default function AccountProvider({ children }) {
  const [_provider, setProvider] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    async function initialConnect() {
      await connectWallet();
    }

    initialConnect();
  }, []);

  async function requestAccount() {
    console.log("Requesting Account...");
    if (window.ethereum) {
      console.log("detected metamask");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(_provider);
    }
  }

  return (
    <AccountContext.Provider
      value={{
        provider: _provider,
        address: walletAddress,
        connect: connectWallet,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
