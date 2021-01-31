// import { FilterCenterFocusTwoTone } from "@material-ui/icons";
// import { readConfigFile } from "typescript";
import React from 'react';
import { Button, makeStyles, Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({

  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    backgroundColor: '#71C9F8',
    overflow: 'hidden',
    position: 'relative',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '53%',
    width: '350%',
    height: '350%',
    transform: 'translate(-50%, -50%)',
  },
  blusideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    marging: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    }
  },
  blusideListInfoIcon: {
    fontSize: 32,
    marginRight: 10,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    overflow: 'hidden',
  },
  loginSideTwitterItem: {
    marginBottom: 40
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,  
    fontSizeAdjust: 32,
    marginBottom: 45,
    marginTop: 20
  } 
}))

export default function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>

      <section className={classes.blueSide}>
        <TwitterIcon color='primary' className={classes.blueSideBigIcon}/>
        <ul className={classes.blusideListInfo}>
          <li className={classes.loginSideTwitterItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blusideListInfoIcon}/>
                Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.loginSideTwitterItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blusideListInfoIcon}/>
                Узнайте,о чем говорят в мире
            </Typography>
          </li>
          <li className={classes.loginSideTwitterItem}>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon className={classes.blusideListInfoIcon}/>
                Присоединяйтесь к общению
            </Typography>
          </li>
        </ul>
      </section>

      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color='primary' className={classes.loginSideTwitterIcon}/>
          <Typography className={classes.loginSideTitle} variant="h4">Узнайте, что происходит в мире сейчас</Typography>
          <Typography style={{marginBottom: 20}}>
            <b>Присоединяйтесь к Твиттеру прямо сейчас</b>
          </Typography>
          <Button style={{marginBottom: 20}} color='primary' variant="contained" fullWidth>Зарегистрироваться</Button>
          <Button color='primary' variant="outlined" fullWidth>Войти</Button>
        </div>
      </section>

    </div>
  )
}