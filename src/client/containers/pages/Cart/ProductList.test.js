import React from 'react';
import { shallow, mount } from 'enzyme';
import  ProductList from './ProductList';
import { PRODUCTS } from '../../../common/Constants';

describe('Component: ProductList', () => {
    let wrapper;
    const renderComponent = () => shallow(<ProductList products={PRODUCTS} />);

    describe('Render ProductList', () => {
        beforeEach(() => {
            wrapper = renderComponent();
        });

        test('Should load ProductList component', () => {
            expect(wrapper.find('.ListContainer')).toHaveLength(1);
        });
    });

    describe('Render ProductList with all props', () => {
        const wrapper2 = shallow(
            <ProductList products={PRODUCTS}  onChange={() => {}} />
        );

        expect(wrapper2.find('.ListContainer')).toHaveLength(1);

        const renderComponent = () =>
            shallow(<ProductList  products={PRODUCTS} />);

        beforeEach(() => {
            wrapper = renderComponent();
        });

        test('Should load ProductList component', () => {
            expect(wrapper.find('.ListContainer')).toHaveLength(1);
        });      

        test('Should load ProductList component with checked', () => {
            wrapper.find('.ListContainer').find('input[type="text"]').at(0).simulate('change');
            wrapper.find('.ListContainer').find('svg').at(0).simulate('click');
        });
    });

    describe('Validate ProductList click event', () => {
        const handleOnChange = jest.fn();
        const wrapper = mount(
            <ProductList
                labelText='Ckeck Box Label Here'
                disabled
                visibleCount
                theme='testClass'
                products={PRODUCTS}
                onChange={handleOnChange}
            />
        );

        test('Invoke click event', () => {
            wrapper.find('.ListContainer').find('input[type="text"]').at(1).simulate('change');
            wrapper.find('.ListContainer').find('svg').at(1).simulate('click');
            expect(handleOnChange).toHaveBeenCalled();
        });
    });
});
