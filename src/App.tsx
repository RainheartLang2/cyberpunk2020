import React, { Component } from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import {CharacterStore} from "./stores/CharacterStore";

interface AppProps {
  characterStore?: CharacterStore
}

@inject("characterStore")
@observer
class App extends Component<AppProps> {
  render() {
    const { intelligence } = this.props.characterStore!;

    return (
      <div className="App">
        <header className="App-header">
          {intelligence}
          <button onClick={this.clickHandler} value="Bob">
            Change Greeting
          </button>
          <button onClick={this.clickHandler} value="World">
            Reset
          </button>
        </header>
      </div>
    );
  }

  private clickHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const { setInt } = this.props.characterStore!;
    setInt(6)
  };
}

export default App;
