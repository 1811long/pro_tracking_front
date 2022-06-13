import React from 'react'
import NavBar from './../components/NavBar'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useEffect } from 'react';
import SummonerCard from '../components/SummonerCard';
import HistoryCard from '../components/HistoryCard';
import APIController from '../APIController';
import Button from '@mui/material/Button';

export default function HomePage() {
    const [nameSummoner, setNameSummoner] = useState('')
    const [infoSummoner, setInfoSummoner] = useState()

    // useEffect(() => {
    //     if (nameSummoner == '') return
    //     APIController
    //         .getSummonerByName(nameSummoner)
    //         .then((res) => {
    //             setInfoSummoner(res)
    //         })
    // }, [nameSummoner])

    function onNameSummonerChange(e) {
        setNameSummoner(e.target.value)
    }

    function onSubmit(e) {
        setInfoSummoner(null)
        APIController
            .getSummonerByName(nameSummoner)
            .then((res) =>
                setInfoSummoner(res)
            )
    }

    return (
        <>
            <NavBar />
            <Container
                maxWidth="md"
                style={{
                    marginTop: ""
                }}
            >
                <h1
                    style={{ textAlign: 'center' }}
                >
                    Entrer le nom de l'invocateur
                </h1>
                <TextField
                    id="outlined-basic"
                    value={nameSummoner}
                    onChange={onNameSummonerChange}
                    label="Entrer le nom de l'invocateur"
                    variant="outlined"
                    fullWidth
                />
                <br></br>
                <br></br>
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                </div>
                <SummonerCard infoSummoner={infoSummoner} />
                <HistoryCard infoSummoner={infoSummoner} />
            </Container>

        </>
    )
}
