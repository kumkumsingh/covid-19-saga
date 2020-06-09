import "./HomePage.css";
import React, { Suspense } from "react";
import { Header, Footer, ErrorBoundary } from "../index.js";

const WorldTotal = React.lazy(() =>
  import("../WorldTotal/WorldTotalContainer")
);
const CountriesContainer = React.lazy(() =>
  import("../Countries/CountriesContainer")
);

export default function HomePage() {
  return (
    <React.Fragment>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ErrorBoundary>
          <Header />
          <WorldTotal />
          <CountriesContainer />
          <Footer />
        </ErrorBoundary>
      </Suspense>
    </React.Fragment>
  );
}
