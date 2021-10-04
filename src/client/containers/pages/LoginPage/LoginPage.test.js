import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginConnect, { LoginPage } from './LoginPage';

describe('<LoginPage Details />', () => {
    let wrapper;
    const mockStore = configureMockStore([]);
    const store = mockStore({ isLoading: true });
    const getUserDetails = jest.fn();
    const actions = {
        getUserDetails
    };
    const props = {
        actions,
        loginDetails: {
            data: {
            nameId: '04',
            user: 'test',
            password: 'password',
            isSuccess: true
            }
        }
    };

    beforeEach(() => {
        jest.useFakeTimers();
        wrapper = mount(
            <Provider store={store}>
                <LoginConnect actions={props.actions} />
            </Provider>
        );
    });
    afterEach(() => {
        jest.useFakeTimers();
    });

    test('LoginConnect Page', () => {
        expect(wrapper.find('#Login')).toHaveLength(1);
    });

    test('<Loader /> simulate handleSubmit ', () => {
        const loaderWrapper = mount(
            <Provider store={store}>
                <LoginPage actions={props.actions} loginDetails={props.loginDetails} />
            </Provider>
        );
        wrapper.find('#form').at(0).simulate('click');
    });

    describe('Render Loader', () => {
        const wrapper = shallow(<LoginPage actions={props.actions} loginDetails={props.loginDetails} />);
        wrapper.setState({
            userError: true,
            pwdError: true,
            isBothWrong: true,
            isSuccess: true
        });
        wrapper.setProps({ loginDetails: {
            data: {
                nameId: '04',
                user: 'test1',
                password: 'password1',
                isSuccess: true
            }
        } });
        const eventTest = { preventDefault: jest.fn(), target: { user: { value: 'test' }, password : { value: 'password'} } };
        test('Invoke onClick event ', () => {
            wrapper.find('form').simulate('submit', eventTest);
        });

        test('loader component exists with overlay ', () => {
            expect(wrapper.find('#Login')).toHaveLength(1);
        });
    });

    describe('Login Page onSubmit ', () => {
        const wrapper = mount(<LoginPage actions={props.actions} loginDetails={props.loginDetails} />);
        wrapper.setProps({ loginDetails: {
            data: {
                nameId: '04',
                user: 'test',
                password: 'password',
                isSuccess: true
            }
        } });
        const event = { preventDefault: jest.fn(), target: { user: { value: '' }, password : { value: 'password'} } };
        test('Invoke onClick event ', () => {
            wrapper.find('form').simulate('submit', event);
        });
        const eventElse = { preventDefault: jest.fn(), target: { user: { value: 'sss' }, password : { value: 'password'} } };
        test('Invoke onClick event ', () => {
            wrapper.find('form').simulate('submit', eventElse);
        });
        const eventTest = { preventDefault: jest.fn(), target: { user: { value: 'test' }, password : { value: 'password'} } };
        test('Invoke onClick event ', () => {
            wrapper.find('form').simulate('submit', eventTest);
        });
        const eventTestTwo = { preventDefault: jest.fn(), target: { user: { value: 'test' }, password : { value: ''} } };
        test('Invoke onClick event ', () => {
            wrapper.find('form').simulate('submit', eventTestTwo);
        });
    });
});