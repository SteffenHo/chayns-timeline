import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';
import ComboBox from 'chayns-components/lib/react-chayns-combobox/component/ComboBox';
import Tooltip from 'chayns-components/lib/react-chayns-tooltip/component/Tooltip';
import Timeline from '../../../timeline/Timeline';
import TimelineItem from '../../../timeline/TimelineItem';
import BlogItem from '../../../blogitem/BlogItem';
import { toDate, toLongDate } from '../../../../utils/timeHelper';

import './item.scss';

class Item extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { formatId: 1, show: false };
    }


    formatedDate= () => {
        const { formatId } = this.state;

        if (formatId === 1) {
            return toDate(Date.now());
        }
            return toLongDate(Date.now());
    }

    render() {
        const { show } = this.state;
        return (
            <div >
                <Checkbox
                    onChange={(data) => {
                        this.setState({ show: data });
                    }}
                    checked={show}
                >
                    {'Anzeigen'}
                </Checkbox>
                {!show ? false : (
                    <div>
                        <div className="select_group">
                            <Tooltip
                                bindListeners
                                position={2}
                                content={{ text: 'Entscheide wie das Datum angezeigt werden soll' }}
                                minWidth={150}
                                maxWidth={250}
                            >
                                <p>Datumsformat</p>
                            </Tooltip>
                            <ComboBox
                                label="Format auswähl"
                                list={[{
                                    id: 1,
                                    format: toDate(Date.now())
                                }, {
                                    id: 2,
                                    format: toLongDate(Date.now())
                                }]}
                                onSelect={(value) => {
                                    this.setState({ formatId: value.id });
                                }}
                                listKey="id"
                                listValue="format"
                            />
                        </div>
                        <Timeline>
                            <TimelineItem
                                key="item_1"
                                dateText={this.formatedDate()}
                                style={{ color: chayns.env.site.color }}
                                dateInnerStyle={{ background: chayns.env.site.color }}
                                bodyContainerClassName="content__card"
                            >
                                <BlogItem
                                    postingId={1234}
                                    tappId={1234}
                                    headline="Überschrift"
                                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                                    images={fromJS(['https://tsimg.cloud/67750-26247/44a4a21d402f677068d1aaf60c708f72b663441b.jpg', 'https://tsimg.cloud/67750-26247/cdccfa04ad6699411fca8413cff3bb97f0ec9377.jpg', 'https://tsimg.cloud/67750-26247/99bc96ecc3e5d1f0f25d68931708ae82ae4e1241.jpg', 'https://tsimg.cloud/67750-26247/ff3aff7c98addb25e1de795d1d971338fb0805cf.jpg'])}
                                    startTimestamp={Date.now()}
                                />
                            </TimelineItem>
                        </Timeline>
                    </div>)
                }
            </div>

        );
    }
}

Item.propTypes = {
};

Item.defaultProps = {
};

export default Item;
