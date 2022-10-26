import { ethers } from "ethers";
import { useState } from "react";
import styled from "styled-components";
import CommonLayOut from "../components/CommonLayOut";
import { ExternalProvider } from "@ethersproject/providers";
import { MetaMaskFox } from "../assets/svg";

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

const MetaMaskWalletPage = () => {
  const [account, setAccount] = useState<string>();
  const [chainID, setChainID] = useState<number>();
  const [balance, setBalance] = useState<string>();
  const [connectBtnFlag, setConnectBtnFlag] = useState<boolean>(false);

  const connectMetaMaskHandler = async () => {
    if (window.ethereum) {
      try {
        setConnectBtnFlag(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const newAccount = provider.getSigner();

        const address = await newAccount.getAddress();
        const balance = await newAccount.getBalance();
        const chainID = await newAccount.getChainId();

        setAccount(address);
        setBalance(ethers.utils.formatEther(balance));
        setChainID(chainID);
      } catch (error) {
        console.log(error);
      } finally {
        setConnectBtnFlag(false);
        if (chainID === 1) {
          alert(" 이더리움 메인넷에 연결되었습니다.");
        }
      }
    } else {
      alert("MetaMask 확장프로그램을 설치해주세요.");
    }
  };

  return (
    <CommonLayOut>
      <MetaMaskConnectBtn
        onClick={connectMetaMaskHandler}
        disabled={connectBtnFlag}
      >
        <MetaMaskFox />
        {connectBtnFlag ? "loading..." : "connect"}
      </MetaMaskConnectBtn>

      <div>
        {account && <p>account: {account}</p>}
        {chainID && <p>NetWorkID: {chainID}</p>}
        {balance && (
          <p>
            balance: {balance}
            <strong>
              <i> ETH</i>
            </strong>
          </p>
        )}
      </div>
    </CommonLayOut>
  );
};
export default MetaMaskWalletPage;
const MetaMaskConnectBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  cursor: pointer;

  border-radius: 5px;

  background-color: rgb(0, 122, 255);
  border: none;
  color: #fff;
  font-weight: 600;

  path {
    width: 20px;
    height: 20px;
  }
  :disabled {
    animation-name: color-transition;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes color-transition {
    0% {
      background-color: #4c6085;
      border-color: #4c6085;
    }
    33% {
      background-color: #80d39b;
      border-color: #80d39b;
    }
    66% {
      background-color: #be3e82;
      border-color: #be3e82;
    }
    100% {
      background-color: #4c6085;
      border-color: #4c6085;
    }
  }
`;
