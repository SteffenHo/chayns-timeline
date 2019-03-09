import React, { PureComponent } from 'react';
import TimelineContainer from "./timeline/TimelineContainer";

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <div className="tapp">
                <h1>Test</h1>
                <TimelineContainer/>
            </div>
        );
    }
}

export default App;
