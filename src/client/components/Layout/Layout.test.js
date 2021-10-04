import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Layout from './Layout';

const mockStore = configureMockStore();

describe.only('Component: Layout', () => {
    let wrapper;
    const store = mockStore({});
    const renderComponent = () =>
        mount(
            <Provider store={store}>
                <Layout />
            </Provider>
        );

    describe('Render Layout', () => {
        beforeEach(() => {
            wrapper = renderComponent();
        });

        test('Should load Layout component', () => {
            expect(wrapper.find('#layout')).toHaveLength(1);
            expect(wrapper.exists()).toBe(true);
        });

        test('Should load Link component', () => {
            wrapper.find('.logout').simulate('click');
            expect(wrapper.find('.logout')).toHaveLength(1);
            expect(wrapper.exists()).toBe(true);
        });

    });
});
