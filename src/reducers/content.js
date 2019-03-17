import { List, Map } from 'immutable';
import { GET_EVENTS_DATA, GET_NEWS_DATA, IS_LOADING_NEWS_SETTINGS, SET_BLOG_DATA } from '../actions/content';

export const initialState = Map({
        news: new List(),
        events: new List(),
        blogs: new List(),
        isLoadingNews: false
    }
);

const content = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_DATA:
            return state.set('news', action.data);
        case GET_EVENTS_DATA:
            return state.set('events', action.data);
        case SET_BLOG_DATA:
            return state.set('blogs', action.data);
        case IS_LOADING_NEWS_SETTINGS:
            return state.set('isLoadingNews', action.data);
        default:
            return state;
    }
};


export default content;
