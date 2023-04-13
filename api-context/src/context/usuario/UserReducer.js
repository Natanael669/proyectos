import { GET_USERS, GET_PROFILE } from '../Types.js'

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                user: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                userSelected: payload
            }
        default:
            return state;
    }
}