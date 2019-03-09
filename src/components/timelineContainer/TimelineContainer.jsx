import React, { PureComponent } from 'react';
import Timeline from '../timeline/Timeline';
import TimelineItem from '../timeline/TimelineItem';

class TimelineContainer extends PureComponent {
    render() {
        return (
            <div>
                <Timeline lineColor="#fff">
                    <TimelineItem
                    key="001"
                    dateText="11/2010 – Present"
                    style={{ color: '#e86971' }}
                    >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    <p>


                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    <p>


                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    </TimelineItem>
                </Timeline>
            </div>
        );
    }
}

TimelineContainer.propTypes = {
};

export default TimelineContainer;
