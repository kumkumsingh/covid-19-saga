
import axios from 'axios';
import { baseUrl } from '../../constants'
import { put } from 'redux-saga/effects'
import * as actions from '../actions'

export function* getCountries(action){
    try{
        const response = yield axios.get(`${baseUrl}/summary`)
        console.log('from country',response.data)
        yield put(actions.countries(response.data))
    }
    catch(error){
        console.error(error)

    }
}