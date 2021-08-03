import React, {useState} from "react";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from "next/link";



export const SideBarMobile = props => {

  const [isActive, setIsActive] = useState(false);
  const [viewMobile, setViewMobile] = useState(false);

  const NavBarMobile = () => {
    return (
      <nav>
        <FontAwesomeIcon icon={faBars} onClick={() => setViewMobile(true)} color="black"/>
      </nav>
    )
  }

  return (
    <div className={!props.toggle ? "small" : "big"}>
      {!props.toggle ? <NavBarMobile /> :

        <div className={!props.toggle ? "smallSideBar display" : "container-sideBar none"}>
          {viewMobile && (
            <div>
              <Link href='/'>
                <div className={isActive ? "linkContainerActive" : props.classNameHome}>
                    {props.classNameHome === 'linkContainerPink' ? <img src={'/icon (3) - Copie.svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/> : <img src={'/icon (3).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>}
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
          )}

        </div>


      }
    </div>



  )
}

const SideBar = props => {

  const [isActive, setIsActive] = useState(false);

  return (
     <div className={isActive ? "container-sideBarActive display" : "container-sideBar display"}>
        <img src={'/bicornLogo2.png'} alt="" className={isActive ? 'active' : "bicornSideBarLogo"}/>
        <Link href='/'>
        <div className={isActive ? "linkContainerActive" : props.classNameHome}>
            {props.classNameHome === 'linkContainerPink' ? <img src={'/icon (3) - Copie.svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/> : <img src={'/icon (3).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>}
            <p className={isActive ? 'active' : ''}>Home</p>
        </div>
        </Link>
        <div className={isActive ? "linkContainerActive" : "linkContainer"}>
          <img src={'/icon (2).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
          <p className={isActive ? 'active' : ''}>Trade</p>
        </div>
        <Link
          href={'/hives'}
        >
        <div className={isActive ? "linkContainerActive" : props.classNameHives}>
            {props.classNameHives === 'linkContainerPink' ? <img src={'/icon (4) - Copie.svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/> : <img src={'/icon (4).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>}
            <p className={isActive ? 'active' : ''}>Hives</p>
        </div>
        </Link>
        <Link href={'/stakes'}>
          <div className={isActive ? "linkContainerActive" : props.classNameStackes}>
              {props.classNameStackes === 'linkContainerPink' ? <img src={'/icon (5) - Copie.svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/> : <img src={'/icon (5).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>}
            <p className={isActive ? 'active' : ''}>Stakes</p>
          </div>
        </Link>
        <Link href={'/nap'}>
        <div className={isActive ? "linkContainerActive" : props.classNameNap}>
          <img src={'/icon (6).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
            <p className={isActive ? 'active' : ''}>Nap</p>
        </div>
        </Link>
        <Link href={'/lottery'}>
          <div className={isActive ? "linkContainerActive" : props.classNameLottery}>
              {props.classNameLottery === 'linkContainerPink' ? <img src={'/icon (7) - Copie.svg'} alt="" className={isActive ? "imgActive" : "imgSideBar imgLottery"}/> : <img src={'/icon (7).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar imgLottery"}/>}
              <p className={isActive ? 'active' : ''}>Lottery</p>
          </div>
        </Link>
        <div className={isActive ? "linkContainerActive" : "linkContainer"}>
          <img src={'/icon (8).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
          <p className={isActive ? 'active' : ''}>N-FTs</p>
        </div>
        <div className={isActive ? "linkContainerActive" : "linkContainer"}>
          <img src={'/i-con.svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
          <p className={isActive ? 'active' : ''}>INO</p>
        </div>
        <div className={isActive ? "linkContainerActive" : "linkContainer"}>
          <img src={'/icon (9).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
          <p className={isActive ? 'active' : ''}>Team & Profile</p>
        </div>
        <div className={isActive ? "linkContainerActive" : "linkContainer"}>
          <img src={'/icon (10).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
          <p className={isActive ? 'active' : ''}>Features</p>
        </div>
        <div className={isActive ? "linkContainerActive" : "linkContainer"}>
          <img src={'/icon (11).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
          <p className={isActive ? 'active' : ''}>Civil Code</p>
        </div>
        <div className={isActive ? "linkContainerActive" : "linkContainer"}>
          <img src={'/icon (12).svg'} alt="" className={isActive ? "imgActive" : "imgSideBar"}/>
          <p className={isActive ? 'active' : ''}>Conquest</p>
        </div>

        <div className="links">
          <div className={isActive ? "flex-column" : "miniTotal flex"}>
            <div className={isActive ? "flex-column" : "miniTotal flex"}>
              <img src={'/LogoBicorn.png'} alt="" className={isActive ? "logoImageActive" : "logoImage"}/>
              <h5 className={isActive ? "priceMiniActive" : "priceMini"}>12, 984€</h5>
            </div>
          </div>

            <div className={isActive ? "flex-column" : "miniTotal flex linksGit"}>
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
