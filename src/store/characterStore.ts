import { create } from 'zustand'
import { getData } from '../utilities/getData';

export const useCharacterStore = create<CharacterStore>((set) => ({
  character: <Character>{},
  setCharacter: async () => {
    const res = await getData("characters");
    set({ character: res[0] });
  }
}))