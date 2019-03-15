import { connect } from 'react-redux';
import SiteTimeLine from './SiteTimeLine';
import { getMashupNews } from '../../actions/content';

const mapStateToProps = (state, ownProps) => {
    const {content, settings} = state;
    console.log('container', content, settings);
    return {
        news: content.get('news'),
        events: content.get('events'),
        blogs: content.get('blogs'),
        newsSettings: settings.get('newsSettings'),
        eventsSettings: settings.get('eventsSettings'),
        blogsSettings: settings.get('blogsSettings')
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadNews: () => dispatch(getMashupNews()),
});

const SiteTimeLineContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SiteTimeLine);

export default SiteTimeLineContainer;
