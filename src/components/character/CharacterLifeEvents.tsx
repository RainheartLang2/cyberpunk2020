import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {CharacterStore} from "../../stores/CharacterStore";
import {Button, TextField} from "@material-ui/core";
import {roll10, roll6} from "../../util/Util";

@inject("characterStore")
@observer
export default class CharacterLifeEvents extends Component<Properties> {
    render() {
        const store = this.props.characterStore!
        console.log(store.lifeEvents.length)
        return (
            <div>
                <div>
                    <TextField
                        label={"Возраст"}
                        type = {"number"}
                        value={store.age}
                        onChange={event => store.setAge(+event.currentTarget.value)}
                    />
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        onClick={() => store.setAge(16 + roll6(2))}
                    >
                        Roll
                    </Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        onClick={() => store.rollNextEvent()}
                        disabled={store.lifeEvents.length >= store.age - 16}
                    >
                        Roll event
                    </Button>
                    {store.lifeEvents.map(item => {
                        return (
                            <div>
                                {item.type}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

type Properties = {
    characterStore?: CharacterStore
}