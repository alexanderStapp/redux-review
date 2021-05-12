// Initial State
const initialState = {
    count: 0,
    hidden: false
}

// Action Types
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'
const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN'

// Action Builder
export function incrementCount() {
    return {
        type: INCREMENT_COUNT,
        payload: 1
    }
}

export function decrementCount() {
    return {
        type: DECREMENT_COUNT,
        payload: null
    }
}

export function toggleHidden() {
    return {
        type: TOGGLE_HIDDEN,
        payload: null
    }
}

// Reducer
export default function numberReducer(state = initialState, action){
    switch(action.type) {
        case INCREMENT_COUNT:
            return {...state, count: state.count + action.payload}
        case DECREMENT_COUNT:
            return {...state, count: state.count -1}
        case TOGGLE_HIDDEN:
            return {...state, hidden: !state.hidden}
        default:
            return {...state}
    }
}
