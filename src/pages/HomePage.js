import React from 'react'
import NavBar from './../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Container } from '@material-ui/core'

export default function HomePage() {
    return (
        <>
            <NavBar />
            <Container  
                maxWidth="md"
                style={{
                    marginTop:""
                }}
            >
                <Outlet />
            </Container>
        </>
    )
}
