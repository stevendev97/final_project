// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // You will create this next

const store = createStore(rootReducer);

export default store;
