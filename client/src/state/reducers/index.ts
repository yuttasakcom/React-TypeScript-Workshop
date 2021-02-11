import { combineReducers } from 'redux';

import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers(repositoriesReducer);

export default reducers;
