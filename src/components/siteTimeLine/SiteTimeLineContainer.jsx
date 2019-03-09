import { connect } from 'react-redux';
import SiteTimeLine from './SiteTimeLine';
import { getNews } from '../../api';

const mapStateToProps = (state, ownProps) => {
    return {
        news: state.mashupNews
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadNews: () => dispatch(getNews()),
});

const SiteTimeLineContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SiteTimeLine);

export default SiteTimeLineContainer;
