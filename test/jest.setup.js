import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StorageMock from './StorageMock';

configure({ adapter: new Adapter() });

global.sessionStorage = new StorageMock();

global.localStorage = window.localStorage;

Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });
Object.defineProperty(window, 'confirm', { value: () => {}, writable: true });
Object.defineProperty(window.navigator, 'userAgent', { value: '', writable: true });

global.window.requestAnimationFrame = function (callback) {
    window.setTimeout(callback, 0);
    return 0;
  };