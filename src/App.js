import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Container } from '@mui/system';
import { useState } from 'react';

const API_KEY = 'RGAPI-6f6ffec5-7e24-4c76-b8cc-2e0423ba2f72'

function App() {
  const [playerName,setPlayerName] = useState('')


  function onNameChange(e){
      setPlayerName(e.target.value)
  }

  function onSubmit(e){
      let API_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+playerName+"?api_key="+API_KEY

      let config={
        headers:{
       
        }
      }
      axios
        .get(API_URL,config)
        .then(
          (response) => console.log(response)
        )
  }


  return (
    <Container maxWidth="sm">
      <h1>
        Pro Tracking
      </h1>
      <TextField 
           value = {playerName}
           onChange={onNameChange}
           id="outlined-basic" 
           label="Enter player name" 
           variant="outlined" fullWidth
      />
      <div
        style={{textAlign:'center'}}
      >
          <br></br>
         <Button
            variant="contained"
            onClick={onSubmit}
          >
             Search for player
          </Button>
      </div>
    </Container>
  );
}

export default App;
