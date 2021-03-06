import React, { PureComponent } from 'react';
import TimeLineEditor from './TimeLinteItemEditor/TimeLineEditor';
import Accordion from 'chayns-components/lib/react-chayns-accordion/component/Accordion'
import Settings from './settings/Settings';

import './administration.scss';
import TimeLineEditorContainer from './TimeLinteItemEditor/TimeLineEditorContainer';
import SettingsContainer from './settings/SettingsContainer';

class Administration extends PureComponent {
    render() {
        return (
                <div>
                    <Accordion
                        head="Timeline Eintrag erstellen"
                        open
                        className="item"
                    >
                        <div className="accordion__content">
                            <TimeLineEditorContainer/>
                        </div>
                    </Accordion>
                    <Accordion
                        head="Einstellungen"
                        className="item"
                        open
                    >
                        <div className="accordion__content">
                            <SettingsContainer/>
                        </div>
                    </Accordion>
                </div>
        );
    }
}

export default Administration;
