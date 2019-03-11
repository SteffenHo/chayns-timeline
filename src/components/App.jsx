import React, { PureComponent } from 'react';
import SiteTimeLine from "./siteTimeLine/SiteTimeLine";
import SiteTimeLineContainer from './siteTimeLine/SiteTimeLineContainer';
import TimelLineEditor from './administration/TimeLinteItemEditor/TimelLineEditor';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <div className="tapp">
                <h1>chaynsTimeline</h1>
                <TimelLineEditor/>
                <SiteTimeLineContainer/>
            </div>
        );
    }
}

export default App;
