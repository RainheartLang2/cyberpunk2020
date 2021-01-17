import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

export interface CharacterStore {
    intelligence: number;
}

export class CharacterStore implements CharacterStore {
    @persist @observable intelligence = 4;

    @action.bound
    public setInt(int: number): void {
        this.intelligence = int
    }
}
