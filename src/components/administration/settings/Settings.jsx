import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';
import Accordion from 'chayns-components/lib/react-chayns-accordion/component/Accordion';

import  './setting.scss'
import Item from './item/Item';

class Settings extends PureComponent {

    render() {
        return (
            <div className="timelineSettings">
                <Accordion head="News">
                    <div className="accordion__content">
                        <Item/>
                    </div>
                </Accordion>
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
