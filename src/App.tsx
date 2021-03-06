import React, { useEffect } from "react";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import "./App.scss";
import MyGallery from "./containers/gallery/Gallery";
import Welcome from "./containers/main/Welcome";
import Services from "./containers/servicios/Services";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <HashRouter>
      <div>
        <ScrollToTop />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        {/* <BrowserRouter basename="/xanastur_concept" /> */}
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/servicios">
            <Services />
          </Route>
          <Route path="/galeria">
            <MyGallery />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
