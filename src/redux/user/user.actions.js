import { UserActionTypes } from "./user.types"

// setting up case string to match for reducer
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})