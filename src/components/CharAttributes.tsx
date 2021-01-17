import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {CharacterStore} from "../stores/CharacterStore";
import {Button, TextField} from "@material-ui/core";
import {roll10} from "../util/Util";

interface CharAttributesProps {
    characterStore?: CharacterStore
}

@inject("characterStore")
@observer
class CharAttributes extends Component<CharAttributesProps> {
    render() {
        const { intelligence, setInt } = this.props.characterStore!;
        return (<div>
            <TextField
                label={"INT"}
                type={"number"}
                value={intelligence}
                onChange={event => setInt(+event.currentTarget.value)}
            />
            <Button
                variant={"contained"}
                onClick={
                    () => {
                        setInt(roll10())
                    }
                }
            >
                roll 10
            </Button>
        </div>)
    }
}

export default CharAttributes;