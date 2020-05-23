import * as actionTypes from './actionTypes'

export const worldTotalFetch = () => ({
    type: actionTypes.WORLD_TOTAL_FETCH,
})

export const worldTotal = data => {
    console.log("response data", data)
    return{
        type: actionTypes.WORLD_TOTAL,
        data
    }
}