import Register from './Register';
import React from 'react';
import { mount } from 'enzyme';
import {hashHistory} from 'react-router';

describe('Register', () => {
    let functionStub, wrapper

    beforeEach(() => {
        functionStub = jest.fn()
        wrapper = mount(<Register addUserAction={mockAddUserfunction} />)
    });

    // afterEach(() => {
    //     try {
    //         hashHistory.push.restore();
    //     }
    //     catch (e) { // catch error when restoring ajax
    //     }
    // });

    it('should dispatch an add user action when register button clicked', () => {
        wrapper.instance().state.email = 'x@y.com'
        wrapper.instance().state.password = '123456'
        wrapper.find('#register').simulate('click')
        expect(functionStub).toBeCalledWith({emailAddress: 'x@y.com', password: '123456'})
    });


})