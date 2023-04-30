import './App.css';
import Buy from './components/Buy';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from "./contract/Lock.json";
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xCa55084Bd6Fe224E8b2E3922Ca66D97bd179203a";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({ method: "eth_requestAccounts" })
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        setState({ provider, signer, contract });
      }
      catch (error) {
        console.log(error);
      }
    }
    connectWallet();
  }, []);
  console.log(state);
  return (
    <div className="App">
      <Buy state={state}></Buy>
    </div>
  );
}

export default App;
