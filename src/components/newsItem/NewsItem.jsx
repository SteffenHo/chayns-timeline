import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'chayns-components/lib/react-chayns-gallery/component/Gallery';


class NewsItem extends PureComponent {
    render() {
        const {
            headline,
            description,
            postingId,
            images
        } = this.props;
        const imgList = images.map(url => ({ url }));
        console.log('imgList', imgList, description);
    return (
            <div>
               <h1>{headline}</h1>
                <div>{description}</div>
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
