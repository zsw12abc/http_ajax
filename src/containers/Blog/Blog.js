import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

//load component async in big project.
const AsyncNewPost = asyncComponent(() =>{
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true,
    };

    render() {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink //dont need to refer the page, just render the component on the page
                                to='/posts/'
                                exact
                                activeClassName='my-active' //change class name
                                activeStyle={{ //set a inline css style
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',//where we going when we click the link
                                hash: '#submit',
                                search: '?quick-submit=ture'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>home</h1>}/>*/}
                {/*<Route path="/" render={() => <h1>home2</h1>}/>*/}
                {/*Using Switch to only render the first find link*/}
                <Switch>
                    {this.state.false ? <Route path="/new-post" component={AsyncNewPost}/> : null};
                    <Route path="/posts" component={Posts}/>;
                    <Redirect from='/' to='/posts'/>; {/*//direct from '/' to '/posts'*/}
                    <Route render={() => <h1>Not found 404</h1>}/>
                    {/*//404 page, unknown url, always last, wont work with Redirect*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;