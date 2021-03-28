import { FETCH_POSTS, SWITCH_FAV, SWITCH_PAGE } from '../types'

const initialState = {
    page: 'browse'
}
export const fReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, ...action.payload }
        case SWITCH_FAV:

            return {
                ...state, Quotes: state.Quotes.map(Quote => {
                    return action.payload === Quote.QuoteId ? { ...Quote, fav: !Quote.fav } : {...Quote}
                })
            }
        case SWITCH_PAGE:
            return { ...state, page: action.payload }
        default:
            return state;
    }
}
