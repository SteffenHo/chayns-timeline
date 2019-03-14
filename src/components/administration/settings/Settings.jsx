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
        this.state = {
            showNews: true,
            showEvents: true,
            showBlogs: true
        };
    }

    render() {
        const {showNews, showEvents, showBlogs} = this.state;
        const news = [
            {
                className: null,
                onClick: () => {
                    this.setState({ showNews: !showNews });
                },
                text: showNews ? 'Ausblenden' : 'Anzeigen',
                icon: showNews ? ' fa fa-eye-slash' : 'fa fa-eye',
            }
        ];

        const events = [
            {
                className: null,
                onClick: () => {
                    this.setState({ showEvents: !showEvents });
                },
                text: showNews ? 'Ausblenden' : 'Anzeigen',
                icon: showNews ? ' fa fa-eye-slash' : 'fa fa-eye',
            }
        ];

        const blogs = [
            {
                className: null,
                onClick: () => {
                    this.setState({ showBlogs: !showBlogs });
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
                                   items={news}
                                   position={1}
                               />
                           )}
                           disabled={!showNews}
                           dataGroup="settings"
                >
                    <div className="accordion__content">
                        <Item show={showNews} includeSources/>
                    </div>
                </Accordion>
                <Accordion head="Events"
                           right={(
                               <ContextMenu
                                   items={events}
                                   position={1}
                               />
                           )}
                           disabled={!showEvents}
                           dataGroup="settings"
                >
                    <div className="accordion__content">
                        <Item show={showEvents}/>
                    </div>
                </Accordion>
                <Accordion head="Blogs"
                           right={(
                               <ContextMenu
                                   items={blogs}
                                   position={1}
                               />
                           )}
                           disabled={!showBlogs}
                           dataGroup="settings"
                >
                    <div className="accordion__content">
                        <Item show={showBlogs}/>
                    </div>
                </Accordion>
            </div>
        );
    }
}

Settings.propTypes = {
};

Settings.defaultProps = {
};

export default Settings;
