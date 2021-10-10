const Pet = () => {
  return React.createElement("div", {}, [

  ])
}

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement(
      'h1',
      {},
      React.createElement('span', {}, 'adopt me')
    )
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);