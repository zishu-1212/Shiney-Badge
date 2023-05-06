import React, { useState } from "react";
import { toast } from "react-toastify";

import {
  wireNftContractAbi,
  wireNftContractAddress
} from "../../utilies/constant";
import gif from "../Accest/NFT-unscreen.gif";
import "./Mint.css";
function Mint({btnTxt}) {
  let [value, setValue] = useState(1);

  let [mintPriceWire] = useState(0);

  let [btnTwo, setButtonTwo] = useState("Mint With Eth");

  const myMintWire = async () => {
    // let acc = await loadWeb3();
    // console.log("ACC=",acc)
    
    if (btnTxt === "Connect Wallet") {
      toast.error("No Wallet Connected");
    } else if (btnTxt === "Wrong Network") {
      toast.error("Wrong Newtwork please connect to Ethereum Mainnet");
    } else {
      try {
        setButtonTwo("Please Wait While Processing");

        const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(
          wireNftContractAbi,
          wireNftContractAddress
        );
       
     

       
        let paused = await nftContractOf.methods.paused().call();
       
      //  console.log(paused);
        let totalMintingPriceWire = value * Number(0.015);
        
          if (paused === false) {
          
                totalMintingPriceWire = web3.utils.toWei(
                  totalMintingPriceWire.toString()
                );
                console.log("totalMintingPriceWire", nftContractOf);

               
               
                 await nftContractOf.methods
                  .publicSaleMint(value)
                  .send({
                    from: btnTxt,
                    value:totalMintingPriceWire.toString()
                  });

                toast.success("Transaction Successful");
                setButtonTwo("Mint With ETH");
              
           
          } 
          else {
            toast.error("Paused is False");
            setButtonTwo("Mint With ETH");
          }
       
      }
       catch (e) {
        // console.log("Error while minting ", e);
        toast.error("Transaction failed");
        setButtonTwo("Mint With ETH");
      }
    }
  };



  // const getMydata = async () => {
  //   let acc = await loadWeb3();
  //   // console.log("ACC=",acc)
  //   if (acc == "No Wallet") {
  //     toast.error("No Wallet Connected");
  //   } else if (acc == "Wrong Network") {
  //     toast.error("Wrong Newtwork please connect to test net");
  //   } else {
  //     try {
  //       const web3 = window.web3;
  //       let nftContractOf = new web3.eth.Contract(
  //         wireNftContractAbi,
  //         wireNftContractAddress
  //       );

  //       // let mintingWirePrice = await nftContractOf.methods.ValueinULE().call();
  //       // mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
  //       // mintingWirePrice = parseFloat(mintingWirePrice);
  //       setmintPriceWire(0.015);
  //     } catch (e) {
  //       console.log("Error while getting minting Price");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getMydata();
  // });
  return (
    <div className=" asas">
      <div className="mint">
        <div className="container">
         

          <div className="row">
            <div
              className="col-lg-6 col-md-5 "
              style={{ borderRadius: "15px" }}
            >
              <div class="mint-image welcome-thumb mb-50 item">
                <img src={gif} alt=""  />
              </div>
            </div>
            <div className=" col-lg-6 col-md-7 text-left" style={{textAlign:"left"}} >
            <h3 className="text-left">Mint your BleYd NFT </h3>
          <p className="text-left">
          Mint this badge to get access to premium BleYd staking pools, the more NFTs minted, the more utility will be provided. This NFT will also provide access to the soultrust DAO (coming soon)
          </p>
          <p>Get BleYd badge on App</p>
              <div className="mint-content">
                <div className="mint-item">
                  <div className="quantity">
                    <div className="d-flex">
                      <input
                        className="count-form"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        id="qtyBox"
                      />
                      <div className="top_div_here">
                      <div className="btn-area1 ">
                        <a class="btn btn-box " onClick={() => myMintWire()}>
                          {btnTwo}
                        </a>
                        <p className="fs-4">Price : {mintPriceWire} ETH</p>
                      </div>
                    </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row align-items-center">
        <div className="col-lg-6 col-sm-12">
          <img className="jdjjd m-auto" src={gif} width="" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 text-white text-start">
          <h3>Mint your BleYd NFT </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            tempore sapiente quibusdam alias. 
          </p>
          <p>Get BleYd badge on App</p>
       <div className="d-flex align-items-center">
    <input type="text" className="jfj" />
    <button className='btn btn-lg text-white ms-3'>Minting</button>
</div>
        </div>
      </div> */}
    </div>
  );
}

export default Mint;
