import React, {Component} from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
// import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    state ={
        auth: false,
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
                    {this.state.false ? <Route path="/new-post" component={NewPost}/> : null};
                    <Route path="/posts" component={Posts}/>
                    <Redirect from='/' to='/posts'/>//direct from '/' to '/posts'
                </Switch>
            </div>
        );
    }
}

export default Blog;