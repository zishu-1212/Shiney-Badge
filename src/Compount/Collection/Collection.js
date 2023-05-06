
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { wireNftContractAbi, wireNftContractAddress } from '../../utilies/constant';
import './Collection.css'

export default function Collection({btnTxt}) {

    let [imageArray, setImageArray] = useState([]);
   

   

 
    const allImagesNfts = async () => {
        
        if (btnTxt === "No Wallet") {
            console.log("wallet");
        
        }
        else if (btnTxt === "Wrong Network") {
          
        } else if (btnTxt === "Connect Wallet") {
            console.log("Connect Wallet");
        }
        else {
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
           

            let simplleArray = [];
            let walletOfOwner = await nftContractOf.methods.walletOfOwner(btnTxt).call()
            // let Price100 = await nftContractOf.methods.MinitngPricein_MMX().call()

            let walletLength = walletOfOwner.length
         
            // console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength", walletLength);
            for (let i = 0; i < walletLength; i++) {

                try {
         
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmeMt94Hsz8XJuBmcZ4V2eEPgEvQqsZVoqnYoiFd42nRwD/${walletOfOwner[i]}.gif`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    console.log("check",res);
                    let tokenid = walletOfOwner[i]
                    let dna = "100"
                    simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna, tokenid: tokenid }]
                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }


            
        }
    }


    useEffect(() => {
        allImagesNfts()
    },[]);
    return (
        <div>
            <div>


                <div
                    class="live-auctions-area section-padding-100-50 bg-overlay-2 bg-img"
                // style="background-image: url(bg-shape.jpg);"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h6 class="heading-sub">New Collection</h6>
                                <h2 class="heading-title">All Collections</h2>
                            </div>
                        </div>

                        <div class="row justify-content-center">

                            {
                                imageArray.map((items, idex) => {
                                    return (

                                        <div class="col-sm-6 col-lg-4">
                                            <div class="single-live-auction home-2">
                                                <div class=" home-2">
                                                    <img src={items.imageUrl} alt="Image" width="100%" />
                                                </div>

                                                <div class="collection-text home-2 text-center">
                                                    <a href="#"> NFT ID:{items.tokenid} </a>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
