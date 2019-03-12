import { connect } from 'react-redux';
import TimelLineEditor from './TimelLineEditor';
import { saveBlogElement } from '../../../actions/content';

const mapStateToProps = (state, ownProps) => {
    const {content} = state;
    return {
        news: content.get('news'),
        events: content.get('events'),
        blogs: content.get('blogs')
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    saveBlog: (item) => dispatch(saveBlogElement(item))
});

const TimeLineEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimelLineEditor);

export default TimeLineEditorContainer;
