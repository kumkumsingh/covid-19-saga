import './HomePage.css'
import React , { Suspense }from 'react'
import { Header , Footer , ErrorBoundary} from '../index.js'

const WorldTotal = React.lazy(() => import('../WorldTotal/WorldTotalContainer'));
const CountriesContainer = React.lazy(() => import('../Countries/CountriesContainer'));

export default function HomePage() {
    return (
        <React.Fragment>
              <Header/> 
              <Suspense fallback={<h2>Loading...</h2>}>
              <ErrorBoundary>
              <WorldTotal/>
              </ErrorBoundary>
              <ErrorBoundary>
              <CountriesContainer/> 
              </ErrorBoundary>
              </Suspense>
              <Footer/>   
        </React.Fragment>
    )
}
