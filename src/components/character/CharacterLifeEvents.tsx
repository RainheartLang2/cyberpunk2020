import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {CharacterStore} from "../../stores/CharacterStore";
import {Button, TextField} from "@material-ui/core";
import {roll10, roll6} from "../../util/Util";
import {
    DisasterStrike,
    DisasterStrikes,
    DisasterStrikeTexts, FriendTypes, FriendTypeTexts,
    LuckyEvent, LuckyEvents,
    LuckyEventTexts
} from "../../stores/logics/beans/Constants";
import {type} from "os";

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
                    {store.lifeEvents.map((item, index) => {
                        return (
                            <div>
                                <span>
                                    {(index + 17) + ": "}
                                </span>
                                <span>
                                    {this.renderLifeEventName(item.type)}
                                </span>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    onClick={() => store.rerollEvent(index)}
                                    disabled={store.lifeEvents.length >= store.age - 16}
                                >
                                    Reroll
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    renderLifeEventName(event: string): string {
        console.log(event)
        if (!!DisasterStrikes.find(item => item == event)) {
            return DisasterStrikeTexts.get(event as DisasterStrike)!
        } else if (!!LuckyEvents.find(item => item == event)) {
            return LuckyEventTexts.get(event as LuckyEvent)!
        } else if (!!FriendTypes.find(item => item == event)) {
            return "Приобретён друг " + FriendTypeTexts.get(event)!
        }
        console.log("unknown event name " + event)
        return ""
    }
}

type Properties = {
    characterStore?: CharacterStore
}