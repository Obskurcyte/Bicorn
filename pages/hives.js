import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from "../components/SideBar";
import Link from 'next/link';
import CardBicorn from "../components/cardBicorn";
import CardHives from "../components/cardHives";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const [classNameNap, setClassNameNap] = useState('linkContainer')
  const [classNameHome, setClassNameHome] = useState('linkContainer')
  const [classNameLottery, setClassNameLottery] = useState('linkContainer')
  const [classNameHives, setClassNameHives] = useState('linkContainer')
  const [classNameStakes, setClassNameStakes] = useState('linkContainer');

  useEffect(() => {
    setClassNameHives('linkContainerPink')
  })

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Head>
        <title>Bircorn</title>
      </Head>
      <div className="indexContainer">
        <SideBar classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <div className="main">
          <div className="imgContainer2">
            {/*} <FormControlLabel
              control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
              label="Stacked Only"
            />
            */}
            <div className="cardsContainer container">
              <div className="row mb-4">
                <div className="col">
                  <CardHives/>
                </div>
                <div className="col">
                  <CardHives/>
                </div>
                <div className="col">
                  <CardHives/>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <CardHives/>
                </div>
                <div className="col">
                  <CardHives/>
                </div>
                <div className="col">
                  <CardHives/>
                </div>
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
    </div>
  )
}
