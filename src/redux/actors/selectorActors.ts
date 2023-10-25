import { RootState } from "../store";

export const selectAllActors = (state: RootState) => state.actors.data;
export const selectEditActors = (state: RootState) => state.actors.editActor;
export const selectCountActors = (state: RootState) => state.actors.count;
