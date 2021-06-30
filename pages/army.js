import React, {useState} from 'react';
import Head from "next/head";
import SideBar, {SideBarMobile} from "../components/SideBar";

const Army = () => {

  const [classNameNap, setClassNameNap] = useState('linkContainer')
  const [classNameHome, setClassNameHome] = useState('linkContainer')
  const [classNameLottery, setClassNameLottery] = useState('linkContainer')
  const [classNameHives, setClassNameHives] = useState('linkContainer')
  const [classNameStakes, setClassNameStakes] = useState('linkContainer');

  return (
    <React.Fragment>
      <Head>
        <title>Bircorn</title>
      </Head>
      <div className="indexContainer">
        <SideBar classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <SideBarMobile classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <div className="main">
          <div className="referralProgram">
            <h1>BicornSwap Referal Program</h1>
            <p>Share the referal link below to invite your friends and earn 1% of your friends earnings FOREEVER !</p>
          </div>
          <div className="unlockWallet">
            <div className="buttonContainer">
              <p>Unlock Wallet</p>
            </div>
            <p>Unlock wallet to get your unique referral link</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Army;
