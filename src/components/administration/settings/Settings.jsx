import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';
import Accordion from 'chayns-components/lib/react-chayns-accordion/component/Accordion';
import ContextMenu from 'chayns-components/lib/react-chayns-contextmenu/component/ContextMenu';

import  './setting.scss'
import Item from './item/Item';

class Settings extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {showNews: false};
    }

    render() {
        const {showNews} = this.state;
        const items = [
            {
                className: null,
                onClick: () => {
                    console.log("click", showNews);
                    this.setState({ showNews: !showNews });
                },
                text: showNews ? 'Ausblenden' : 'Anzeigen',
                icon: showNews ? ' fa fa-eye-slash' : 'fa fa-eye',
            }
        ];

        return (
            <div className="timelineSettings">
                <Accordion head="News"
                           right={(
                               <ContextMenu
                                   items={items}
                                   position={1}
                               />
                           )}
                           disabled={!showNews}
                           open={showNews}
                >
                    <div className="accordion__content">
                        <Item show={showNews}/>
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
