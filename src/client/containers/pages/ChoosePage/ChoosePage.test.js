import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ChoosePageConnect, { ChoosePage } from './ChoosePage';

describe.only('<ChoosePage Details />', () => {
    let wrapper;
    const mockStore = configureMockStore([]);
    const store = mockStore();
    const getPageContent = jest.fn();
    const actions = {
        getPageContent
    };
    const props = {
        actions,
        pageContent: {
            data: {
                userId: 1,
                id: 1,
                hometitle: 'Home',
                aboutUs: 'About Us',
                innerTitle: "The standard Lorem Ipsum passage, used since the 1500s",
                imgurl: 'http://placehold.it/1200x400/2980b9/ffffff&text=Portfolio',
                trans: '1914 translation by',
                homeContentPage: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            }
        }
    };

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <ChoosePageConnect actions={props.actions} pageContent={props.pageContent} />
            </Provider>
        );
    });

    test('Home Connect Page', () => {
        expect(wrapper.find('#choosePage')).toHaveLength(1);
    });

    describe('ChoosePage Page Render Method ', () => {
        const wrapper = mount(<ChoosePage actions={props.actions} pageContent={props.pageContent} />);
        wrapper.setProps({
            pageContent: {
                data: {
                    userId: 1,
                    id: 1,
                    hometitle: 'Home',
                    aboutUs: 'About Us'
                }
            }
        });
       wrapper.update();
    });
});