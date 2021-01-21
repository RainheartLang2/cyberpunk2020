import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {CharacterStore} from "../../stores/CharacterStore";
import {Button, TextField} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {OriginType} from "../../stores/logics/beans/OriginType";
import {FamilyRankings} from "../../stores/logics/beans/Constants";
import {roll10} from "../../util/Util";

@inject("characterStore")
@observer
export default class CharBackground extends Component<Properties> {
    render() {
        const store = this.props.characterStore!
        return (
            <div>
                <div>
                    <TextField
                        label={"Имя"}
                        value={store.name}
                        onChange={event => store.setName(event.currentTarget.value)}
                    />
                    <TextField
                        label={"Фамилия"}
                        value={store.lastName}
                        onChange={event => store.setLastName(event.currentTarget.value)}
                    />
                    <InputLabel id="originLabel">Происхождение</InputLabel>
                    <Select
                        labelId="originLabel"
                        id="origin"
                        value={store.origin}
                        onChange={event => {
                            store.setOrigin(event.target.value as OriginType)
                        }}
                    >
                        {Object.keys(OriginType).map(key => {
                            return (
                                <MenuItem value={key}>key</MenuItem>
                            )
                        })}
                    </Select>
                    <InputLabel id="familyRankingLabel">Статус семьи</InputLabel>
                    <Select
                        labelId="familyRankingLabel"
                        id="familyRanking"
                        value={store.familyRanking}
                        onChange={event => store.setFamilyRanking(event.target.value as string)}
                    >
                        {FamilyRankings.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                    </Select>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        onClick={() => store.setFamilyRanking(FamilyRankings[roll10() - 1])}
                    >
                        Roll
                    </Button>
                </div>
            </div>
        )
    }
}

type Properties = {
    characterStore?: CharacterStore
}