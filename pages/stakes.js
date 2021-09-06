import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Head from 'next/head'
import SideBar, {SideBarMobile} from "../components/SideBar";
import CardHives from "../components/cardHives";
import Switch from '@material-ui/core/Switch';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CardStakes from "../components/cardStakes";
import Dialog from "@material-ui/core/Dialog";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    marginLeft: '500%',
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: 'black',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: 'black',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function Hives() {


  const [classNameNap, setClassNameNap] = useState('linkContainer')
  const [classNameHome, setClassNameHome] = useState('linkContainer')
  const [classNameLottery, setClassNameLottery] = useState('linkContainer')
  const [classNameHives, setClassNameHives] = useState('linkContainer')
  const [classNameStakes, setClassNameStakes] = useState('linkContainer');

  useEffect(() => {
    setClassNameStakes('linkContainerPink')
  })

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
    <div>
      <Head>
        <title>Bicorn</title>
      </Head>
      <div className={toggle ? "indexContainer" : "indexContainerUnFlex"}>
        <SideBar classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <SimpleDialog open={open} onClose={handleClose} classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <SideBarMobile classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes} handleOpen={handleClickOpen}/>
        <div className="main">
          <div className="imgContainer2">
            {/*} <FormControlLabel
              control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
              label="Stacked Only"
            />
            */}
            <div className="cardsContainer container containerBig">
              <div className="flex mb-4">
                <div className="col my-4">
                  <CardStakes/>
                </div>
                <div className="col my-4">
                  <CardStakes/>
                </div>
                <div className="col my-4">
                  <CardStakes/>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="col my-4">
                  <CardStakes/>
                </div>
                <div className="col my-4">
                  <CardStakes/>
                </div>
                <div className="col my-4">
                  <CardStakes/>
                </div>
              </div>
            </div>

            <div className="cardsContainer container containerMedium">
              <div className="flex mb-4">
                <div className="col my-4">
                  <CardStakes/>
                </div>
                <div className="col my-4">
                  <CardStakes/>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="col my-4">
                  <CardStakes/>
                </div>
                <div className="col my-4">
                  <CardStakes/>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="col my-4">
                  <CardStakes/>
                </div>
                <div className="col my-4">
                  <CardStakes/>
                </div>
              </div>
            </div>

            <div className="cardsContainer container containerSmall">
              <CardStakes/>
              <div className="my-4">
                <CardStakes/>
              </div>
              <div className="my-4">
                <CardStakes/>
              </div>
              <div className="my-4">
                <CardStakes/>
              </div>
              <div className="my-4">
                <CardStakes/>
              </div>
              <div className="my-4">
                <CardStakes/>
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
    </div>
  )
}
