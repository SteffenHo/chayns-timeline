import { connect } from 'react-redux';
import Settings from './Settings';
import { setNewsSettings } from '../../../actions/settings';

const mapStateToProps = (state, ownProps) => {
    const {settings} = state;
    return {
        newsSettings: settings.get('newsSettings'),
        eventsSettings: settings.get('eventsSettings'),
        blogsSettings: settings.get('blogsSettings')
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeNewsSettings: (item) => dispatch(setNewsSettings(item))
});

const SettingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);

export default SettingsContainer;
