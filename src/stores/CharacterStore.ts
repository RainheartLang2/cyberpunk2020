import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

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
        this.attributes.int = int
    }

    @action.bound
    public setRef(ref: number): void {
        this.attributes.ref = ref
    }

    @action.bound
    public setTech(tech: number): void {
        this.attributes.tech = tech
    }

    @action.bound
    public setCool(cool: number): void {
        this.attributes.cool = cool
    }

    @action.bound
    public setMA(ma: number): void {
        this.attributes.ma = ma
    }

    @action.bound
    public setBody(body: number): void {
        this.attributes.body = body
    }

    @action.bound
    public setEmp(emp: number): void {
        this.attributes.emp = emp
    }

    @action.bound
    public setAttr(attr: number): void {
        this.attributes.attr = attr
    }

    @action.bound
    public setLuck(luck: number): void {
        this.attributes.luck = luck
    }
}
