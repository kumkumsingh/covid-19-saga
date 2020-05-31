import './HomePage.css'
import React from 'react'
import { Header , Footer , WorldTotal , CountriesContainer } from '../index.js'

export default function HomePage() {
    return (
        <React.Fragment>
              <Header/> 
              <WorldTotal/>
              <CountriesContainer/> 
              <Footer/>
        </React.Fragment>
    )
}
