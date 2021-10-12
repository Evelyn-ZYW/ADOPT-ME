// import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

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
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
