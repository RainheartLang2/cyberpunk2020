import {Button} from "@material-ui/core";
import React from "react";

export const AttributesPoints: React.FunctionComponent<Properties> = props => {
    if (props.show) {
        return (
            <div>
            <span>
                Очки:
            </span>
                <span>
                {props.pointsLeft}
            </span>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => props.roll()}
                >
                    Roll
                </Button>
            </div>
        )
    }

    return (
        <></>
    )
}

type Properties = {
    show: boolean,
    pointsLeft: number,
    roll: () => void
}