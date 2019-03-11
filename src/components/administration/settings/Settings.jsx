import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';

import  './setting.scss'

class Settings extends PureComponent {

    render() {
        return (
            <div className="timelineSettings">
                <Checkbox
                    onChange={(data) => {
                        console.log(data);
                    }}
                    checked
                >
                    {'News'}
                </Checkbox>
                <Checkbox
                    onChange={(data) => {
                        console.log(data);
                    }}
                    checked
                >
                    {'Termine'}
                </Checkbox>
                <Checkbox
                    onChange={(data) => {
                        console.log(data);
                    }}
                >
                    {'Timeline Elemente'}
                </Checkbox>
            </div>
        );
    }
}

Settings.propTypes = {
};

Settings.defaultProps = {
};

export default Settings;
