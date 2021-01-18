import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {Button} from "@material-ui/core";
import CharAttributes from "./CharAttributes";

@inject("characterStore")
@observer
export default class CreateCharacterComponent extends Component<Properties> {
    render() {
        return (
            <div>
                <h1>
                    Создание персонажа
                </h1>
                <div>
                    <CharAttributes/>
                </div>
            </div>
        )
    }
}

type Properties = {

}