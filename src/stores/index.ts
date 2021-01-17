import { MobxStore } from "./mobxStore";
import { create } from "mobx-persist";
import {CharacterStore} from "./CharacterStore";

interface Stores {
  [key: string]: any;
}

export const stores: Stores = {
  mobxStore: new MobxStore(),
  characterStore: new CharacterStore()
};

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});

Object.keys(stores).map((val) => hydrate(val, stores[val]));
