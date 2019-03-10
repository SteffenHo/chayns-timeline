import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Timeline from '../timeline/Timeline';
import TimelineItem from '../timeline/TimelineItem';
import NewsItem from '../newsItem/NewsItem';

class SiteTimeLine extends PureComponent {
    generateNewsItems = () => {
        let elemetns = [];

        const { news } = this.props;
        if(!news) return[];
        elemetns = news.map(element => {
            let time = new Date(element.get('publishTime'));
            return(
                <TimelineItem
                    key={`news${element.get('id')}`}
                    dateText={(time.getDate() < 10 ? '0' : '') + time.getDate() + '.' + (time.getMonth() + 1 < 10 ? '0' : '') + (time.getMonth() + 1) + '.' + time.getFullYear() + ' ' + (time.getHours() < 10 ? '0' : '') + time.getHours() + ':' + time.getMinutes()}
                    style={{ color: chayns.env.site.color }}
                    dateInnerStyle={{ background:  chayns.env.site.color }}
                >
                    <NewsItem
                        description={element.get('message') || element.get('description')}
                        headline={element.get('headline')}
                        postingId={element.get('id')}
                        images={element.get('imageList')}
                    />
                </TimelineItem>
            )});
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
    loadNews: PropTypes.func.isRequired
};

export default SiteTimeLine;
