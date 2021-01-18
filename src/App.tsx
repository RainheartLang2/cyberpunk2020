import React, {Component} from "react";
import "./App.css";
import {observer} from "mobx-react";
import {CharacterStore} from "./stores/CharacterStore";
import CreateCharacterComponent from "./components/character/CreateCharacterComponent";

interface AppProps {
  characterStore?: CharacterStore
}

@observer
class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <CreateCharacterComponent/>
      </div>
    );
  }
}

export default App;
