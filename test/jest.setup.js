import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StorageMock from './StorageMock';

configure({ adapter: new Adapter() });

global.sessionStorage = new StorageMock();
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });
Object.defineProperty(window, 'confirm', { value: () => {}, writable: true });
Object.defineProperty(window.navigator, 'userAgent', { value: '', writable: true });

