import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Component: Button', () => {
    let wrapper;
    const renderComponent = props => shallow(<Button props={props} />);

    describe('Render Button', () => {
        let props;

        beforeEach(() => {
            props = {
                children: null,
                isDisabled: false,
                className: '',
                buttonType: 'Default',
                size: 'Lg',
                type: 'button',
                buttonId: '',
                onClick: () => {}
            };
            wrapper = renderComponent(props);
        });

        test('Should load Button component', () => {
            expect(wrapper.find('button')).toHaveLength(1);
        });
    });

    describe(' Test Suite for <Button /> ', () => {
        let wrapper;

        beforeEach(() => {
            /* Shallow Rendering component in before each to eliminate duplication */
            wrapper = shallow(
                <Button buttonType='Primary' size='Lg' type='submit'>
                    primary Button
                </Button>
            );
        });

        test('Should load Button component', () => {
            expect(wrapper.find('button')).toHaveLength(1);
        });

        test('should be able to render children', () => {
            expect(wrapper.props().children).toBe('primary Button');
            expect(wrapper.props().type).toBe('submit');
        });
    });

    describe(' Render a tag by passing the linktype props ', () => {
        let wrapper;

        beforeEach(() => {
            /* Shallow Rendering component in before each to eliminate duplication */
            wrapper = shallow(
                <Button type='linkbutton' onClick={() => window.open('')} buttonType='Primary' size='Lg'>
                    primary Button
                </Button>
            );
        });

        test('component should exist ', () => {
            expect(wrapper.exists()).toBe(true);
        });

        test('component should contain a tag', () => {
            expect(wrapper.type()).toBe('button');
        });
    });

    describe(' Edge cases for <Button /> ', () => {
        let wrapper;

        beforeEach(() => {
            /* Shallow Rendering component in before each to eliminate duplication */
            wrapper = shallow(
                <Button buttonType='Primary' size={null} type='submit'>
                    primary Button
                </Button>
            );
        });

        test('Card component should exist ', () => {
            expect(wrapper.exists()).toBe(true);
        });
    });
});
