import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import CharAttributes from "./CharAttributes";
import {CharacterStore} from "../../stores/CharacterStore";
import {CharacterCreationStage} from "../../stores/logics/beans/CharacterCreationStage";
import CharBackground from "./CharBackground";
import CharacterLifeEvents from "./CharacterLifeEvents";

@inject("characterStore")
@observer
export default class CreateCharacterComponent extends Component<Properties> {
    render() {
        return (
            <div>
                <h1>
                    Создание персонажа
                </h1>
                {this.props.characterStore!.stage == CharacterCreationStage.Attributes ? <CharAttributes/> : "" }
                {this.props.characterStore!.stage == CharacterCreationStage.Background ? <CharBackground/> : "" }
                {this.props.characterStore!.stage == CharacterCreationStage.LifeEvents ? <CharacterLifeEvents/> : "" }
            </div>
        )
    }
}

type Properties = {
    characterStore?: CharacterStore
}