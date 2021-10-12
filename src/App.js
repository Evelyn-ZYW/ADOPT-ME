// import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

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
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Missing" animal="Cat" breed="Mixed" />
      <Pet name="Erpang" animal="Cat" breed="British Shorthair" />
      <Pet name="Gougou" animal="Dog" breed="Mixed" /> */}
      <Router>
        <Route path="/">
          <SearchParams />
        </Route>
        <Route>
          <Details path="/details/:id" />
        </Route>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
