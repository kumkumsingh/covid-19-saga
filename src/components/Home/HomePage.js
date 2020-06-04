import './HomePage.css'
import React from 'react'
import { Header , Footer , WorldTotal , CountriesContainer  , ErrorBoundary} from '../index.js'

export default function HomePage() {
    return (
        <React.Fragment>
              <Header/> 
              <ErrorBoundary>
              <WorldTotal/>
              </ErrorBoundary>
              <ErrorBoundary>
              <CountriesContainer/> 
              </ErrorBoundary>
              <Footer/>   
        </React.Fragment>
    )
}
