import { isImmutable } from 'immutable';

export const SET_NEWS_SETTINGS = 'SET_NEWS_SETTINGS';
export const patchNewsSettings = data => ({
    type: SET_NEWS_SETTINGS,
    data
});

export const setNewsSettings = patchData => (dispatch, getState) => {
    const { settings } = getState();
    const newsSettings = settings.get('newsSettings');

    dispatch(patchNewsSettings(patchSetting(newsSettings, patchData)));
};

export const SET_EVENTS_SETTINGS = 'SET_EVENTS_SETTINGS';
export const patchEventSettings = data => ({
    type: SET_EVENTS_SETTINGS,
    data
});

export const setEventSettings = patchData => (dispatch, getState) => {
    const { settings } = getState();
    const eventsSettings = settings.get('eventsSettings');

    dispatch(patchEventSettings(patchSetting(eventsSettings, patchData)));
};

export const SET_BLOGS_SETTINGS = 'SET_BLOGS_SETTINGS';
export const patchBlogSettings = data => ({
    type: SET_BLOGS_SETTINGS,
    data
});

export const setBlogSettings = patchData => (dispatch, getState) => {
    const { settings } = getState();
    const blogsSettings = settings.get('blogsSettings');

    dispatch(patchBlogSettings(patchSetting(blogsSettings, patchData)));
};

/**
 * Update the settings map with all data given in the patchData map.
 * @param setting current settings
 * @param patchData fields which should be updated in settings
 * @returns {*} the new settings
 */
export function patchSetting(setting, patchData) {
    let newSetting = setting;
    patchData.map((item) => {
        const [...keys] = item.keys();
        for (let i = 0; i < keys.length; i++) {
            newSetting = newSetting.set(keys[i], item.get(keys[i]));
        }
    });
    console.log('newSettings', newSetting);
    return newSetting;
};
