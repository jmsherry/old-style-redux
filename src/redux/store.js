import {createStore} from 'redux';
import FlashLightReducer from './reducers';

const store = createStore(FlashLightReducer);

export default store;