import { AppBar, Toolbar, IconButton, Button, Switch } from "@material-ui/core";

import { useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useStyles } from './../../atoms/styles';
import { useAuth } from './../../atoms/providers/Auth';

import { IAUth } from './../../atoms/interfaces'

const Appbar: React.FC = () => {
  const { darkMode, setDarkMode } = useAuth() as IAUth;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img
          src={
            theme.palette.type === "dark"
              ? "/images/branco.png"
              : "/images/preto.png"
          }
          alt="logo"
          className={classes.logo}
        />
        <div className={classes.grow} />
        <Switch
          value={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className={classes.icons}
        />
        <IconButton className={classes.icons}>
          <VideoCall />
        </IconButton>
        <IconButton className={classes.icons}>
          <Apps />
        </IconButton>
        <IconButton className={classes.icons}>
          <MoreVert />
        </IconButton>
        <Button
          className={classes.button}
          startIcon={<AccountCircle />}
          variant="outlined"
          color="secondary"
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
