import { connect } from 'react-redux';
import SiteTimeLine from './SiteTimeLine';
import { getMashupNews } from '../../actions/content';

const mapStateToProps = (state, ownProps) => {
    const {content} = state;
    console.log('container', content);
    return {
        news: content.get('news'),
        events: content.get('events')
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
