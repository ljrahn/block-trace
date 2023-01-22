import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import AccountProvider from "./Components/providers/AccountProvider";

function App() {
  async function readProduct() {
    //fetch
  }

  return (
    <div className="App mb-5">
      <AccountProvider>
        <NavbarComp />
      </AccountProvider>
    </div>
  );
}

export default App;
