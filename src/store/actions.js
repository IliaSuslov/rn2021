import { REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, SWITCH_FAV, SWITCH_PAGE } from './types';

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

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