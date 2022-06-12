import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            borderBottom: "1px",
            padding: "30px",
        },
        name: {
            fontFamily: "Helvetica",
            fontSize: "18px",
            fontWeight: "bold",
            letterSpacing: "-0.77px",
            color: "#242929",
        },
        desc: {
            fontFamily: " Helvetica",
            fontSize: "11px",
            color: "#657070",
        },
        textGrid: {
            height: "100%"
        },
        badge: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            position: 'absolute',
        },
        image: {
            //  backgroundImage: "url(https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg)",
            // backgroundSize: "50%", /* Resize the background image to cover the entire container */
            backgroundPosition: "center", /* Center the image */
            backgroundRepeat: "no-repeat", /* Do not repeat the image */
            height: "150px"
        },
        level: {
            zIndex: 100,
            position: 'absolute',
            color: "#eabd56"
            //  marginTop: "-14px",
            //  backgroundImage: "url('../assets/bglevelbox.png')",
        },
        portrait: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
        }
    }));

export default function SummonerCard({ infoSummoner }) {
    const classes = useStyles();
    const url_icon = "https://ddragon.leagueoflegends.com/cdn/12.1.1/img/profileicon/"

    return (
        <div>
            {infoSummoner &&
                <Grid container direction="row" className={classes.root} spacing={5} 
                >
                    <Grid item xs={2} >
                        <Grid container item xs={10} className={classes.portrait} >

                            <img
                                className={classes.image}
                                src={infoSummoner ? url_icon + infoSummoner.icon_id + ".png" : null}
                            />

                            <Grid item xs={12} className={classes.badge}>
                                <img src={infoSummoner ? require('../assets/bglevelbox.png') : null} />
                                <Typography className={classes.level}>
                                    {infoSummoner ? infoSummoner.level : null}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction="column"
                        spacing={3}
                        item
                        xs={10}
                        alignContent="center"
                    >
                        <Grid
                            item xs={3}
                        >
                        </Grid>
                        <Grid
                            item xs={5}
                            className={classes.name}
                        >
                            Summoner Name : {`${infoSummoner.name}`}
                            <br></br>
                            <br></br>
                            Level : {`${infoSummoner.level}`}
                            <br></br>
                            <br></br>
                            Rank : {`${infoSummoner.rank}`}
                        </Grid>
                    </Grid>
                </Grid>
            }
        </div>
    );
}