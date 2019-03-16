import { fromJS, List } from 'immutable';
import {
 getEvents, getNews, loadBlogs, postBlog, postBlogs
} from '../api';

export const GET_NEWS_DATA = 'GET_NEWS_DATA';
export const getNewsData = data => ({
    type: GET_NEWS_DATA,
    data
});

export const getMashupNews = (timestamp = Date.now()) => (dispatch) => {
    getNews(timestamp).then(data => dispatch(getNewsData(fromJS(data).get('itemList'))));
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
