import { legacy_createStore as createStore } from 'redux';
import todoSpaApp from './redusers.tsx/redusers';


const store = createStore(todoSpaApp)

export default store;