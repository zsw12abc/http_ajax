import React, {Component} from 'react';


//let webpack prepare the resource, dont need to download all the resource at the beginning.
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent().then(cmp => {
                this.setState({component: cmp.default});
            });
        }


        render() {
            const C = this.state.component;

            return C ? <C{...this.props}/> : null;
        }
    }
};

export default asyncComponent;