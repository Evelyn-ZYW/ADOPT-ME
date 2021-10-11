import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    // ...[1, 2, 3, 4].map(i => React.createElement('h2', {}, i)),
    React.createElement(Pet, {
      name: "Missing",
      animal: "Cat",
      breed: "mixed",
    }),
    React.createElement(Pet, {
      name: "Erpang",
      animal: "Cat",
      breed: "British Shorthair",
    }),
    React.createElement(Pet, {
      name: "Dog",
      animal: "Dog",
      breed: "Labrador cross",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
