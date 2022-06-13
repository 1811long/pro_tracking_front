import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));


export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Pro - Tracking
        </Typography>
        
          <div className={classes.navlinks}>

            <Link to="/" className={classes.link}>
              Home
            </Link>

            <Link to="/champions" className={classes.link}>
              Champions
            </Link>

            <Link to="/about" className={classes.link}>
              Champions on Trending
            </Link>

            <Link to="/contact" className={classes.link}>
              Team Composition
            </Link>
          </div>
         
      </Toolbar>
    </AppBar>
  );
}
