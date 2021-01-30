import React from "react";
import {Button, TextField} from "@material-ui/core";
import {Sibling} from "../../../stores/CharacterStore";
import {GenderType} from "../../../stores/logics/beans/GenderType";
import {RelationTypes} from "../../../stores/logics/beans/Constants";

export const SiblingsMenu: React.FunctionComponent<Properties> = props => {
    console.log(props.siblings)
    return (
        <div>
            <div>
                <TextField
                    label={"Число братьев и сестёр"}
                    type={"number"}
                    value={props.siblings.length}
                    onChange={event => props.setCount(+event.currentTarget.value)}
                />
                {
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        onClick={() => props.rollCount()}
                    >
                        roll 10
                    </Button>
                }
            </div>
            <div>
                {
                    props.siblings.map((item, index) =>
                        (
                            <div>
                                <TextField
                                    label={"Имя"}
                                    value={item.firstName}
                                    onChange={event => props.setSiblingFirstName(event.target.value, index)}
                                />
                                <span>{item.age} лет</span>
                                <span>{item.gender == GenderType.MALE ? "М" : "Ж"}</span>
                                <span>{RelationTypes.get(item.relation)}</span>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

type Properties = {
    siblings: Sibling[]
    setCount: (count: number) => void
    rollCount: () => void
    setSiblingFirstName: (value: string, index: number) => void
}