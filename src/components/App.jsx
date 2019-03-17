import React, { PureComponent } from 'react';
import ModeSwitch from 'chayns-components/lib/react-chayns-modeswitch/component/ModeSwitch';
import Mode from 'chayns-components/lib/react-chayns-modeswitch/component/Mode';
import SiteTimeLineContainer from './siteTimeLine/SiteTimeLineContainer';
import Administration from './administration/Administration';


// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <div className="tapp">
                <ModeSwitch
                    modes={[{
                        id: 1,
                        uacIds: [1],
                        name: 'chayns-Manager'
                    }]}
                    save
                />
                <h1>chaynsTimeline</h1>
                <Mode modes={[1]}>
                    <Administration/>
                </Mode>
                <SiteTimeLineContainer/>
            </div>
        );
    }
}

export default App;
