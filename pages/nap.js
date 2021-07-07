import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import SideBar, {SideBarMobile} from "../components/SideBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function Nap() {

  const [classNameNap, setClassNameNap] = useState('linkContainer')
  const [classNameHome, setClassNameHome] = useState('linkContainer')
  const [classNameLottery, setClassNameLottery] = useState('linkContainer')
  const [classNameHives, setClassNameHives] = useState('linkContainer')
  const [classNameStakes, setClassNameStakes] = useState('linkContainer');

  useEffect(() => {
    setClassNameNap('linkContainerPink')
  })

  const [toggle, setToggle] = useState(false);

  const SideBarMobile = props => {

    const [isActive, setIsActive] = useState(false);
    const [viewMobile, setViewMobile] = useState(false);

    const NavBarMobile = () => {
      return (
        <nav>
          <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} color="black" className="bars"/>
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
        {!toggle ? <NavBarMobile /> :

          <div className={!toggle ? "smallSideBar display" : "container-sideBar none"}>
            <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} color="white"/>
            {toggle && (
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
                    <div className={isActive ? "flex-column" : "flex"}>
                      <img src={'/Mapicon.png'} alt="" className={isActive ? "logoImageActive" : "logoImage"}/>
                      <p className={isActive ? 'langActive' : "lang"} >EN</p>
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
            )}

          </div>


        }
      </div>



    )
  }

  return (
    <React.Fragment>
      <Head>
        <title>Nap</title>
      </Head>
      <div className={toggle ? "indexContainer" : "indexContainerUnFlex"}>
        <SideBar classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <SideBarMobile classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <div className="main mainNap">
          <div className="imgContainerNap">
            <div className="comingSoonContainer">
              <h1 className="white comingSoonText">Coming Soon</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
