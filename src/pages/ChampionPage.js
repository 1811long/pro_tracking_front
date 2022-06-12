import React, { useState, useEffect }from 'react';
import NavBar from './../components/NavBar';
import ChampCard from './../components/Card';
import './ChampionPage.css'
import APIController from '../APIController'
import Container from '@material-ui/core/Container';

const URL_IMAGE = "http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/"

export default function ChampionPage() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    // const fetchChampions = async () => {
    //   try{
    //     const response = await api.get('/champions');
    //     console.log(response)
    //     setChampions(response.data['result']);
    //   }catch (err){
    //     if (err.response){
    //       console.log(err.response.data);
    //       console.log(err.response.status);
    //       console.log(err.response.headers);
    //     }else{
    //       console.log(`Error: ${err.message}`);
    //     }
    //   }   
    // }
   APIController
      .getAllChampions()
      .then((listChampions) => setChampions(listChampions))
  }, [])


  return (
      <>
        <NavBar />
        <Container  
            maxWidth="md"
            style={{
                marginTop:""
            }}
        >
        <div className="card-container">
          <div className="card-grid">
            {!champions
             ? 'pas assos'
              : champions.map(({name, full, sprite }) => (
                  <div className="card-key" key={name}>
                    <ChampCard 
                        name={name}
                        image={URL_IMAGE + full}
                    />
                  </div>
              ))}
          </div>
          
        </div>
        </Container>
      </>
)}
  