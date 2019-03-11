import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS, List } from 'immutable';
import Timeline from '../timeline/Timeline';
import TimelineItem from '../timeline/TimelineItem';
import BlogItem from '../newsItem/BlogItem';
import { toLongDate } from '../../utils/timeHelper';

class SiteTimeLine extends PureComponent {
    generateNewsItems = () => {
        let elemetns = [];

        const { news, events } = this.props;
        console.log('newsEvents', news, events);

        let blogList = new List();
        if(news.size > 0) {
            console.log('tada')
            blogList = news.map(n => fromJS({
                id: n.get('id'),
                start: n.get('publishTime'),
                startTimestamp: n.get('publishTimestamp'),
                description: n.get('message') || n.get('description'),
                headline: n.get('headline'),
                imageList: n.get('imageList'),
                type: 'news',
                tappId: 91958
            }));
        }

        if(events.size > 0) {
            console.log('events', events);
            blogList = blogList.concat(events.map(e => fromJS({
                id: e.get('id'),
                start: new Date(e.get('startTimestamp')),
                startTimestamp: e.get('startTimestamp'),
                end: new Date(e.get('endTimestamp')),
                endTimestamp: e.get('endTimestamp'),
                description: e.get('description'),
                headline: e.get('name'),
                imageList: fromJS([e.getIn(['picture', 'link'])]),
                type: 'events',
                tappId: 71519
            })));

            console.log('bloglist',blogList);
        }

        blogList = blogList.sort((a, b) => b.get('startTimestamp') - a.get('startTimestamp'));
        elemetns = blogList.map((element) => {
            const time = new Date(element.get('start'));
            return (
                <TimelineItem
                    key={`${element.get('tyoe')}_${element.get('id')}`}
                    dateText={toLongDate(element.get('startTimestamp'))}
                    style={{ color: chayns.env.site.color }}
                    dateInnerStyle={{ background: chayns.env.site.color }}
                    bodyContainerClassName="content__card"
                >
                    <BlogItem
                        description={element.get('description')}
                        headline={element.get('headline')}
                        postingId={element.get('id')}
                        images={element.get('imageList')}
                        tappId={element.get('tappId')}
                    />
                </TimelineItem>
            );
});
        return elemetns;
    }

    render() {
        const { news } = this.props;
        console.log('news', news, this.props);
        return (
            <div>
                <Timeline >
                    {this.generateNewsItems()}
                </Timeline>
            </div>
        );
    }
}

SiteTimeLine.propTypes = {
    loadNews: PropTypes.func.isRequired,
    news: PropTypes.object,
    events: PropTypes.object
};

SiteTimeLine.defaultProps = {
    news: {},
    events: {}
};

export default SiteTimeLine;
