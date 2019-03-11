import React, { PureComponent } from 'react';
import TimelLineEditor from './TimeLinteItemEditor/TimelLineEditor';
import Accordion from 'chayns-components/lib/react-chayns-accordion/component/Accordion'
import Settings from './settings/Settings';

import './administration.scss';

class Administration extends PureComponent {
    render() {
        return (
                <div className="administraion_wide" >
                    <Accordion
                        head="Timeline Eintrag erstellen"
                        open
                        className="item"
                    >
                        <div className="accordion__content">
                            <TimelLineEditor/>
                        </div>
                    </Accordion>
                    <Accordion
                        head="Einstellungen"
                        className="item"
                        open
                    >
                        <div className="accordion__content">
                            <Settings/>
                        </div>
                    </Accordion>
                </div>
        );
    }
}

export default Administration;
