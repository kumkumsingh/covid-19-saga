import * as actionTypes from '../actions/actionTypes';

const reducer = (state=[], action={}) =>{
    switch(action.type){
        case actionTypes.COUNTRIES:
            console.log("inside reducer countries",action.data)
            return action.data
        default:
            return state
    }
}

export default reducer;