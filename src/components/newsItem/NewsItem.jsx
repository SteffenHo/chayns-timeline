import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'chayns-components/lib/react-chayns-gallery/component/Gallery';
import {getNews} from "../../api";


class NewsItem extends PureComponent {
    render() {
        const { headline, description, postingId, images } = this.props;
    return (
            <div>
               <h1>{headline}</h1>
                <div>{description}</div>
                <Gallery images={images} />
            </div>
        );
    }
}

NewsItem.propTypes = {
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    postingId: PropTypes.number.isRequired,
    images: PropTypes.array
};

NewsItem.defaultProps = {
    images: []
};

export default NewsItem;
