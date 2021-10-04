import LoaderReducer from './LoaderReducer';
import LoginReducer from './LoginReducer';
import PageContentReducer from './PageContentReducer';
import ContactInfoReducer from './ContactInfoReducer';

const rootReducer = {
    isLoading: LoaderReducer,
    loginDetails: LoginReducer,
    pageContent: PageContentReducer,
    contactInfo: ContactInfoReducer,
};

export default rootReducer;
