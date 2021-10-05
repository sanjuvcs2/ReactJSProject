import React from 'react';
import { mount} from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AboutUsConnect, { AboutUs } from './AboutUs';

describe('<AboutUs Page Details />', () => {
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
                <AboutUsConnect actions={props.actions} pageContent={props.pageContent} />
            </Provider>
        );
    });

    test('AboutConnect Page', () => {
        expect(wrapper.find('#aboutus')).toHaveLength(1);
    });

    describe('About Page Render Method ', () => {
        const wrapper = mount(<AboutUs actions={props.actions} pageContent={props.pageContent} />);
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