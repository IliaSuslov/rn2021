import { REQUEST_POSTS, SWITCH_FAV, SWITCH_PAGE } from './types';

export function switchFav(payload) {
    return {
        type: SWITCH_FAV,
        payload: payload,
    }
}

export function fetchData() {
    return {
        type: REQUEST_POSTS
    }
}
export function switchPage(page) {
    return {
        type: SWITCH_PAGE,
        payload: page,
    }
}