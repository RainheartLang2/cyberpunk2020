import {Button, TextField} from "@material-ui/core";
import {roll10} from "../../../util/Util";
import React from "react";

export const CharAttributeField: React.FunctionComponent<Properties> = props => {
        return (
            <div>
                <TextField
                    label={props.label}
                    type={"number"}
                    value={props.value ? props.value : 1}
                    onChange={event => props.change(+event.currentTarget.value)}
                />
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={
                        () => {
                            props.change(roll10())
                        }
                    }
                >
                    roll 10
                </Button>
            </div>
        )
}

export type Properties = {
    label: string,
    value: number,
    change: (value: number) => void
}