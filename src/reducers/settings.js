import { List, Map } from 'immutable';
import { SAVE_SETTINGS, SET_BLOGS_SETTINGS, SET_EVENTS_SETTINGS, SET_NEWS_SETTINGS } from '../actions/settings';

export const initialState = Map({
        newsSettings: new Map(),
        eventsSettings: new Map(),
        blogsSettings: new Map(),
        saveResult: new Map()
    }
);

const settings = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_SETTINGS:
            return state.set('newsSettings', action.data);
        case SET_BLOGS_SETTINGS:
            return state.set('blogsSettings', action.data);
        case SET_EVENTS_SETTINGS:
            return state.set('eventsSettings', action.data);
        case SAVE_SETTINGS:
            return state.set('saveResult', action.data);
        default:
            return state;
    }
};


export default settings;
