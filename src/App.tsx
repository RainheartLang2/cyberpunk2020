import React, {Component} from "react";
import "./App.css";
import {observer} from "mobx-react";
import {CharacterStore} from "./stores/CharacterStore";
import CharAttributes from "./components/character/CharAttributes";

interface AppProps {
  characterStore?: CharacterStore
}

@observer
class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <CharAttributes/>
      </div>
    );
  }
}

export default App;
