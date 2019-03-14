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
        const { changeNewsSettings, newsSettings, blogsSettings, eventsSettings } = this.props;
        return (
            <div className="timelineSettings">
                <SettingsItem
                    name={EVENTS}
                    onContextMenuChange={(data) => { console.log('event', data); }}
                    settings={eventsSettings}
                />
                <SettingsItem
                    name={NEWS}
                    onContextMenuChange={(data) => { changeNewsSettings( fromJS({settings: { visible: data } })); }}
                    settings={newsSettings}
                    includeSources
                />
                <SettingsItem
                    name={BLOGS}
                    onContextMenuChange={(data) => { console.log('blogs', data); }}
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
    changeNewsSettings: PropTypes.func.isRequired
};

Settings.defaultProps = {
};

export default Settings;
