const initialState = {
    count: 0
}

export const counterReducer = (state=initialState, action) => {
    const {type} = action
    switch (type) {
        case "INCREMENT":
            return {...state, count: state.count+1 }
        case "DECREMENT":
            return {...state, count: state.count > 0 ? state.count-1 : state.count }
        default:
            return state
    }
}