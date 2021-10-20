// import React from "react";
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Results from "./Results";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me"),
//     // ...[1, 2, 3, 4].map(i => React.createElement('h2', {}, i)),
//     React.createElement(Pet, {
//       name: "Missing",
//       animal: "Cat",
//       breed: "mixed",
//     }),
//     React.createElement(Pet, {
//       name: "Erpang",
//       animal: "Cat",
//       breed: "British Shorthair",
//     }),
//     React.createElement(Pet, {
//       name: "Dog",
//       animal: "Dog",
//       breed: "Labrador cross",
//     }),
//   ]);
// };

const App = () => {
  const theme = useState("pink");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        {/* <Pet name="Missing" animal="Cat" breed="Mixed" />
      <Pet name="Erpang" animal="Cat" breed="British Shorthair" />
    <Pet name="Gougou" animal="Dog" breed="Mixed" /> */}
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/animals/:animal">
              <Results />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
