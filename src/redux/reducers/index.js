import {LOAD_USERS_SUCCESS} from "./people/action";

const initialPeopleState = {
    loading : false,
    data: null
}

export default function reducer(state = initialPeopleState, action ){
    switch (action.type) {
        case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                loading: true,
                data: action.payload
            }
        }

        // case 'SET_DESCRIPTION': {
        //     return {
        //         ...state,
        //         description: [
        //             ...state.description,
        //             ...action.payload
        //         ]
        //     }
        // }
        default:
            return state
    }
}