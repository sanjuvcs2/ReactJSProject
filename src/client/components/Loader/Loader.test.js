import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoaderConnect, { Loader } from './Loader';

describe('<Loader />', () => {
    let wrapper;
    const mockStore = configureMockStore([]);
    const store = mockStore({ isLoading: true });

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <LoaderConnect />
            </Provider>
        );
    });

    test('loader component exists with overlay ', () => {
        expect(wrapper.find('.loader')).toHaveLength(1);
    });

    test('loader component exists with overlay ', () => {
        wrapper.setProps({ isLoading: false });
        expect(wrapper.find('.loader-overlay')).toHaveLength(1);
    });

    test('<Loader /> simulate isSkipOverlay true ', () => {
        const loaderWrapper = mount(
            <Provider store={store}>
                <Loader isSkipOverlay />
            </Provider>
        );
        expect(loaderWrapper.find('.loader-overlay')).toHaveLength(0);
    });

    describe('Render Loader', () => {
        const isLoading = true;
        const wrapper = shallow(<Loader isLoading={isLoading} />);
        test('loader component exists with overlay ', () => {
            expect(wrapper.find('.loader')).toHaveLength(1);
        });

        test('loader component exists with overlay ', () => {
            wrapper.setProps({ isLoading: false });
            expect(wrapper.find('.loader')).toHaveLength(0);
        });
    });

    describe('Render Loader: spinner', () => {
        const isSpinner = true;
        const wrapper = shallow(<Loader spinner={isSpinner} />);

        test('spinner component exists', () => {
            expect(wrapper.find('.spinnerLoader')).toHaveLength(1);
        });
    });
});
