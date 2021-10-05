import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Cart from './Cart';
import Summary from './Summary';

const mockStore = configureMockStore();

describe('Component: Cart Page', () => {
    const onChangeProductQuantity = jest.fn();
    let wrapper;
    const actions = {
        onChangeProductQuantity
    };
    const store = mockStore({});
    const renderComponent = () =>
        mount(
            <Provider store={store}>
                <Cart onChangeProductQuantity={() => { }} onRemoveProduct={() => { }} actions={actions} />
            </Provider>
        );

    describe('Render Cart', () => {
        beforeEach(() => {
            wrapper = renderComponent();
        });

        test('Should load Cart component', () => {
            expect(wrapper.find('.cartPage')).toHaveLength(1);
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Render Cart is Empty', () => {
        const wrapperNew = mount(<Cart PRODUCTS={''} PROMOTIONS={''} TAX={''} onChange={() => { }} onRemoveProduct={() => { }} actions={actions} />);
        wrapperNew.update();

        test('Should load Cart component', () => {
            expect(wrapper.find('.cartPage')).toHaveLength(1);
            expect(wrapper.exists()).toBe(true);
        });

        test('Should load onCountryChange', () => {
            const eventTest = { preventDefault: jest.fn(), target: { value: 1 } };
            const simulateClick = wrapper.find('ProductList').prop('onChange');
            simulateClick(1, eventTest);
            const eventEmptTest = { preventDefault: jest.fn(), target: { value: '' } };
            const simulateClickEmpt = wrapper.find('ProductList').prop('onChange');
            simulateClickEmpt(1, eventEmptTest);
        });

        test('Should  onRemoveProduct Click Event', () => {
            const eventTest = { preventDefault: jest.fn(), target: { value: 1 } };
            const simulateClick = wrapper.find('ProductList').prop('onRemoveProduct');
            simulateClick(1, eventTest);
            const eventEmptTest = { preventDefault: jest.fn(), target: { value: '' } };
            const simulateClickEmpt = wrapper.find('ProductList').prop('onRemoveProduct');
            simulateClickEmpt(1, eventEmptTest);
        });

        test('Should  onEnterPromoCode Click Event', () => {
            const eventTest = { preventDefault: jest.fn(), target: { value: 1 } };
            const simulateClick = wrapper.find('Summary').prop('onEnterPromoCode');
            simulateClick(eventTest);
            const eventEmptTest = { preventDefault: jest.fn(), target: { value: '' } };
            const simulateClickEmpt = wrapper.find('Summary').prop('onEnterPromoCode');
            simulateClickEmpt(eventEmptTest);
        });

        test('Should checkPromoCode Click Event', () => {
            const eventTest = { preventDefault: jest.fn(), target: { value: 1 } };
            const simulateClick = wrapper.find('Summary').prop('checkPromoCode');
            simulateClick(eventTest);
            const eventEmptTest = { preventDefault: jest.fn(), target: { value: '' } };
            const simulateClickEmpt = wrapper.find('Summary').prop('checkPromoCode');
            simulateClickEmpt(eventEmptTest);
        });

        window.alert = jest.fn();

        test("login api resolves true", () => {
            window.alert.mockClear();
        })
    });
});

describe('Component: Summary', () => {
    let wrapper;
    const store = mockStore({});
    const renderComponent = () =>
        mount(
            <Provider store={store}>
                <Summary subTotal={10} discount={10} tax={10} onEnterPromoCode={() => { }} checkPromoCode={() => { }} />
            </Provider>
        );

    describe('Render Summary', () => {
        beforeEach(() => {
            wrapper = renderComponent();
        });

        test('Should load Summary component', () => {
            expect(wrapper.find('#summary')).toHaveLength(1);
            expect(wrapper.exists()).toBe(true);
        });

        test('Should load Link component', () => {
            const wrapperNew = shallow(<Summary subTotal={10} discount={10} tax={10} onEnterPromoCode={() => { }} checkPromoCode={() => { }} />);
            wrapperNew.setProps({
                subTotal: 1,
                discount: 10,
                tax: 1
            });
            wrapper.find('#promCode').simulate('click');
            expect(wrapper.find('#promCode')).toHaveLength(1);
            expect(wrapper.exists()).toBe(true);
        });
    });
});
