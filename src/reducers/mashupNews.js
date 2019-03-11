import { List, Map } from 'immutable';
import { GET_EVENTS_DATA, GET_NEWS_DATA } from '../actions/mashupNews';

export const initialState = Map({
        news: new List(),
        events: new List()
    }
);

const mashupNews = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_DATA:
            return state.set('news', action.data);
        case GET_EVENTS_DATA:
            return state.set('events', action.data);
        default:
            return state;
    }
};


export default mashupNews;
