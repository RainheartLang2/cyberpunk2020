import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {CharacterStore} from "../../stores/CharacterStore";
import {CharAttributeField} from "./support/CharAttributeField";
import {AttributesDistributionSwitcher} from "./support/AttributesDistributionSwitcher";
import {AttributesPoints} from "./support/AttributesPoints";
import {Button} from "@material-ui/core";

interface CharAttributesProps {
    characterStore?: CharacterStore
}

@inject("characterStore")
@observer
class CharAttributes extends Component<CharAttributesProps> {
    render() {
        const store = this.props.characterStore!
        const {attributes, distributionType} = store;
        return (
            <>
                <AttributesDistributionSwitcher
                    value={distributionType}
                    change={value => store.setDistributionType(value)}
                />
                <AttributesPoints
                    show={store.showAttributePoints()}
                    pointsLeft={store.pointsLeft()}
                    roll={store.rollAttributePoints}
                />
                <CharAttributeField
                    label={"INT"}
                    value={attributes.int}
                    change={store.setInt}
                    showButton={store.showAttributeRollButton()}
                />
                <CharAttributeField
                    label={"REF"}
                    value={attributes.ref}
                    change={store.setRef}
                    showButton={store.showAttributeRollButton()}
                />
                <CharAttributeField
                    label={"TECH"}
                    value={attributes.tech}
                    change={store.setTech}
                    showButton={store.showAttributeRollButton()}
                />
                <CharAttributeField
                    label={"COOL"}
                    value={attributes.cool}
                    change={store.setCool}
                    showButton={store.showAttributeRollButton()}
                />
                <CharAttributeField
                    label={"ATTR"}
                    value={attributes.attr}
                    change={store.setAttr}
                    showButton={store.showAttributeRollButton()}
                />
                <CharAttributeField
                    label={"LUCK"}
                    value={attributes.luck}
                    change={store.setLuck}
                    showButton={store.showAttributeRollButton()}
                />
                <CharAttributeField
                    label={"MA"}
                    value={attributes.ma}
                    change={store.setMA}
                    showButton={store.showAttributeRollButton()}
                />
                <CharAttributeField
                    label={"BODY"}
                    value={attributes.body}
                    change={store.setBody}
                    showButton={store.showAttributeRollButton()}
                />
                <CharAttributeField
                    label={"EMP"}
                    value={attributes.emp}
                    change={store.setEmp}
                    showButton={store.showAttributeRollButton()}
                />
                <Button
                    variant={"contained"}
                    color={"primary"}
                    disabled={!store.attributesDataValid()}
                    onClick={() => store.nextStage()}
                >
                    Далее
                </Button>
            </>
        )
    }
}

export default CharAttributes;