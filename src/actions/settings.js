import { fromJS } from 'immutable';
import { getEvents } from '../api';

export const SET_NEWS_SETTINGS = 'SET_NEWS_SETTINGS';
export const patchNewsSettings = data => ({
    type: SET_NEWS_SETTINGS,
    data
});

export const setNewsSettings = patchedData => (dispatch, getState) => {
    const { settings } = getState();
    let newsSettings = settings.get('newsSettings');

    patchedData.map((item) => {
        const [...keys] = item.keys();
        for (let i = 0; i < keys.length; i++) {
            newsSettings = newsSettings.set(keys[i], item.get(keys[i]));
        }
    });

    dispatch(patchNewsSettings(newsSettings));
};
