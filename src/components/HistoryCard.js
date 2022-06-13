import React, { useEffect } from 'react'
import APIController from '../APIController'
import { useState } from 'react'
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  GridList,
  GridListTile,
  Paper,
  Typography,
} from "@material-ui/core";
import { border } from '@mui/system';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    gridContainer: {
      padding: "7px",
    },
    firstLine: {
      color: "#5e5e5e",
      fontSize: "13px",
      fontFamily: "AppleSDGothicNeo",
      fontWeight: "bold",
    },
    secondLine: {
      color: "#879292",
      fontSize: "11px",
      fontFamily: "Helvetica",
    },
    appleSDGothicNeo: {
      fontSize: "11px",
      fontFamily: "AppleSDGothicNeo",
      textAlign: "center",
    },
    helveticaF: {
      fontSize: "11px",
      fontFamily: "Helvetica",
      textAlign: "center",
    },
    gridTileStyle: {
      position: "relative",
      float: "left",
      width: "100%",
      maxHeight: "22px",
      maxWidth: "22px",
      minHeight: "22px",
      minWidth: "22px",
      overflow: "hidden",
      // height: '100% !important'
    },
    greenWR: { color: "#2daf7f" },
    redWR: { color: "#d0021b" },
    yellowWR: { color: "#e19205" },
    grey1Color: { color: "#555555" },
    grey2Color: { color: "#555e5e" },
    lightGrey: { color: "#948e8d" },
    blackColor: { color: "333333" },
    textBold: {
      fontWeight: "bold",
    },
    textBig: {
      fontSize: "15px",
    },
    win: {
      backgroundColor: "#b0ceea",
      marginBottom: "8px",
    },
    loose: {
      backgroundColor: "#d6b5b2",
      marginBottom: "8px",
    },
    chipStyleRed: {
      display: "inline-block",
      background: " #ec4f48",
      border: "1px solid #c6443e",
      borderRadius: "15px",
      padding: "2px 4px",
      lineHeight: "1",
      color: "#ffffff",
      marginRight: "2px",
    },
    chipColorPurple: {
      display: "inline-block",
      background: " #8c51c5",
      border: "1px solid #7f3590",
      borderRadius: "15px",
      padding: "2px 4px",
      lineHeight: "1",
      color: "#ffffff",
    },
    chipPadding: {
      padding: "15px",
    }
  })
);

export default function HistoryCard({ infoSummoner }) {
  const classes = useStyles();
  const [matchesInfo, setMatchesInfo] = useState([])

  useEffect(() => {
    
    if (!infoSummoner){
      setMatchesInfo([])
      return
    }

    APIController
      .getHistoryMatchesBySummonerName(infoSummoner.name)
      .then((data) => setMatchesInfo(data))

  }, [infoSummoner])

  function getImageURL(nameChampion) {
    return "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" + nameChampion + ".png"
  }

  return (
    <div className={classes.root}>
      <h2 style={{
        textAlign:'center',
        borderTop:'1px solid black'
      }}>
        Match History 
      </h2>
      {matchesInfo.length > 0 && infoSummoner != null && matchesInfo.map((match, index) => {
        return (
          <Paper
            variant="outlined"
            square
            key={index}
            className={match.isWin ? classes.win : classes.loose}
          >
            <Grid
              container
              spacing={2}
              alignContent="center"
              alignItems="center"
            >
                <Grid 
                 item 
                 alignItems='center'
                 alignContent='center'
                 xs={1}
                 style={{
                  textAlign:"center"
                 }}
                 >
                  <Avatar 
                      src={getImageURL(match.championName)}
                      style={{
                        width: '50px',
                        height: '50px',
                        margin: '0 auto'
                      }}
                    />
                   <strong> {match.championName}</strong>
                </Grid>
                <Grid
                  item
                  xs={2}
                >
                  Kill : {match.kills}
                  <br></br>
                  Deaths : {match.deaths}
                  <br></br>
                  Assist : {match.assits}
                  <br></br>
                  Vision Score: {match.visionScore}
                </Grid>
                <Grid
                  item
                  xs={2}
                >
                 {match.isWin ? "Victory" : "Defeat"}
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  xs={3}
                >
                   <Grid 
                    item
                    xs={6}
                  >
                    {"Since"}
                  </Grid>
                  <Grid 
                    item
                    xs={6}
                    md='auto'
                  >
                    {timeDifference(Date.now(), new Date(match.gameCreation))}
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  xs={2}
                >
                  <Grid 
                    item
                    xs={6}
                    md="auto"
                  >
                    {"Time Length"}
                  </Grid>
                  <Grid 
                    item
                    xs={6}
                  >
                    {returnMinSeconDate(match.gameLength)}
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  xs={2}
                  alignContent="center"
                  style={{
                    textAlign:"center"
                  }}
                >
                    <Grid 
                    item
                    xs={6}
                    md="auto"
                  >
                    {"Level"}
                  </Grid>
                  <Grid 
                    item
                    xs={6}
                  >
                    {match.championLevel}
                  </Grid>
                </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div >
  )
}

function returnMinSeconDate(timestamp) {
  var time = new Date(timestamp * 1000);
  return time.getMinutes() + "m " + time.getSeconds() + "s";
}

function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  }

  else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  }

  else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  }

  else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
  }

  else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
  }

  else {
    return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
  }
}