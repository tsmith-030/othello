import { REGISTER_USER } from "./actionTypes"

export function addUserAction(userRequest) {
    return {
        type: REGISTER_USER,
        user: userRequest
    }
}