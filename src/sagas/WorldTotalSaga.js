import axios from 'axios';
// import request from 'superagent';
import { baseUrl } from '../../constants'
import { put } from 'redux-saga/effects'
import * as actions from '../actions'

export function* getWorldTotal(action){
    try{
        // const response  = yield request.get(`${baseUrl}/world/total`);
        // console.log(response.body)
        // yield put(actions.worldTotal(response.body))
        // or
        const response = yield axios.get(`${baseUrl}/world/total`)
        yield put(actions.worldTotal(response.data))
        console.log("response yield : ",response.data)  
    }
    catch(error){
        console.error(error)

    }
}