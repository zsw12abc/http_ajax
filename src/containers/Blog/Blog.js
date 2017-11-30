import React, {Component} from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route} from 'react-router-dom'
import './Blog.css';

class Blog extends Component {
    render() {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>home</h1>}/>*/}
                {/*<Route path="/" render={() => <h1>home2</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post"  component={NewPost}/>
            </div>
        );
    }
}

export default Blog;