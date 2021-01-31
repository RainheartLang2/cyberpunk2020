import {action, IObservableArray, observable} from "mobx";
import {persist} from "mobx-persist";
import {AttributeDistributionType} from "./logics/beans/AttributeDistributionType";
import {roll10, rollCustomDice} from "../util/Util";
import {CharacterCreationStage} from "./logics/beans/CharacterCreationStage";
import {OriginType} from "./logics/beans/OriginType";
import {
    ChildhoodTypes,
    DisasterStrike, DisasterStrikes,
    FamilyRankings,
    FamilyTragedies, LuckyEvent, LuckyEvents,
    ParentStatuses,
    RelationType
} from "./logics/beans/Constants";
import {GenderType} from "./logics/beans/GenderType";

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

export type LifeEvent = {
    type: DisasterStrike | LuckyEvent,
    data: any,
    activate: (data: any) => void
}

export type Sibling = {
    firstName: string,
    age: number,
    gender: GenderType,
    relation: RelationType
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
    @observable parentStatus: string = ParentStatuses[0]
    @observable familyTragedy: string = FamilyTragedies[0]
    @observable childhood: string = ChildhoodTypes[0]
    @persist @observable siblings: IObservableArray<Sibling> = observable.array([], {
        deep: true
    })

    @observable age: number = 16

    @observable lifeEvents: IObservableArray<LifeEvent> = observable.array([])

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

    @action.bound
    public setParentsStatus(value: string) {
        this.parentStatus = value
    }

    @action.bound
    public rollParentsStatus() {
        if (roll10() < 7) {
            this.parentStatus = ParentStatuses[0]
        } else {
            this.parentStatus = ParentStatuses[roll10()]
        }
    }

    @action.bound
    setFamilyTragedy(value: string) {
        this.familyTragedy = value
    }

    @action.bound
    public rollFamilyTragedyStatus() {
        if (roll10() < 7) {
            this.familyTragedy = FamilyTragedies[0]
        } else {
            this.familyTragedy = FamilyTragedies[roll10()]
        }
    }

    @action.bound
    setChildhoodType(value: string) {
        this.childhood = value
    }

    @action.bound
    setSiblingsCount(value: number) {
        console.log(value)
        if (value <= 7) {
            if (this.siblings.length < value) {
                const buffer = this.siblings.slice(0)
                for (let i = buffer.length; i < value; i++) {
                    buffer[i] = this.createRandomSibling()
                }
                this.siblings.replace(buffer)
            } else {
                this.siblings.replace(this.siblings.slice(0, value))
            }
        }
        console.log(this.siblings)
    }

    @action.bound
    setSiblingFirstName(value: string, index: number) {
        this.siblings[index] = {
            ...this.siblings[index],
            firstName: value
        }
    }

    createRandomSibling(): Sibling {
        return {
            firstName: "Трейс",
            age: roll10(4),
            gender: roll10() / 2 == 0 ? GenderType.MALE : GenderType.FEMALE,
            relation: this.rollRelationType()
        }
    }

    rollRelationType(): RelationType {
        const value = roll10()
        if (value < 3) {
            return RelationType.LIKES
        }
        if (value < 5) {
            return RelationType.LIKE_VERY_MUCH
        }
        if (value < 7) {
            return RelationType.NEUTRAL
        }

        if (value < 9) {
            return RelationType.DISLIKES
        }

        return RelationType.DISLIKES_VERY_MUCH
    }

    @action.bound
    rollSiblingsCount() {
        const result = rollCustomDice(20)
        if (result < 5) {
            this.setSiblingsCount(0)
        } else if (result < 10) {
            this.setSiblingsCount(1)
        } else if (result < 14) {
            this.setSiblingsCount(2)
        } else if (result < 17) {
            this.setSiblingsCount(3)
        } else {
            this.setSiblingsCount(result - 13)
        }
    }

    @action.bound
    rollSibling(index: number) {
        this.siblings[index] = {
            ...this.createRandomSibling(),
            firstName: this.siblings[index].firstName
        }
    }

    @action.bound
    setAge(value: number) {
        if (this.age < 16 || this.age > 100) {
            return
        }
        this.age = value
        this.lifeEvents.replace([])
    }

    @action.bound
    rollNextEvent() {
        this.lifeEvents[this.lifeEvents.length] = this.createRandomLifeEvent()
    }

    createRandomLifeEvent() : LifeEvent {
        const roll = roll10()
        if (roll < 4) {
            return this.createRandomLuckOrDisaster()
        } else {
            console.log("life event type not implemented")
            return this.createRandomLuckOrDisaster()
        }
    }

    createRandomLuckOrDisaster(): LifeEvent {
        if (roll10() % 2 == 0) {
            return this.createRandomDisaster()
        } else {
            return this.createRandomLuckyEvent()
        }
    }

    createRandomDisaster(): LifeEvent {
        const roll = roll10()
        const type = DisasterStrikes[roll - 1]
        return {
            type,
            data: {},
            activate: () => {}
        }
    }

    createRandomLuckyEvent(): LifeEvent {
        return {
            type: LuckyEvents[roll10() - 1],
            data: {},
            activate: () => {}
        }
    }
}
