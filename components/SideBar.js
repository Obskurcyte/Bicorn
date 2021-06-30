import React, {Component, useEffect, useState} from "react";
import MetisMenu from "metismenujs";
import SimpleBar from "simplebar-react";
import Link from "next/link";

const SideBar = props => {

  return (
    <div className="container-sideBar">
      <img src={'/bicornLogo2.png'} alt="" className="bicornSideBarLogo"/>
      <Link href='/'>
      <div className={props.classNameHome}>
        <img src={'/homeicon.png'} alt=""/>
          <p>Home</p>
      </div>
      </Link>
      <div className="linkContainer">
        <img src={'/Tradeicon.png'} alt=""/>
        <p>Trade</p>
      </div>
      <Link
        href={'/hives'}
      >
      <div className={props.classNameHives}>
        <img src={'/Hivesicon.png'} alt=""/>

          <p>Hives</p>

      </div>
      </Link>
      <Link href={'/stakes'}>
        <div className={props.classNameStackes}>
          <img src={'/StakesIcon.png'} alt=""/>
          <p>Stakes</p>
        </div>
      </Link>
      <Link href={'/nap'}>
      <div className={props.classNameNap}>
        <img src={'/NapIcon.png'} alt="" />
          <p>Nap</p>
      </div>
      </Link>
      <Link href={'/lottery'}>
        <div className={props.classNameLottery}>
          <img src={'/Lotteryicon.png'} alt=""/>

            <p>Lottery</p>

        </div>
      </Link>
      <div className="linkContainer">
        <img src={'/NFTsIcon.png'} alt=""/>
        <p>N-FTs</p>
      </div>
      <div className="linkContainer">
        <img src={'/INOICon.png'} alt=""/>
        <p>INO</p>
      </div>
      <div className="linkContainer">
        <img src={'/TeamIcon.png'} alt=""/>
        <p>Team & Profile</p>
      </div>
      <div className="linkContainer">
        <img src={'/FeaturesIcon.png'} alt=""/>
        <p>Features</p>
      </div>
      <div className="linkContainer">
        <img src={'/CivilcodeIcon.png'} alt=""/>
        <p>Civil Code</p>
      </div>
      <div className="linkContainer">
        <img src={'/ConquestIcon.png'} alt=""/>
        <p>Conquest</p>
      </div>

      <div className="links">
        <div className="linksMiniContainer flex">
          <div className="miniTotal flex">
            <img src={'/LogoBicorn.png'} alt="" className="logoImage"/>
            <h5 className="priceMini">12, 984€</h5>
          </div>
          <div className="flex">
            <img src={'/Mapicon.png'} alt="" className="logoImage"/>
            <p className='lang'>EN</p>
          </div>
        </div>

          <div className="linksMiniContainer2 flex">
            <img src={'/githubIcon.png'} alt="" className="img-links"/>
            <img src={'/Twittericon.png'} alt="" className="img-links"/>
            <img src={'/Mailicon.png'} alt="" className="img-links"/>
          </div>
        </div>

      <div className="black">

      </div>
      </div>
  )
}

export default SideBar
