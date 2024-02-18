'use client'

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const MetaMaskButton = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const handleConnect = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setCurrentAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
    } else {
      console.log('Navegador no-Ethereum detectado. Considera probar MetaMask!');
    }
  };

  useEffect(() => {
    const connectButton = document.getElementById("connectButton");
    connectButton.addEventListener('click', handleConnect);

    return () => {
      connectButton.removeEventListener('click', handleConnect);
    };
  }, []);

  const handleLogout = () => {
    setCurrentAccount(null);
  };

  return (
    <div>
      {currentAccount ? (
        <div>
          <p id="account">Connected Account: {currentAccount}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleConnect} id="connectButton">Connect to Ethereum</button>
      )}
    </div>
  );
};

export default MetaMaskButton;
