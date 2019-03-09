import React, { PureComponent } from 'react';
import Timeline from '../timeline/Timeline';
import TimelineItem from '../timeline/TimelineItem';
import NewsItem from "../newsItem/NewsItem";
import PropTypes from 'prop-types';

class SiteTimeLine extends PureComponent {

    render() {

        const {news} = this.props;
        console.log('news', news, this.props);
        const images = [
            {
                url: 'https://tsimg.cloud/127-89061/9d6979d3ac95a053c532f86af9acfb5af9262020.jpg',
            },
            {
                url: 'https://tsimg.cloud/127-89061/2b83dfa29f2f88bcb35372cbfbefe04a3f899d00.jpg',
            },
            {
                url: 'https://tsimg.cloud/72975-12914/e087202f5badd652fd015d39df83c35065941fe5.png',
            },
            {
                url: 'https://tsimg.space/v1/images/6ffbd340-a77b-e811-80d6-0025905a8161.jpg',
            },
            {
                url: 'https://tsimg.space/v1/images/59a25b31-3997-e811-80d6-0025905a8161.jpg',
            }
        ];

        return (
            <div>
                <Timeline lineColor="#fff">
                    <TimelineItem
                    key="001"
                    dateText="11/2010 – Present"
                    style={{ color: '#e86971' }}
                    >
                    <NewsItem
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                        headline="Überschrift"
                        postingId={123}
                        images={images}
                    />
                    </TimelineItem>
                </Timeline>
            </div>
        );
    }
}

SiteTimeLine.propTypes = {
    loadNews: PropTypes.func.isRequired
};

export default SiteTimeLine;
