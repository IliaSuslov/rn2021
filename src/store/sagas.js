import { takeEvery, put, call } from 'redux-saga/effects'
import { showLoader, hideLoader } from './actions'
import { FETCH_POSTS, REQUEST_POSTS } from './types'
import {RapidapiKey} from "../../api_key.json"

console.log(RapidapiKey);
export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchRoutes)
        yield put({ type: FETCH_POSTS, payload })
        yield put(hideLoader())
    }
    catch (e) {
        console.log('Error', e);
    }

}


async function fetchRoutes() {
    const response = await
        fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/en-EN/SVO-sky/JFK-sky/2021-04", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": RapidapiKey,
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
            }
        })
    return await response.json()
}
