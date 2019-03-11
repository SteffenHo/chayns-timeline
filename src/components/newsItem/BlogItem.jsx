import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'chayns-components/lib/react-chayns-gallery/component/Gallery';
import TextTruncate from 'react-text-truncate';
import { fromJS } from 'immutable';


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
               <h1>{headline}</h1>
                <TextTruncate
                    line={5}
                    truncateText="…"
                    text={description}
                    textTruncateChild={readMore}
                />
                {imgList.size > 0 ?
                    <div style={{width: '100%'}}>
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
