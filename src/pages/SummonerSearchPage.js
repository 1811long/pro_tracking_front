import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import SummonerCard from '../components/SummonerCard';
import HistoryCard from '../components/HistoryCard';
import APIController from '../APIController';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

export default function SummonerSearchPage() {

    const [nameSummoner, setNameSummoner] = useState('')
    const [infoSummoner, setInfoSummoner] = useState()
    const [loader, setLoader] = useState(false)

    function onNameSummonerChange(e) {
        setNameSummoner(e.target.value)
    }

    function onSubmit(e) {
        setInfoSummoner(null)
        setLoader(true)
        APIController
            .getSummonerByName(nameSummoner)
            .then((res) =>
                setInfoSummoner(res)
            )
    }

    return (
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
            <HistoryCard infoSummoner={infoSummoner} loader={loader} setLoader={setLoader}/>
        </Container>
    )
}
