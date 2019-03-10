import { connect } from 'react-redux';
import SiteTimeLine from './SiteTimeLine';
import { getMashupNews } from '../../actions/mashupNews';

const mapStateToProps = (state, ownProps) => {
    const {mashupNews} = state;
    console.log('container', mashupNews);
    return {
        news: mashupNews.get('news'),
        events: mashupNews.get('events')
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
