import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'chayns-components/lib/react-chayns-gallery/component/Gallery';
import Icon from 'chayns-components/lib/react-chayns-icon/component/Icon';
import TextTruncate from 'react-text-truncate';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';

import './blogItem.scss'

class BlogItem extends PureComponent {

    selectTapp = (id, tapp) => {
        console.log('click');
        chayns.selectTapp({
            'id': tapp
        }, "M=" + id);
    }
    render() {
        const {
            headline,
            description,
            postingId,
            images, tappId
        } = this.props;
        let imgList = images.map(url => ({ url }));


        const readMore = (<a onClick={() => this.selectTapp(postingId, tappId)}>Mehr anzeigen</a>);
    return (
            <div>
                <div className="edit-container">
                    <Icon icon={faEllipsisV}/>
                </div>
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
        );
    }
}

BlogItem.propTypes = {
    headline: PropTypes.string,
    description: PropTypes.string,
    postingId: PropTypes.number.isRequired,
    images: PropTypes.object,
    tappId: PropTypes.number.isRequired
};

BlogItem.defaultProps = {
    images: {},
    description: '',
    headline: ''
};

export default BlogItem;
