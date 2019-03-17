import { fromJS, List } from 'immutable';
import {
 getEvents, getNews, loadBlogs, postBlog, postBlogs
} from '../api';
import { SET_NEWS_SETTINGS } from './settings';

export const GET_NEWS_DATA = 'GET_NEWS_DATA';
export const getNewsData = data => ({
    type: GET_NEWS_DATA,
    data
});

export const IS_LOADING_NEWS_SETTINGS = 'IS_LOADING_NEWS_SETTINGS';
export const setIsLoadingNews = data => ({
    type: IS_LOADING_NEWS_SETTINGS,
    data
});

export const getMashupNews = (timestamp = Date.now()) => (dispatch, getState) => {
    const state = getState();
    const constent = state.content;
    const isLoadingNews = constent.get('isLoadingNews');
    const news = constent.get('news');
    console.log('news get', news);
    if(!isLoadingNews) {
        dispatch(setIsLoadingNews(true));
        console.log('loadingNews');
        getNews(timestamp)
            .then(data => {
                dispatch(getNewsData(news.concat(fromJS(data).get('itemList'))));
                dispatch(setIsLoadingNews(false));
            });
    }
};

export const GET_EVENTS_DATA = 'GET_EVENTS_DATA';
export const getEventsData = data => ({
    type: GET_EVENTS_DATA,
    data
});

export const getMashupEvents = (skip = 0, take = 10) => (dispatch) => {
    getEvents(skip, take).then(data => dispatch(getEventsData(fromJS(data))));
};

export const SET_BLOG_DATA = 'SET_BLOG_DATA';
export const setBlogData = data => ({
    type: SET_BLOG_DATA,
    data
});
export const saveBlogElement = element => (dispatch, getState) => {
    const { content } = getState();
    console.log('saveBlogElement', element, content);
    const allBlogs = content.get('blogs').push(element);
    postBlogs(allBlogs).then(data => dispatch(setBlogData(allBlogs)));
};

export const getBlogs = () => (dispatch) => {
    loadBlogs().then((data) => {
        if(data != null) {
            const blogsData = fromJS(data);
            dispatch(setBlogData(blogsData || new List()));
        }
    });
};
