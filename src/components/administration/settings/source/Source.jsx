import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';

import  './source.scss'

class Source extends PureComponent {

    render() {
        return (
            <div className="source">
                <h3>Quelle</h3>
                <div className="row">
                <Checkbox>chayns</Checkbox>
                <Checkbox>Facebook</Checkbox>
                </div>
                <div className="row">
                <Checkbox>YouTube</Checkbox>
                <Checkbox>Instagram</Checkbox>
                </div>
                <div className="row">
                <Checkbox>Twitter</Checkbox>
                <Checkbox>Facebook-Profil</Checkbox>
                </div>
            </div>
        );
    }
}

Source.propTypes = {
};

Source.defaultProps = {
};

export default Source;
