import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS, List } from 'immutable';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';
import ComboBox from 'chayns-components/lib/react-chayns-combobox/component/ComboBox';
import Tooltip from 'chayns-components/lib/react-chayns-tooltip/component/Tooltip';
import { ChromePicker } from 'react-color';
import ChooseButton from 'chayns-components/lib/react-chayns-button/component/Button';
import reactCSS from 'reactcss';
import Timeline from '../../../timeline/Timeline';
import TimelineItem from '../../../timeline/TimelineItem';
import BlogItem from '../../../blogitem/BlogItem';
import {
    formatDateById,
    toDate,
    toLongDate,
    toLongMonth,
    tolongMonth,
    toShortMonth,
    toYear
} from '../../../../utils/timeHelper';


import './design-controls.scss';
import Source from '../source/Source';
import {
    COLOR_TOOLTIP,
    DATE_FORMAT_SELECT,
    DATE_TOOLTIP,
    DEFAULT_DESCRIPTION,
    DEFAULT_HEADLINE, DEFAULT_IMAGES, SETTINGS_EDITOR_COLOR, SETTINGS_EDITOR_DATE
} from '../../../../constants/text';
import { textString } from '../../../../utils/textString';

class DesignControls extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
        };
        this.dateSelectList = [{
            id: 1,
            format: toDate(Date.now())
        }, {
            id: 2,
            format: toLongDate(Date.now())
        }, {
            id: 3,
            format: toYear(Date.now())
        }, {
            id: 5,
            format: toShortMonth(Date.now())
        }, {
            id: 4,
            format: toLongMonth(Date.now())
        }];
    }


    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };

    handleChange = (color) => {
        const { onChange } = this.props;
        onChange(fromJS({ settings: { color: color.hex } }));
    };

    handleDateFormatChange = (id) => {
        const { onChange } = this.props;
        onChange(fromJS({ setting: { formatId: id } }));

    }

    render() {
        const {visible, includeSources, color, onChange, sources, formatId} = this.props;
        const { headline, text } = textString.defaulrText


        return (
            <div >
                {!visible ? false : (
                    <div>
                        {!includeSources ? false : (
                        <Source onChange={onChange} sources={sources}/>
                        )}
                        <div>
                            <h3>Design</h3>
                        <div className="select_group">
                            <Tooltip
                                bindListeners
                                position={2}
                                content={{ text: DATE_TOOLTIP }}
                                minWidth={150}
                                maxWidth={250}
                            >
                                <p>{SETTINGS_EDITOR_DATE}</p>
                            </Tooltip>
                            <ComboBox
                                label={DATE_FORMAT_SELECT}
                                list={this.dateSelectList}
                                onSelect={(value) => {
                                    this.handleDateFormatChange(value.id);
                                }}
                                listKey="id"
                                listValue="format"
                            />
                        </div>
                        <div className="select_group">
                            <Tooltip
                                bindListeners
                                position={2}
                                content={{ text: COLOR_TOOLTIP + chayns.env.site.color }}
                                minWidth={150}
                                maxWidth={250}
                            >
                                <p>{SETTINGS_EDITOR_COLOR}</p>
                            </Tooltip>

                            <div>
                                <ChooseButton
                                    className="swatch"
                                    style={{ backgroundColor: color }}
                                    onClick={this.handleClick}
                                >
                                {color}
                                </ChooseButton>
                                { this.state.displayColorPicker ? (
                                    <div className="popover">
                                        <div className="cover" onClick={this.handleClose}/>
                                        <ChromePicker
                                            color={color}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                ) : null }
                            </div>
                        </div>
                        </div>
                        <Timeline>
                            <TimelineItem
                                key="item_1"
                                dateText={formatDateById(formatId)}
                                style={{ color }}
                                dateInnerStyle={{ background: color }}
                                bodyContainerClassName="content__card"
                            >
                                <BlogItem
                                    postingId={1234}
                                    tappId={1234}
                                    headline={headline}
                                    description={text}
                                    images={fromJS(DEFAULT_IMAGES)}
                                    startTimestamp={Date.now()}
                                />
                            </TimelineItem>
                        </Timeline>
                    </div>
)
                }
            </div>

        );
    }
}

DesignControls.propTypes = {
    visible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    includeSources: PropTypes.bool,
    formatId: PropTypes.number,
    color: PropTypes.string,
    sources: PropTypes.object

};

DesignControls.defaultProps = {
    includeSources: false,
    formatId: 1,
    color: chayns.env.site.color,
    visible: false,
    sources: new List()
};

export default DesignControls;
