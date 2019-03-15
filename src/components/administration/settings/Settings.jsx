import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS, Map } from 'immutable';

import './setting.scss';
import DesignControls from './designControls/DesignControls';
import {
 BLOGS, EVENTS, Hide, NEWS, SHOW
} from '../../../constants/text';
import SettingsItem from './settingsItem/SettingsItem';

class Settings extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { changeNewsSettings, newsSettings, blogsSettings, eventsSettings, changeBlogsSettings, changeEventsSettings } = this.props;
        return (
            <div className="timelineSettings">
                <SettingsItem
                    name={EVENTS}
                    onChange={changeEventsSettings}
                    settings={eventsSettings}
                />
                <SettingsItem
                    name={NEWS}
                    onChange={changeNewsSettings}
                    settings={newsSettings}
                    includeSources
                />
                <SettingsItem
                    name={BLOGS}
                    onChange={changeBlogsSettings}
                    settings={blogsSettings}
                />
            </div>
        );
    }
}

Settings.propTypes = {
    newsSettings: PropTypes.object.isRequired,
    eventsSettings: PropTypes.object.isRequired,
    blogsSettings: PropTypes.object.isRequired,
    changeNewsSettings: PropTypes.func.isRequired,
    changeEventsSettings: PropTypes.func.isRequired,
    changeBlogsSettings: PropTypes.func.isRequired

};

Settings.defaultProps = {
};

export default Settings;
