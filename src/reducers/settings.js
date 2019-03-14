import { List, Map } from 'immutable';
import { SET_NEWS_SETTINGS } from '../actions/settings';

export const initialState = Map({
        newsSettings: new Map(),
        eventsSettings: new Map(),
        blogsSettings: new Map()
    }
);

const settings = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_SETTINGS:
            return state.set('newsSettings', action.data);
        default:
            return state;
    }
};


export default settings;
