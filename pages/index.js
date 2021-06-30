import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import SideBar from "../components/SideBar";
import Link from 'next/link';
import CardBicorn from "../components/cardBicorn";

export default function Home() {

  const [classNameNap, setClassNameNap] = useState('linkContainer')
  const [classNameHome, setClassNameHome] = useState('linkContainer')
  const [classNameLottery, setClassNameLottery] = useState('linkContainer')
  const [classNameHives, setClassNameHives] = useState('linkContainer')
  const [classNameStakes, setClassNameStakes] = useState('linkContainer');

  useEffect(() => {
    setClassNameHome('linkContainerPink')
  })

  return (
    <React.Fragment>
      <Head>
        <title>Bircorn</title>
      </Head>
      <div className="indexContainer">
        <SideBar classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
      <div className="main">
        <div className="imgContainer">
          <div className="cardsContainer container">
            <div className="row mb-4">
              <div className="col">
                <CardBicorn />
              </div>
              <div className="col">
                <div className="cardBicorn">
                  <h3>Your Lottery Winnings</h3>
                  <img src={'/comingSoon.png'} alt="" className="logoCarre mb-3"/>
                  <p className="comingSoon">Comming Soon</p>
                  <div className="buttonContainer">
                    <Link href="#" >
                      <p className="unlocked">Unlock Wallet</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 mb-4">
              <div className="col">
                <div className="miniCard">
                  <h5 className="textColor">Earn up to</h5>
                  <h4 className="earn">855.15%</h4>
                  <h5 className="textColor">APR in Farms</h5>
                  <div className="flex justify-content-between image">
                    <div>
                    </div>
                    <div>
                      <img src={'/arrowRight.png'} alt="" className="imgFleche"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="miniCardRose miniCard">
                  <h5 className='earnWhite'>TVL</h5>
                  <h4 className="tokenName">$132,356,112</h4>
                  <div className="flex justify-content-between imageWhite">
                    <div>
                      <h5 className="earnWhite">Across all Farms And Pools</h5>
                    </div>
                    <div>
                      <img src={'/arrowhite.png'} alt="" className="imgFleche2"/>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col">
                <div className="miniCard">
                  <h5 className="textColor mb-4">Lottery</h5>
                  <h4 className="comming">Comming Soon</h4>
                  <div className="flex justify-content-between image">
                    <div>
                    </div>
                    <div>
                      <img src={'/arrowRight.png'} alt="" className="imgFleche"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="cardStats">
                  <h3 className="textColor2 mb-4">Bicorn stats</h3>
                  <div className="flex justify-content-between">
                    <p className="bicorn">Market Cap</p>
                    <div>
                      <p className="price">$16,256,170</p>
                    </div>
                  </div>
                  <div className="flex justify-content-between">
                    <p className="bicorn">Total Minted</p>
                    <p className="price">110,415,152</p>
                  </div>
                  <div className="flex justify-content-between">
                    <p className="bicorn">Total Burned</p>
                    <p className="price">9,019,894</p>
                  </div>
                  <div className="flex justify-content-between">
                    <p className="bicorn">Total Locked Rewards</p>
                    <p className="price">22,567,794</p>
                  </div>
                  <div className="flex justify-content-between">
                    <p className="bicorn">Circulating Supply</p>
                    <p className="price">78,827,464</p>
                  </div>
                  <div className="flex justify-content-between">
                    <p className="bicorn">Max Tx Amount</p>
                    <p className="price">88,332</p>
                  </div>
                  <div className="flex justify-content-between">
                    <p className="bicorn">New Bicorn/Block</p>
                    <p className="price">75</p>
                  </div>
                  <div className="flex justify-content-between">
                    <p className="bicorn">Transfer Tax</p>
                    <p className="price">2.0%</p>
                  </div>
                </div>

              </div>

              <div className="col">
                <div className="cardStats">
                  <h3 className="textColor2">Bicorn Token</h3>
                  <h5 className="tokenAdress">Token Adress</h5>
                  <h4 className="adress">0x53636336ATA662733DGDHd54353gsgCD426</h4>
                  <div className="flex">
                    <div className="buttonContainer">
                      <p className="addmetamask">Add Bicorn to Metamask</p>
                    </div>
                    <div className="buttonContainer">
                      <p className="addmetamask">Buy Bicorn token</p>
                    </div>
                  </div>
                </div>
              </div>

              <hr style={{borderTop: "1px solid black", width: "2px"}}/>

            </div>
          </div>
        </div>

        <div className="connect">
          <div className="buttonContainer buttonConnect">
            <p className="white connectText">Connect</p>
          </div>
        </div>

      </div>
      </div>
</React.Fragment>
  )
}
