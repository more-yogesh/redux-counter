import { INCREMENT, DECREMENT } from './../action/counter.action'

export const initialState = {
    mainCounter: 10,
    wishList: [],
    cart: []
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log('DONE');
            return { ...state, mainCounter: state.mainCounter + 1 }
        case DECREMENT:
            return { ...state, mainCounter: state.mainCounter - 1 }
        default:
            return state;
    }
}