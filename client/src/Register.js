import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class Register extends Component {

    constructor(props) {
        super(props)
    }

    onClick = () => {
    };

    render() {
        return (
            <div className="Register">
                <div className="App-header">
                    <form>
                        <input type="text" name="emailAddress"/>
                        <input type="text" name="password"/>
                        <button id="register" onClick={this.onClick}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Register);
