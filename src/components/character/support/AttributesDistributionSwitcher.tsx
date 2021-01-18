import React from "react";
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@material-ui/core";

export const AttributesDistributionSwitcher: React.FunctionComponent<Properties> = props => {
    return (
        <div>
            <FormControl>
                <FormLabel>Способ распределения очков</FormLabel>
                <RadioGroup onChange={event => props.change(+event.currentTarget.value)}>
                    <FormControlLabel checked={props.value == 0 } value="0" control={<Radio />} label="Вручную" />
                    <FormControlLabel checked={props.value == 1} value="1" control={<Radio />} label="Рандомизировать характеристики" />
                    <FormControlLabel checked={props.value == 2} value="2" control={<Radio />} label="Рандомизировать количество очков" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export type Properties = {
    value: number,
    change: (value: number) => void
}