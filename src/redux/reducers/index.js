const initial = {

}

export default function reducer(state = initial, action ){
    switch (action.type) {
        case 'SET_TITLE': {
            return {
                ...state,
                title: [
                    ...state.title,
                    ...action.payload
                ]
            }
        }
        case 'SET_DESCRIPTION': {
            return {
                ...state,
                description: [
                    ...state.description,
                    ...action.payload
                ]
            }
        }
        default:
            return state
    }
}