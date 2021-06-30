import React, {Component, useEffect, useState} from "react";
import MetisMenu from "metismenujs";
import SimpleBar from "simplebar-react";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from "next/link";

export const SideBarMobile = props => {

  const [isActive, setIsActive] = useState(false)
  return (
    <div className={"container-sideBarActive none"}>
        <div>

            <Link href='/'>
              <div className={"linkContainerActive"}>
                <img src={'/homeicon.png'} alt="" className={"imgActive"}/>
              </div>
            </Link>
            <div className={"linkContainerActive"}>
              <img src={'/Tradeicon.png'} alt="" className={"imgActive"}/>
            </div>
            <Link
              href={'/hives'}
            >
              <div className={"linkContainerActive"}>
                <img src={'/Hivesicon.png'} alt="" className={"imgActive"}/>


              </div>
            </Link>
            <Link href={'/stakes'}>
              <div className={"linkContainerActive"}>
                <img src={'/StakesIcon.png'} alt="" className={"imgActive"}/>

              </div>
            </Link>
            <Link href={'/nap'}>
              <div className={"linkContainerActive"}>
                <img src={'/NapIcon.png'} alt="" className={"imgActive"}/>
              </div>
            </Link>
            <Link href={'/lottery'}>
              <div className={"linkContainerActive"}>
                <img src={'/Lotteryicon.png'} alt="" className={"imgActive"}/>



              </div>
            </Link>
            <div className={"linkContainerActive"}>
              <img src={'/NFTsIcon.png'} alt="" className={"imgActive"}/>

            </div>
            <div className={"linkContainerActive"}>
              <img src={'/INOICon.png'} alt="" className={"imgActive"}/>
            </div>
            <div className={"linkContainerActive"}>
              <img src={'/TeamIcon.png'} alt="" className={"imgActive"}/>
            </div>
            <div className={"linkContainerActive"}>
              <img src={'/FeaturesIcon.png'} alt="" className={"imgActive"}/>
            </div>
            <div className={"linkContainerActive"}>
              <img src={'/CivilcodeIcon.png'} alt="" className={"imgActive"}/>
            </div>
            <div className={"linkContainerActive"}>
              <img src={'/ConquestIcon.png'} alt="" className={"imgActive"}/>
            </div>

            <div className="links">
              <div className="flex-column">
                <div className="flex-column">
                  <img src={'/LogoBicorn.png'} alt="" className="logoImageActive"/>
                  <h5 className="priceMiniActive">12, 984€</h5>
                </div>
                <div className="flex-column">
                  <img src={'/Mapicon.png'} alt="" className="logoImageActive"/>
                  <p className='langActive'>EN</p>
                </div>
              </div>

              <div className= "flex-column" >
                <img src={'/githubIcon.png'} alt="" className="img-linksActive"/>
                <img src={'/Twittericon.png'} alt="" className="img-linksActive"/>
                <img src={'/Mailicon.png'} alt="" className="img-linksActive"/>
              </div>
            </div>

            <div className="black">

            </div>
        </div>
      )}

    </div>



  )
}

const SideBar = props => {

  const [isActive, setIsActive] = useState(false);

  return (
     <div className={isActive ? "container-sideBarActive display" : "container-sideBar display"}>
      <img src={'/bicornLogo2.png'} alt="" className={isActive ? 'active' : "bicornSideBarLogo"}/>
       <FontAwesomeIcon icon={faBars} className="iconBars fa-2x" onClick={() => setIsActive(!isActive)}/>
      <Link href='/'>
      <div className={isActive ? "linkContainerActive" : props.classNameHome}>
        <img src={'/homeicon.png'} alt="" className={isActive ? "imgActive" : ""}/>
          <p className={isActive ? 'active' : ''}>Home</p>
      </div>
      </Link>
      <div className={isActive ? "linkContainerActive" : "linkContainer"}>
        <img src={'/Tradeicon.png'} alt="" className={isActive ? "imgActive" : ""}/>
        <p className={isActive ? 'active' : ''}>Trade</p>
      </div>
      <Link
        href={'/hives'}
      >
      <div className={isActive ? "linkContainerActive" : props.classNameHives}>
        <img src={'/Hivesicon.png'} alt="" className={isActive ? "imgActive" : ""}/>

          <p className={isActive ? 'active' : ''}>Hives</p>

      </div>
      </Link>
      <Link href={'/stakes'}>
        <div className={isActive ? "linkContainerActive" : props.classNameStackes}>
          <img src={'/StakesIcon.png'} alt="" className={isActive ? "imgActive" : ""}/>
          <p className={isActive ? 'active' : ''}>Stakes</p>
        </div>
      </Link>
      <Link href={'/nap'}>
      <div className={isActive ? "linkContainerActive" : props.classNameNap}>
        <img src={'/NapIcon.png'} alt="" className={isActive ? "imgActive" : ""}/>
          <p className={isActive ? 'active' : ''}>Nap</p>
      </div>
      </Link>
      <Link href={'/lottery'}>
        <div className={isActive ? "linkContainerActive" : props.classNameLottery}>
          <img src={'/Lotteryicon.png'} alt="" className={isActive ? "imgActive" : ""}/>

            <p className={isActive ? 'active' : ''}>Lottery</p>

        </div>
      </Link>
      <div className={isActive ? "linkContainerActive" : "linkContainer"}>
        <img src={'/NFTsIcon.png'} alt="" className={isActive ? "imgActive" : ""}/>
        <p className={isActive ? 'active' : ''}>N-FTs</p>
      </div>
      <div className={isActive ? "linkContainerActive" : "linkContainer"}>
        <img src={'/INOICon.png'} alt="" className={isActive ? "imgActive" : ""}/>
        <p className={isActive ? 'active' : ''}>INO</p>
      </div>
      <div className={isActive ? "linkContainerActive" : "linkContainer"}>
        <img src={'/TeamIcon.png'} alt="" className={isActive ? "imgActive" : ""}/>
        <p className={isActive ? 'active' : ''}>Team & Profile</p>
      </div>
      <div className={isActive ? "linkContainerActive" : "linkContainer"}>
        <img src={'/FeaturesIcon.png'} alt="" className={isActive ? "imgActive" : ""}/>
        <p className={isActive ? 'active' : ''}>Features</p>
      </div>
      <div className={isActive ? "linkContainerActive" : "linkContainer"}>
        <img src={'/CivilcodeIcon.png'} alt="" className={isActive ? "imgActive" : ""}/>
        <p className={isActive ? 'active' : ''}>Civil Code</p>
      </div>
      <div className={isActive ? "linkContainerActive" : "linkContainer"}>
        <img src={'/ConquestIcon.png'} alt="" className={isActive ? "imgActive" : ""}/>
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



)
}

export default SideBar
