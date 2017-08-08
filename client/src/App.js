import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {children} = this.props;
        return (
            <div id="main-div">
                {children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps)(App);