import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {CharacterStore} from "../../stores/CharacterStore";
import {CharAttributeField} from "./support/CharAttributeField";

interface CharAttributesProps {
    characterStore?: CharacterStore
}

@inject("characterStore")
@observer
class CharAttributes extends Component<CharAttributesProps> {
    render() {
        const store = this.props.characterStore!
        const {attributes} = store;
        return (
            <>
                <CharAttributeField
                    label={"INT"}
                    value={attributes.int}
                    change={store.setInt}
                />
                <CharAttributeField
                    label={"REF"}
                    value={attributes.ref}
                    change={store.setRef}
                />
                <CharAttributeField
                    label={"TECH"}
                    value={attributes.tech}
                    change={store.setTech}
                />
                <CharAttributeField
                    label={"COOL"}
                    value={attributes.cool}
                    change={store.setCool}
                />
                <CharAttributeField
                    label={"ATTR"}
                    value={attributes.attr}
                    change={store.setAttr}
                />
                <CharAttributeField
                    label={"LUCK"}
                    value={attributes.luck}
                    change={store.setLuck}
                />
                <CharAttributeField
                    label={"MA"}
                    value={attributes.ma}
                    change={store.setMA}
                />
                <CharAttributeField
                    label={"BODY"}
                    value={attributes.body}
                    change={store.setBody}
                />
                <CharAttributeField
                    label={"EMP"}
                    value={attributes.emp}
                    change={store.setEmp}
                />
            </>
        )
    }
}

export default CharAttributes;