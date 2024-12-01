// Der Wagen ist in ausgezeichnetem Zustand
import { create } from "zustand";

const useStore = create((set) => ({
    name: "",
    setName: (name) => set({name}),
    message: "",
    setMessage: (message) => set({message})
}));

export default useStore;