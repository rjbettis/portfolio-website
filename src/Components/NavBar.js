import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
    fontSize: 15,
  },
  title: {
    flexGrow: 1,
    fontSize: 24,
    textAlign: 'left',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography color="inherit" className={classes.title}>
            Ryan Bettis's Portfolio
          </Typography>

          <Button
            color="inherit"
            className={classes.menuButton}
            href="https://my-portfolio-storage.s3.amazonaws.com/Ryan_Bettis_Resume.pdf"
          >
            Resume
          </Button>
          <Button
            color="inherit"
            className={classes.menuButton}
            href="https://github.com/rjbettis"
          >
            GitHub
          </Button>

          <Button
            color="inherit"
            className={classes.menuButton}
            href={'mailto:ryanbettis@gmail.com'}
          >
            Email
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
