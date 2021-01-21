import {action, observable} from "mobx";
import {persist} from "mobx-persist";
import {AttributeDistributionType} from "./logics/beans/AttributeDistributionType";
import {roll10} from "../util/Util";
import {CharacterCreationStage} from "./logics/beans/CharacterCreationStage";
import {OriginType} from "./logics/beans/OriginType";
import {FamilyRankings} from "./logics/beans/Constants";

export type CharAttributes = {
    int: number,
    ref: number,
    tech: number,
    cool: number,
    attr: number,
    luck: number,
    ma: number,
    body: number,
    emp: number

}

export class CharacterStore implements CharacterStore {
    @observable stage: CharacterCreationStage = CharacterCreationStage.Attributes
    @observable distributionType: AttributeDistributionType = AttributeDistributionType.Manual
    @observable attributePoints = 50
    showAttributeRollButton = () => this.distributionType == AttributeDistributionType.Roll
    showAttributePoints = () => this.distributionType == AttributeDistributionType.RollPoints
    attributesDataValid = () => this.distributionType != AttributeDistributionType.RollPoints || this.pointsLeft() >= 0

    currentAttributesSum = () => {
        return this.attributes.int
        + this.attributes.ref
        + this.attributes.tech
        + this.attributes.cool
        + this.attributes.attr
        + this.attributes.luck
        + this.attributes.ma
        + this.attributes.body
        + this.attributes.emp
    }

    pointsLeft = () => this.attributePoints - this.currentAttributesSum()
    @persist @observable attributes: CharAttributes = observable(
        {
            int: 3,
            ref: 3,
            tech: 3,
            cool: 3,
            attr: 3,
            luck: 3,
            ma: 3,
            body: 3,
            emp: 3
        }
    )

    @observable name: string = ""
    @observable lastName: string = ""
    @observable origin: OriginType = OriginType.AngloAmerican
    @observable familyRanking: string = FamilyRankings[0]

    @action.bound
    public nextStage(): void {
        this.stage++
    }

    @action.bound
    public setInt(int: number): void {
        if (int > 10) {
            return
        }
        this.attributes.int = int
    }

    @action.bound
    public setRef(ref: number): void {
        if (ref > 10) {
            return
        }
        this.attributes.ref = ref
    }

    @action.bound
    public setTech(tech: number): void {
        if (tech > 10) {
            return
        }
        this.attributes.tech = tech
    }

    @action.bound
    public setCool(cool: number): void {
        if (cool > 10) {
            return
        }
        this.attributes.cool = cool
    }

    @action.bound
    public setMA(ma: number): void {
        if (ma > 10) {
            return
        }
        this.attributes.ma = ma
    }

    @action.bound
    public setBody(body: number): void {
        if (body > 10) {
            return
        }
        this.attributes.body = body
    }

    @action.bound
    public setEmp(emp: number): void {
        if (emp > 10) {
            return
        }
        this.attributes.emp = emp
    }

    @action.bound
    public setAttr(attr: number): void {
        if (attr > 10) {
            return
        }
        this.attributes.attr = attr
    }

    @action.bound
    public setLuck(luck: number): void {
        if (luck > 10) {
            return
        }
        this.attributes.luck = luck
    }

    @action.bound
    public setDistributionType(distributionType: AttributeDistributionType) {
        this.distributionType = distributionType
    }

    @action.bound
    public rollAttributePoints() {
        this.attributePoints = roll10(9)
    }

    @action.bound
    public setOrigin(value: OriginType) {
        this.origin = value
    }

    @action.bound
    public setName(value: string) {
        this.name = value
    }

    @action.bound
    public setLastName(value: string) {
        this.lastName = value
    }

    @action.bound
    public setFamilyRanking(value: string) {
        this.familyRanking = value
    }
}
