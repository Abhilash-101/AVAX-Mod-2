import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Tavern.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [tab, setTab] = useState(undefined);
  const [inputAmount, setInputAmount] = useState(1);
  const [level, setLevel] = useState(0);

  const contractAddress = "0xc5a5C42992dECbae36851359345FE25997F5C42d";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getTab = async() => {
    if (atm) {
      setTab((await atm.getTab()).toNumber());
    }
  }

  const getLevel = async() => {
    if (atm) {
      setLevel((await atm.getLevel()).toNumber());
    }
  }

  const handleInputChange = (event) => {
    setInputAmount(event.target.value);
  };

  const deposit = async() => {
    if (atm) {
      let tx = await atm.deposit(inputAmount);
      await tx.wait();
      getTab();
    }
  }

  const purchasecopper = async() => {
    if (atm) {
      let tx = await atm.purchase(1);
      await tx.wait();
      getTab();

      let lx = await atm.increaseLevel(2);
      await lx.wait();
      getLevel();
    }
  }

  const purchaseIron = async() => {
    if (atm) {
      let tx = await atm.purchase(4);
      await tx.wait();
      getTab();

      let lx = await atm.increaseLevel(5);
      await lx.wait();
      getLevel();
    }
  }

  const purchaseDiamond = async() => {
    if (atm) {
      let tx = await atm.purchase(7);
      await tx.wait();
      getTab();

      let lx = await atm.increaseLevel(8);
      await lx.wait();
      getLevel();
    }
  }

  const purchaseNetherite = async() => {
    if (atm) {
      let tx = await atm.purchase(10);
      await tx.wait()
      getTab();

      let lx = await atm.increaseLevel(15);
      await lx.wait();
      getLevel();
    }
  }

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button className="button-style" onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (tab == undefined) {
      getTab();
    }

    if (level == undefined) {
      getLevel();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p className='bac'>Your Current Point Level : {level}</p>
        <p className='tab'>Your Current Tab: {tab} ETH</p>
        <button className="button-style" onClick={deposit}>Deposit ETH</button>
        <style jsx>{`
        p{
          width: auto;
          font-size: 0.9em;
          font-family: Verdana;
          font-weight: bold;
        }
        .bac{
          color: #AAFF00;
        }
        .tab{
          color: #AAFF00;
        }
        .button-style{
          background-color:  #0073e6;
          border-radius: 1em;
          font-size: 0.9em;
          font-family: Verdana;
          margin: 0 10px;
          padding: 10px;
          cursor: pointer;
          font-weight: bold;
        }
        `}
        </style>
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header><h1 className="title">Welcome to the Server Store</h1></header>
      <div className='parent'>
        <div className='bankDetails'>
          <h2>Enter the amount to deposit in ETH:</h2>
          <input
            type="number"
            value={inputAmount}
            onChange={handleInputChange}
            placeholder="Enter deposit amount in ETH"
            style={{ margin: '10px', 
              padding: '2px',
              fontFamily: 'Tahoma',
              fontSize: '1.5em' }}
          />
        </div>
        <div className="bankDetails">
          {initUser()}
        </div>
      </div>
      <div className='menu'>
          <div className='row'>
              <div className='item'>
              <img 
                  src="https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410&format=original"
                  alt="new" width="200" height="200"
                />
                <h3>Copper 1 ETH</h3>
                <button className="button-style" onClick={purchasecopper}>Buy</button>
              </div>
              <div className='item'>
                <img 
                  src="https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png?849cb&format=original"
                  alt="new" width="200" height="200"
                />
                <h3>Iron 4 ETH</h3>
                <button className="button-style" onClick={purchaseIron}>Buy</button>
              </div>
          </div>
          <div className='row'>
              <div className='item'>
                <img 
                  src="https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00&format=original"
                  alt="new" width="200" height="200"
                />
                <h3>Diamond 7 ETH</h3>
                <button className="button-style" onClick={purchaseDiamond}>Buy</button>
              </div>
              <div className='item'>
                <img 
                  src="https://minecraft.wiki/images/Netherite_Ingot_JE1_BE2.png?79364&format=original"
                  alt="new" width="200" height="200"
                />
                <h3>Netherite 10 ETH</h3>
                <button className="button-style" onClick={purchaseNetherite}>Buy</button>
              </div>
          </div>
      </div>
      <style jsx>{`
        .container {
          background-color:  #333300;
          padding: 2em 0 1em 0;
          text-align: center
        }
        h2{
          font-family: Tahoma;
          font-size: 1em;
        }
        .title{
          background: linear-gradient(to right, #16223F,  #99ff33, #16223F);
          border-radius: 0.7em;
          width: 80vw;
          margin: 0 auto;
          color: #F0E68C;
          padding: 1rem;
          font-family: Tahoma;
          font-size: 2em;
          text-shadow: 
          -3px -3px 0 #000,  
          3px -3px 0 #000,
          -3px  3px 0 #000,
          3px  3px 0 #000;
        }
        .parent {
          border: 5px solid #80461B;
          border-radius: 0.7em;
          width: 70vw;
          margin: 1rem auto;
          text-align: center;
        }
        .bankDetails{
          display: inline-block;
          vertical-align: middle;
          color: #F0E68C;
          border-radius: 1em;
          margin: 1em auto;
          font-size: 1em;
          font-family: Verdana;
        }
        .menu {
          border: 5px solid #80461B;
          border-radius: 0.7em;
          width: 90vw;
          margin: 1rem auto;
          text-align: center;
        }
        .row {
          border-radius: 0.7em;
          margin: 0 auto;
          text-align: center;
        }
        .item {
          border: 1px solid black;
          padding: 0.5em 0.5em 0 0.5em;
          display: inline-block;
          width: 43vw;
        }
        h3{
          color: #F0E68C;
          padding: 0;
          font-family: Tahoma;
          font-size: 1.5em;
          text-shadow: 
          -3px -3px 0 #000,  
          3px -3px 0 #000,
          -3px  3px 0 #000,
          3px  3px 0 #000;
        }
        .button-style{
          background-color:  #0073e6;
          border-radius: .5em;
          font-size: 0.9em;
          font-family: Verdana;
          margin: 0 0 1em 0;
          padding: 10px;
          cursor: pointer;
          font-weight: bold;
        }
      `}
      </style>
    </main>
  )
}
