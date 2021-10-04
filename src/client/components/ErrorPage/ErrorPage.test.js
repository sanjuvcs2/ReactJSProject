import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ErrorPage from './ErrorPage';

const mockStore = configureMockStore();

describe.only('Component: ErrorPage', () => {
    let wrapper;
    const store = mockStore({});
    const renderComponent = () =>
        mount(
            <Provider store={store}>
                <ErrorPage />
            </Provider>
        );

    describe('Render ErrorPage', () => {
        beforeEach(() => {
            wrapper = renderComponent();
        });

        test('Should load ErrorPage component', () => {
            expect(wrapper.exists()).toBe(true);
        });
    });
});
