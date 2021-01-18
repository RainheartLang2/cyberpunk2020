import {action, observable} from "mobx";
import {persist} from "mobx-persist";
import {AttributeDistributionType} from "./logics/beans/AttributeDistributionType";
import {roll10} from "../util/Util";

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
}
