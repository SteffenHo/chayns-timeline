import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'chayns-components/lib/react-chayns-gallery/component/Gallery';
import FileInput from 'chayns-components/lib/react-chayns-file_input/component/FileInput';
import imageUpload from 'chayns-components/lib/utils/imageUpload';
import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import Input from 'chayns-components/lib/react-chayns-input/component/Input';
import TextArea from 'chayns-components/lib/react-chayns-textarea/component/TextArea';
import ComboBox from 'chayns-components/lib/react-chayns-combobox/component/ComboBox';
import Tooltip from 'chayns-components/lib/react-chayns-tooltip/component/Tooltip';


import './TimeLineEditor.scss';
import { fromJS, List } from 'immutable';
import { toDate } from '../../../utils/timeHelper';

class TimeLineEditor extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { images: [] };
    }

    onChange = (validFiles) => {
        const { images } = this.state;
        this.setState({ images: images.concat(validFiles.map(f => ({ file: f }))) });
    };

    onClick = async () => {
        const { images } = this.state;
        const data = await chayns.dialog.mediaSelect({ multiselect: true });
        this.setState({ images: images.concat(data.selection.map(url => ({ url }))) });
    };

    onDelete = (image, index) => {
        const { images } = this.state;
        const img = images.slice();
        img.splice(index, 1);
        this.setState({ images: img });
    };

    upload = async () => {
        const { images } = this.state;
        let list = new List();
         await Promise.all(images.map( async (image) => {
            const result = await imageUpload(image.file || image.url, 'componentsTestUpload', chayns.env.user.personId, chayns.env.site.id);
            // eslint-disable-next-line no-console
            result.url = `${result.base}/${result.key}`;
             list = list.insert(0, fromJS(result));
        }));
        this.setState({imageList: list});
    };

    save = async () => {
        chayns.showWaitCursor();
        await this.upload();
        const {
            imageList,
            headline,
            description,
            selectedDate,
            tappId
        } = this.state;

        const newBlog = fromJS({
            headline,
            description,
            tappId,
            startTimestamp: selectedDate,
            imageList: imageList.map((img) => img.get('url')),
            id: Date.now()
        });
        this.props.saveBlog(newBlog);
        chayns.hideWaitCursor();
    }

    getTappList = () => fromJS(chayns.env.site.tapps).filter((tapp) => {
            if (tapp.get('userGroupIds').size === 0 && tapp.get('id') > 0 && tapp.get('sortId') > 0) {
                return tapp;
            }
        });

    setDate = async () => {
        const result = fromJS(await chayns.dialog.advancedDate({ preSelect: Date.now }));
        this.setState({ selectedDate: (result.get('selectedDates').get(0).get('timestamp')) * 1000 });
    }

    render() {
        const { images } = this.state;
        const list = this.getTappList();
        console.log('list', list);
        return (
            <div>
                <div className="header">
                <Input
                    placeholder="Überschrift"
                    className="headline"
                    onChange={(data) => this.setState({headline: data})}
                />
                <TextArea
                    placeholder="Text"
                    autogrow
                    onChange={(data) => this.setState({description: data})}

                />
                <div className="tappSelect">
                    <Tooltip
                        bindListeners
                        position={2}
                        content={{ text: 'Wähle den Tapp aus, auf dem dieser Eintrag verlinken soll' }}
                        minWidth={150}
                        maxWidth={250}
                    >
                        <p>Ziel Tapp</p>
                    </Tooltip>
                    <ComboBox
                        label="Tapp auswahl"
                        list={list.toJS()}
                        onSelect={(value) => { this.setState({ tappId: value.id }); }}
                        listKey="id"
                        listValue="showName"
                    />
                </div>
                    <div className="dateSelect">
                        <div>Datum</div>
                        <Button onClick={this.setDate}>{this.state.selectedDate ? toDate(this.state.selectedDate) : 'Wählen'}</Button>
                    </div>
                </div>
                <FileInput
                    style={{ marginBottom: '20px' }}
                    stopPropagation
                    items={[{
                        types: [FileInput.types.IMAGE], // only images are allowed
                        maxFileSize: 4194304, // max file size is 4 MB
                        maxNumberOfFiles: 0, // no limit for number of files
                        onChange: this.onChange,
                        content: { text: 'Bilder hochladen' },
                    }, {
                        onClick: this.onClick,
                        content: { text: 'Bilder von pixabay', icon: 'ts-image' },
                    }]}
                />
                <Gallery
                    images={images}
                    deleteMode
                    onDelete={this.onDelete}
                />
                <div className="addButton">
                <Button
                    disabled={!images}
                    onClick={this.save}
                >
                    {'Hinzufügen'}
                </Button>
                </div>
            </div>
        );
    }
}

TimeLineEditor.propTypes = {
    saveBlog: PropTypes.func.isRequired
};

TimeLineEditor.defaultProps = {

};

export default TimeLineEditor;
