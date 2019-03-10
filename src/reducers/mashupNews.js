import { Map } from 'immutable';
import { GET_NEWS_DATA } from '../actions/mashupNews';

export const initialState = Map();

const mashupNews = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_DATA:
            return state.set('news', action.data);
        default:
            return state;
    }
};


export default mashupNews;
