import React from 'react';
import Link from "next/link";

const CardBicorn = () => {
  return (
    <div className="cardBicorn">
      <h3>Farm & Stacking</h3>
      <img src={'/logocarre.png'} alt="" className="logoCarre"/>
      <p className="harvest">Corn to Harvest :</p>
      <p className="locked mb-3">Locked</p>
      <p className="harvest">Corn to Harvest :</p>
      <p className="locked">Locked</p>
      <div className="buttonContainer">
        <Link href="#" >
          <p className="unlocked">Unlock Wallet</p>
        </Link>
      </div>
    </div>
  );
};

export default CardBicorn;
