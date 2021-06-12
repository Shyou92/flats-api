import { combineReducers } from 'redux';
import flatReducer from './flatReducer';

export const rootReducer = combineReducers({ flatReducer });
