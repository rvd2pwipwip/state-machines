import React, { Component } from "react";
import galleryMachine from "./galleryMachine.js";

class App extends Component {
  state = {
    gallery: "start", // current finite state
    query: "",
    items: []
  };

  // retrieve current finite state
  transition(action) {
    const currentGalleryState = this.state.gallery;
    const nextGalleryState = galleryMachine[currentGalleryState][action.type];

    if (nextGalleryState) {
      const nextState = this.command(nextGalleryState, action);

      this.setState({
        gallery: nextGalleryState,
        ...nextState // extended state
      });
    }
  }

  // When a state change occurs, commands might be executed.
  command(nextState, action) {
    switch (nextState) {
      case "loading":
        // execute the search command
        this.search(action.query);
        break;
      case "gallery":
        if (action.items) {
          // update the state with the found items
          return { items: action.items };
        }
        break;
      case "photo":
        if (action.item) {
          // update the state with the selected photo item
          return { photo: action.item };
        }
        break;
      default:
        break;
    }
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
