import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import store from './Store';

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onClick = () => {
    };

    render() {
        return (
            <div className="Register">
                <div className="App-header">
                    <form>
                        <div>
                            <label>Email</label>
                            <input type="text" name="emailAddress"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" name="password"/>
                        </div>
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
