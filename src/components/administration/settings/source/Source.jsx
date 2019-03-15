import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';

import  './source.scss'
import { fromJS, List } from 'immutable';
import {
    SOURCE,
    SOURCE_CHAYNS,
    SOURCE_FACEBOOK, SOURCE_FACEBOOK_PROFIL,
    SOURCE_INSTAGRAM,
    SOURCE_TWITTER,
    SOURCE_YOUTUBE
} from '../../../../constants/text';

class Source extends PureComponent {

    handleChange = (name, enabled) =>{
        const {onChange, sources} = this.props;
        const index = sources.findIndex(item => item.get('name') === name);
        const newSetting = fromJS({ settings: { sources: [] } });
        let newSource = sources;
        if(index === -1){
            newSource = newSource.push(fromJS({ name, enabled }));
        } else {
            newSource = newSource.setIn([index, 'enabled'], enabled);
        }
        onChange(newSetting.setIn(['settings', 'sources'], newSource));
    }

    render() {
        return (
            <div className="source">
                <h3>{SOURCE}</h3>
                <div className="row">
                <Checkbox onChange={data => this.handleChange('chayns', data)}>{SOURCE_CHAYNS}</Checkbox>
                <Checkbox onChange={data => this.handleChange('facebook', data)}>{SOURCE_FACEBOOK}</Checkbox>
                </div>
                <div className="row">
                <Checkbox onChange={data => this.handleChange('youTube', data)}>{SOURCE_YOUTUBE}</Checkbox>
                <Checkbox onChange={data => this.handleChange('instagram', data)}>{SOURCE_INSTAGRAM}</Checkbox>
                </div>
                <div className="row">
                <Checkbox onChange={data => this.handleChange('twitter', data)}>{SOURCE_TWITTER}</Checkbox>
                <Checkbox onChange={data => this.handleChange('facebookProfil', data)}>{SOURCE_FACEBOOK_PROFIL}</Checkbox>
                </div>
            </div>
        );
    }
}

Source.propTypes = {
    onChange: PropTypes.func.isRequired,
    sources: PropTypes.object
};

Source.defaultProps = {
    sources: new List()
};

export default Source;
