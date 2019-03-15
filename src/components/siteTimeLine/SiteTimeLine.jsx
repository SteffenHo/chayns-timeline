import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS, List, Map } from 'immutable';
import Timeline from '../timeline/Timeline';
import TimelineItem from '../timeline/TimelineItem';
import BlogItem from '../blogitem/BlogItem';
import { formatDateById, toLongDate } from '../../utils/timeHelper';

class SiteTimeLine extends PureComponent {
    generateNewsItems = () => {
        let elemetns = [];

        const { news, events, blogs, eventsSettings, newsSettings, blogsSettings } = this.props;
        console.log('newsEvents', eventsSettings,events);

        const eventVisible = eventsSettings.get('visible');
        const eventFormatId = eventsSettings.get('formatId') || 1;
        const eventcolor = eventsSettings.get('color') || chayns.env.site.color;

        const newsVisible = newsSettings.get('visible')
        const newsFormatId = newsSettings.get('formatId') || 1;
        const newsColor = newsSettings.get('color') || chayns.env.site.color;

        const blogsVisible = blogsSettings.get('visible');
        const blogsFormatId = blogsSettings.get('formatId') || 1;
        const blogsColor = blogsSettings.get('color') || chayns.env.site.color;


        let blogList = new List();
        if(news.size > 0 && newsVisible) {
            console.log('tada')
            blogList = news.map(n => fromJS({
                id: n.get('id'),
                start: n.get('publishTime'),
                startTimestamp: n.get('publishTimestamp'),
                description: n.get('message') || n.get('description'),
                headline: n.get('headline'),
                imageList: n.get('imageList'),
                type: 'news',
                tappId: 91958,
                formatId: newsFormatId,
                color: newsColor
            }));
        }

        if(events.size > 0 && eventVisible) {
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
                tappId: 71519,
                formatId: eventFormatId,
                color: eventcolor
            })));

            console.log('bloglist event',blogList);
        }

        if(blogs.size > 0 && blogsVisible) {
            console.log('events', events);
            blogList = blogList.concat(blogs.map(e => fromJS({
                id: e.get('id'),
                start: new Date(e.get('startTimestamp')),
                startTimestamp: e.get('startTimestamp'),
                description: e.get('description'),
                headline: e.get('headline'),
                imageList: e.get('imageList'),
                type: 'blog',
                tappId: e.get('tappId'),
                formatId: blogsFormatId,
                color: blogsColor
            })));

            console.log('bloglist blog',blogList);
        }

        blogList = blogList.sort((a, b) => b.get('startTimestamp') - a.get('startTimestamp'));
        elemetns = blogList.map((element) => {
            const time = new Date(element.get('start'));
            return (
                <TimelineItem
                    key={`${element.get('tyoe')}_${element.get('id')}`}
                    dateText={formatDateById(element.get('formatId'), element.get('startTimestamp'))}
                    style={{ color: element.get('color') }}
                    dateInnerStyle={{ background: element.get('color') }}
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
    events: PropTypes.object,
    blogs: PropTypes.object,
    newsSettings: PropTypes.object,
    blogsSettings: PropTypes.object,
    eventsSettings: PropTypes.object,
};

SiteTimeLine.defaultProps = {
    news: new List(),
    events: new List(),
    blogs: new List(),
    eventsSettings: new Map(),
    blogsSettings: new Map(),
    newsSettings: new Map()
};

export default SiteTimeLine;
