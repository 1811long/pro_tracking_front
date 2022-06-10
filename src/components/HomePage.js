import React from 'react'
import NavBar from './NavBar'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export default function HomePage() {
  return (
    <>
        <NavBar/>
        <Container  
            maxWidth="md"
            style={{
                marginTop:"300px"
            }}
        >

            <h1
                style={{textAlign:'center'}}
            >
                Entrer le nom de l'invocateur
            </h1>
            
            <TextField
                id="outlined-basic"
                label="Entrer le nom de l'invocateur"
                variant="outlined" 
                fullWidth
            />

        </Container>
    </>
  )
}
