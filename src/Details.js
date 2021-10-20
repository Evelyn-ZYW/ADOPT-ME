import { Component } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

const data = require("../public/data.json");

class Details extends Component {
  // constructor() {
  //   super();
  //   this.state = { loading: true };
  // }
  state = { loading: true, showModal: false };

  // async componentDidMount() {
  //   //this is called when the component is rendered for the first time
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
  //   );
  //   const json = await res.json();
  //   this.setState(
  //     Object.assign(
  //       {
  //         loading: false,
  //       },
  //       json.pets[0]
  //     )
  //   );
  // }

  componentDidMount() {
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        data[this.props.match.params.id - 1]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    const {
      id,
      animal,
      breed,
      city,
      state,
      description,
      name,
      images,
      showModal,
    } = this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <ThemeContext.Consumer>
                {([theme]) => (
                  <div>
                    <h1>Would you like to adopt {name}?</h1>
                    <div className="buttons">
                      <button
                        onClick={this.adopt}
                        style={{ backgroundColor: theme }}
                      >
                        Yes
                      </button>
                      <button
                        onClick={this.toggleModal}
                        style={{ backgroundColor: theme }}
                      >
                        No, I'm a monster
                      </button>
                    </div>
                  </div>
                )}
              </ThemeContext.Consumer>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
