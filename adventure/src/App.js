import React, { Component } from "react";
import "./App.css";
import scenes from "./scenes.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sceneNum: 0
    };
  }

  sendToHandler = sendTo => {
    this.setState({ sceneNum: sendTo });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" id="lol">
            ADVENTURE OF A BOOTCAMP DEVELOPER
          </h1>
        </header>
        <div id='bod' className="App-intro">
          <p id='pp'>{scenes[this.state.sceneNum].text}</p>
          <hr />

          <img src={scenes[this.state.sceneNum].image} id='im'/>
          <hr />

          {scenes[this.state.sceneNum].options.map((op, i) => (
            <div key={i}>
              <button id="but" onClick={() => this.sendToHandler(op.send_to)}>
                {op.text}
              </button>
              <hr />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
