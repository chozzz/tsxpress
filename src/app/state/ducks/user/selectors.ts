import { RootState } from "@app/state/store";
import { IUserState } from "./reducers";

export const userSelector = (state: RootState): IUserState => state.user;
