import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
    render() {
        return (
            //add router to all the components in website.
            //set the base url for the website
            /*<BrowserRouter basename={'/'}>*/
            <BrowserRouter>
                <div className="App">
                    <Blog/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
