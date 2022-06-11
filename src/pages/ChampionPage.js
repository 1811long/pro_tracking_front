import React, { useState, useEffect }from 'react';
import NavBar from './../components/NavBar';
import ChampCard from './../components/Card';
import api from './../utils/api'
import './ChampionPage.css'

export default function ChampionPage() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const fetchChampions = async () => {
      try{
        const response = await api.get('/champions');
        setChampions(response.data['result']);
      }catch (err){
        if (err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }else{
          console.log(`Error: ${err.message}`);
        }
      }   
    }

    fetchChampions();
  }, [])


  return (
      <>
        <NavBar />
        <div className="card-container">
          <div className="card-grid">
            {!champions
             ? 'pas assos'
              : champions.map(({name, full, sprite }) => (
                <>
                  <div className="card-key" key={name}>
                    <ChampCard name={name} image={full}/>
                  </div>
                </>
              ))}
          </div>
        </div>
      </>
)}
  