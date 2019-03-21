import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'chayns-components/lib/react-chayns-gallery/component/Gallery';
import Icon from 'chayns-components/lib/react-chayns-icon/component/Icon';
import TextTruncate from 'react-text-truncate';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import ContextMenu from 'chayns-components/lib/react-chayns-contextmenu/component/ContextMenu';



import './blogItem.scss'
import TimeLineEditor from '../administration/TimeLinteItemEditor/TimeLineEditor';

class BlogItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
    }

    selectTapp = (id, tapp) => {
        console.log('click');
        chayns.selectTapp({
            'id': tapp
        }, "M=" + id);
    };

    onChange = () => {
        this.setState({editMode: ! this.state.editMode});
    }

    render() {
        const {
            headline,
            description,
            postingId,
            images,
            tappId,
            date
        } = this.props;
        const { editMode } = this.state;
        let imgList = images.map(url => ({ url }));

        const items = [
            {
                className: null,
                onClick: this.onChange,
                text: editMode ? 'bearbeiten beenden' : 'bearbeiten',
                icon: faPen,
            },
            {
                className: null,
                onClick: console.log,
                text: 'löschen',
                icon: faTrash,
            }
        ];

        const readMore = (<a onClick={() => this.selectTapp(postingId, tappId)}>Mehr anzeigen</a>);
    return (
            <div>
                <div style={{ position: 'relative' }}>
                    <ContextMenu
                        items={items}
                        showTriggerBackground
                        childrenStyle={{ position: 'absolute', top: 0, right: 0 }}
                    />
                </div>
                {this.state.editMode ?
                    <TimeLineEditor
                        saveBlog={console.log}
                        headline={headline}
                        description={description}
                        images={imgList.toJS()}
                        tappId={tappId}
                        date={date}
                    /> :
                    <div>
                        <h1>{headline}</h1>
                        <TextTruncate
                            line={5}
                            truncateText="…"
                            text={description}
                            textTruncateChild={readMore}
                        />
                        {imgList.size > 0 ?
                            <div className="blog__gallery">
                                <Gallery images={imgList.toJS()} height={250}/>
                            </div>
                            : ''
                        }
                    </div>
                }
            </div>
        );
    }
}

BlogItem.propTypes = {
    headline: PropTypes.string,
    description: PropTypes.string,
    postingId: PropTypes.number.isRequired,
    images: PropTypes.object,
    tappId: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired
};

BlogItem.defaultProps = {
    images: {},
    description: '',
    headline: ''
};

export default BlogItem;
