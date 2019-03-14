import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS, List } from 'immutable';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';
import Accordion from 'chayns-components/lib/react-chayns-accordion/component/Accordion';
import ContextMenu from 'chayns-components/lib/react-chayns-contextmenu/component/ContextMenu';

import DesignControls from '../designControls/DesignControls';
import { Hide, SHOW } from '../../../../constants/text';

class SettingsItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            name,
            settings,
            includeSources,
            onChange
        } = this.props;

        const visible = settings.get('visible');
        const color = settings.get('color') || chayns.env.site.color;
        const formatId = settings.get('formatId') || 1;
        const sources = settings.get('sources') || new List();

        const list = [
            {
                className: null,
                onClick: () => { onChange(fromJS({ settings: { visible: !visible} })); },
                text: !visible ? SHOW : Hide,
                icon: !visible ? 'fa fa-eye' : 'fa fa-eye-slash',
            }
        ];

        return (
                <Accordion
                    head={name}
                    right={(
                        <ContextMenu
                            items={list}
                            position={1}
                        />
                        )}
                    disabled={!visible}
                    dataGroup="settings"
                >
                    <div className="accordion__content">
                        <DesignControls
                            visible={visible}
                            onChange={onChange}
                            includeSources={includeSources}
                            color={color}
                            formatId={formatId}
                            sources={sources}
                        />
                    </div>
                </Accordion>
        );
    }
}

SettingsItem.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    includeSources: PropTypes.bool,
    settings: PropTypes.object.isRequired
};

SettingsItem.defaultProps = {
    includeSources: false
};

export default SettingsItem;
