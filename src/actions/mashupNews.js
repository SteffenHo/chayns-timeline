import { fromJS } from 'immutable';
import {getNews} from "../api";

export const GET_NEWS_DATA = 'GET_NEWS_DATA';
export const getNewsData = data => ({
    type: GET_NEWS_DATA,
    data
});

export const getMashupNews = (timestamp = Date.now()) => (dispatch) => {
    console.log('Tt', timestamp);
    getNews(timestamp).then((data) => dispatch(getNewsData(fromJS(data).get('itemList'))));
};
