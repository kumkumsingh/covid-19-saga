import * as actionTypes from '../actions/actionTypes';

const reducer = (state={}, action={}) =>{
    switch(action.type){
        case actionTypes.WORLD_TOTAL:
            console.log("inside reducer",action.data)
            return action.data
        default:
            return state
    }
}

export default reducer;