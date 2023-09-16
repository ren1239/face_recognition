import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import { React, Component } from "react";
import Rank from "./Components/Rank/Rank";

import ParticlesBg from "particles-bg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log("click");
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg
          className="background"
          type="cobweb"
          bg={true}
          color="#FFFFFF"
          num={300}
        />
        <Navigation />
        <Rank />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        {/* 
      <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;
