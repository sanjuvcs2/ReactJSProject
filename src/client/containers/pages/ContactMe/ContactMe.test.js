import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ContactMeConnect, { ContactMe } from './ContactMe';

describe.only('<ContactMe Page Details />', () => {
    let wrapper;
    const mockStore = configureMockStore([]);
    const store = mockStore();
    const getContactMeFormData = jest.fn();
    const contactActions = {
        getContactMeFormData
    };
    const props = {
        contactActions,
        contactInfo: {
            options: [
                {
                    code: '016',
                    codeGroup: 'ZW2IT',
                    shortText: 'Kreditstatus'
                }
            ],
            concern: 'Concerns',
            showContactMe: true // this is used to show and hide form
        }
    };

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <ContactMeConnect contactActions={props.contactActions} contactInfo={props.contactInfo} />
            </Provider>
        );
    });

    test('Contact Me Connect Page', () => {
        expect(wrapper.find('#contactMe')).toHaveLength(1);
    });

    test('Invoke Main Page event ', () => {
        expect(wrapper.find('.requestmain')).toHaveLength(1);
    });

    describe('ContactMe Page Render Method ', () => {
        const wrapper = mount(<ContactMe  showContactMe={false} contactActions={props.contactActions} contactInfo={props.contactInfo} />);
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

       test('Invoke onClick event ', () => {
        const wrapperNew = shallow(<ContactMe showContactMe={false} contactActions={props.contactActions} contactInfo={props.contactInfo} />);
        wrapperNew
        .instance()
        .onNameChange({ target: { name: 'timePeriodValue', value: 'jhgj', type: 'addUser' } });
        
        wrapperNew
        .instance()
        .onEmailChange({ target: { name: 'timePeriodValue', value: 'email', type: 'addUser' } });

        wrapperNew
        .instance()
        .onSubjectChange({ target: { name: 'timePeriodValue', value: 'email', type: 'addUser' } });

        wrapperNew
        .instance()
        .onSubjectChange({ target: { name: 'timePeriodValue', value: 'email', type: 'addUser' } });
    
    
        wrapperNew
        .instance()
        .onMsgChange({ target: { name: 'timePeriodValue', value: 'email', type: 'addUser' } });

         wrapperNew.setState({ formSuccess: true });
        //const eventElse = { preventDefault: jest.fn(), target:  { value: 'sss' } };
        //wrapperNew.find('#contact-form').simulate('submit', eventElse);

        wrapperNew
        .instance()
        .submitEmail({ preventDefault: jest.fn(), target: { name: 'timePeriodValue', value: 'email', type: 'addUser' } });
        wrapperNew.setState({ formSuccess: false });
    });

    });
});