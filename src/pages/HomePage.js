import React from 'react'
import NavBar from './../components/NavBar'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useEffect } from 'react';
import SummonerCard from '../components/SummonerCard';

import APIController from '../APIController';


export default function HomePage() {
  const [nameSummoner,setNameSummoner] = useState('')
  const [infoSummoner, setInfoSummoner] = useState()

  useEffect(() =>{
    if (nameSummoner == '') return
    APIController
            .getSummonerByName(nameSummoner)
            .then((res) => {
                setInfoSummoner(res)
            })
  }, [nameSummoner])

  function onNameSummonerChange(e) {
    setNameSummoner(e.target.value)
  }

  return (
    <>  
        <NavBar/>
        <Container  
            maxWidth="md"
            style={{
                marginTop:""
            }}
        >
            <h1
                style={{textAlign:'center'}}
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

        {JSON.stringify(infoSummoner,null,'\t')}
        <SummonerCard infoSummoner={infoSummoner}/>
        </Container>

    </>
  )
}
