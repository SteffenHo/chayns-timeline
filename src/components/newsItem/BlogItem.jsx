import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'chayns-components/lib/react-chayns-gallery/component/Gallery';
import TextTruncate from 'react-text-truncate';


class NewsItem extends PureComponent {

    selectTapp = (id) => {
        console.log('click');
        chayns.selectTapp({
            'id': 91958
        }, "M=" + id);
    }
    render() {
        const {
            headline,
            description,
            postingId,
            images
        } = this.props;
        const imgList = images.map(url => ({ url }));

        const readMore = (<a onClick={() => this.selectTapp(postingId)}>Mehr anzeigen</a>);
        console.log('imgList', imgList, description);
    return (
            <div>
               <h1>{headline}</h1>
                <TextTruncate
                    line={5}
                    truncateText="…"
                    text={description}
                    textTruncateChild={readMore}
                />
                {imgList.size > 0 ?
                    <Gallery images={imgList.toJS()}/>
                    : ''
                }
            </div>
        );
    }
}

NewsItem.propTypes = {
    headline: PropTypes.string,
    description: PropTypes.string,
    postingId: PropTypes.number.isRequired,
    images: PropTypes.object
};

NewsItem.defaultProps = {
    images: {},
    description: '',
    headline: ''
};

export default NewsItem;
