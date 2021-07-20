import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import SideBar from "../components/SideBar";
import Link from 'next/link';
import CardBicorn from "../components/cardBicorn";
import {SideBarMobile} from "../components/SideBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Dialog from '@material-ui/core/Dialog';



export default function Home() {

  const [classNameNap, setClassNameNap] = useState('linkContainer')
  const [classNameHome, setClassNameHome] = useState('linkContainer')
  const [classNameLottery, setClassNameLottery] = useState('linkContainer')
  const [classNameHives, setClassNameHives] = useState('linkContainer')
  const [classNameStakes, setClassNameStakes] = useState('linkContainer');

  useEffect(() => {
    setClassNameHome('linkContainerPink')
  })


  const [toggle, setToggle] = useState(false);

  const SideBarMobile = props => {

    const [isActive, setIsActive] = useState(false);
    const [viewMobile, setViewMobile] = useState(false);
    const handleClickOpen = props.handleOpen

    console.log(toggle)
    const NavBarMobile = () => {
      return (
        <nav>
          <FontAwesomeIcon icon={faBars} onClick={() => handleClickOpen()} color="black" className="bars"/>
          <div className="connect connectMini none">
            <div className="buttonConnect">
              <p className="white connectText">Connect</p>
            </div>
          </div>
        </nav>
      )
    }

    return (
      <div className={"miniNav"}>
        <NavBarMobile />



      </div>



    )
  }

  function SimpleDialog (props) {
    const { onClose, selectedValue, open } = props;
    const isActive = false

    const handleClose = () => {
      onClose(selectedValue);
    };

    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <div className="container-sideBar-Mobile">
            <div>
              <Link href='/'>
                <div className={isActive ? "linkContainerActive" : props.classNameHome}>
                  <img src={'/icone2.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                  <p className={isActive ? 'active' : ''}>Home</p>
                </div>
              </Link>
              <div className={isActive ? "linkContainerActive" : "linkContainer"}>
                <img src={'/icone3.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                <p className={isActive ? 'active' : ''}>Trade</p>
              </div>
              <Link
                href={'/hives'}
              >
                <div className={isActive ? "linkContainerActive" : props.classNameHives}>
                  <img src={'/iconeAbeille.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>

                  <p className={isActive ? 'active' : ''}>Hives</p>

                </div>
              </Link>
              <Link href={'/stakes'}>
                <div className={isActive ? "linkContainerActive" : props.classNameStackes}>
                  <img src={'/icone5.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                  <p className={isActive ? 'active' : ''}>Stakes</p>
                </div>
              </Link>
              <Link href={'/nap'}>
                <div className={isActive ? "linkContainerActive" : props.classNameNap}>
                  <img src={'/icone6.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                  <p className={isActive ? 'active' : ''}>Nap</p>
                </div>
              </Link>
              <Link href={'/lottery'}>
                <div className={isActive ? "linkContainerActive" : props.classNameLottery}>
                  <img src={'/icone10.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>

                  <p className={isActive ? 'active' : ''}>Lottery</p>

                </div>
              </Link>
              <div className={isActive ? "linkContainerActive" : "linkContainer"}>
                <img src={'/icone8.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                <p className={isActive ? 'active' : ''}>N-FTs</p>
              </div>
              <div className={isActive ? "linkContainerActive" : "linkContainer"}>
                <img src={'/icone4.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                <p className={isActive ? 'active' : ''}>INO</p>
              </div>
              <div className={isActive ? "linkContainerActive" : "linkContainer"}>
                <img src={'/icone9.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                <p className={isActive ? 'active' : ''}>Team & Profile</p>
              </div>
              <div className={isActive ? "linkContainerActive" : "linkContainer"}>
                <img src={'/icone11.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                <p className={isActive ? 'active' : ''}>Features</p>
              </div>
              <div className={isActive ? "linkContainerActive" : "linkContainer"}>
                <img src={'/icone7.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                <p className={isActive ? 'active' : ''}>Civil Code</p>
              </div>
              <div className={isActive ? "linkContainerActive" : "linkContainer"}>
                <img src={'/icone13.png'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
                <p className={isActive ? 'active' : ''}>Conquest</p>
              </div>

              <div className="links">
                <div className={isActive ? "flex-column" : "miniTotal flex"}>
                  <div className={isActive ? "flex-column" : "miniTotal flex"}>
                    <img src={'/LogoBicorn.png'} alt="" className={isActive ? "logoImageActive" : "logoImage"}/>
                    <h5 className={isActive ? "priceMiniActive" : "priceMini"}>12, 984€</h5>
                  </div>
                </div>

                <div className={isActive ? "flex-column" : "miniTotal flex"}>
                  <img src={'/githubIcon.png'} alt="" className={isActive ? "img-linksActive" : "img-links"}/>
                  <img src={'/Twittericon.png'} alt="" className={isActive ? "img-linksActive" : "img-links"}/>
                  <img src={'/Mailicon.png'} alt="" className={isActive ? "img-linksActive" : "img-links"}/>
                </div>
              </div>

              <div className="black">

              </div>
            </div>

        </div>
      </Dialog>
    );
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Bircorn</title>
      </Head>
      <div className={toggle ? "indexContainer" : "indexContainerUnFlex"}>
        <SideBar classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <SideBarMobile classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes} toggle={toggle} handleOpen={handleClickOpen}/>
        <SimpleDialog open={open} onClose={handleClose} classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <div className="main">
        <div className="imgContainer">
          <div className="cardsContainer container">
            <div className="row mb-4 firstRow">
              <div className="col-sm my-3 col-xs-12">
                <CardBicorn />
              </div>
              <div className="col-sm my-3 col-xs-12">
                <div className="cardBicorn">
                  <h3>Your Lottery Winnings</h3>
                  <img src={'/comingSoon.png'} alt="" className="logoCarre mb-3"/>
                  <p className="comingSoon">Coming Soon</p>
                  <div className="buttonContainer">
                    <Link href="#" >
                      <p className="unlocked">Unlock Wallet</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 mb-4 midRow">
              <div className="col-sm my-3 col-xs-12">
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
              <div className="col-sm my-3 col-xs-12">
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
              <div className="col-sm my-3 col-xs-12">
                <div className="miniCard">
                  <h5 className="textColor mb-4">Lottery</h5>
                  <h4 className="comming">Coming Soon</h4>
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
            <div className="row mt-4 rowLast">
              <div className="col-sm my-3 col-xs-12">
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

              <div className="col-sm my-3 col-xs-12">
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

        <div className="connect display">
          <div className="buttonConnect">
            <p className="white connectText">Connect</p>
          </div>
        </div>

      </div>
      </div>
</React.Fragment>
  )
}
