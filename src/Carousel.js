import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  render() {
    //state is mutable, which means I can call setState and modify what active is. It is self-contained, which means it's always contained within the component itself. Props can be state of a parent component, and the only thing that can modify state is the component that contains it.
    const { active } = this.state;
    //prop is what's comming from its parents (one-way data flow). This is read-only, meaning I cannot change props, only the parent can change props.
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
