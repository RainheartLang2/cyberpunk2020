import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {CharacterStore} from "../../stores/CharacterStore";
import {Button, TextField} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {OriginType} from "../../stores/logics/beans/OriginType";
import {ChildhoodTypes, FamilyRankings, FamilyTragedies, ParentStatuses} from "../../stores/logics/beans/Constants";
import {roll10} from "../../util/Util";
import {SiblingsMenu} from "./support/SiblingsMenu";

@inject("characterStore")
@observer
export default class CharBackground extends Component<Properties> {
    render() {
        const store = this.props.characterStore!
        console.log(store.siblings.length)
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
                    <div>
                        <InputLabel id="familyRankingLabel">Статус семьи:</InputLabel>
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
                    <div>
                        <InputLabel id="parentStatusLabel">Родители:</InputLabel>
                        <Select
                            labelId="parentStatusLabel"
                            id="parentStatus"
                            value={store.parentStatus}
                            onChange={event => store.setParentsStatus(event.target.value as string)}
                        >
                            {ParentStatuses.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                        </Select>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={() => store.rollParentsStatus()}
                        >
                            Roll
                        </Button>
                    </div>
                    <div>
                        <InputLabel id="famulyTragedyLabel">Семейная трагедия:</InputLabel>
                        <Select
                            labelId="familyTragedyLabel"
                            id="familyTragedy"
                            value={store.familyTragedy}
                            onChange={event => store.setFamilyTragedy(event.target.value as string)}
                        >
                            {FamilyTragedies.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                        </Select>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={() => store.rollFamilyTragedyStatus()}
                        >
                            Roll
                        </Button>
                        <div>
                            <InputLabel id="childhoodTypeLabel">Детство:</InputLabel>
                            <Select
                                labelId="childhoodTypeLabel"
                                id="childhoodType"
                                value={store.childhood}
                                onChange={event => store.setChildhoodType(event.target.value as string)}
                            >
                                {ChildhoodTypes.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                            </Select>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                onClick={() => store.setChildhoodType(ChildhoodTypes[roll10() - 1])}
                            >
                                Roll
                            </Button>
                        </div>
                        <SiblingsMenu
                            siblings={store.siblings}
                            setCount={store.setSiblingsCount}
                            rollCount={store.rollSiblingsCount}
                            setSiblingFirstName={store.setSiblingFirstName}
                            rollSibling={store.rollSibling}
                        />
                    </div>
                </div>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => store.nextStage()}
                >
                    Далее
                </Button>
            </div>
        )
    }
}

type Properties = {
    characterStore?: CharacterStore
}