//default value of state for the 1st time when application gets rendered
const INITIAL_STATE = {
    currentUser: null
}

// in action.payload you get updated value of state ... to make react render updated value
// we have to return a new object with old state, action.payload ... returning new object tells
// internals of react to render it again
const userReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}


export default userReducer;