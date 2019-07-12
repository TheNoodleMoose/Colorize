import React, { Component } from "react";
import ColorsList from "./ColorsList";

// Container Component - "A container does data fetching and then renders its corresponding sub-component. That’s it."
class ColorListContainer extends Component {
  constructor() {
    super();
    this.state = { colors: [], savedColors: [], savedCount: 5 };
  }

  componentDidMount() {
    this.GetColor();
  }

  GetColor() {
    if (this.state.savedCount > 0) {
      fetch(
        `https://api.noopschallenge.com/hexbot?count=${this.state.savedCount}`,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json"
            // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer" // no-referrer, *client
        }
      )
        .then(response => {
          return response.json();
        })
        .then(res => {
          this.setState({
            colors: res.colors
          });
        });
    }
  }

  render() {
    return (
      <>
        <ColorsList
          colors={this.state.colors}
          savedColors={this.state.savedColors}
          savedCount={this.state.savedCount}
          saveColor={(target, color) => {
            let array = [...this.state.colors];
            let index = array.indexOf(target);

            if (index !== -1) {
              array.splice(index, 1);
              this.setState({ colors: array });
            }
            this.setState({
              savedColors: [...this.state.savedColors, color],
              savedCount: this.state.savedCount - 1
            });
          }}
        />
        <button onClick={() => this.GetColor()}>Get New Colors</button>
        <button
          onClick={async () => {
            await this.setState({
              savedCount: 5,
              savedColors: []
            });
            this.GetColor();
          }}
        >
          Reset Colors
        </button>
      </>
    );
  }
}

export default ColorListContainer;
