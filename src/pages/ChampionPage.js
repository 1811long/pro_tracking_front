import React from 'react'
import NavBar from './../components/NavBar'
import Container from '@material-ui/core/Container';
import ChampCard from './../components/Card'
import logo from './RiotX_ChampionList_irelia.jpg'
export default function ChampionPage() {
  
  return (
      <>
        <NavBar />
        <ChampCard image={logo} name='Irelia'/>
      </>
)}
  