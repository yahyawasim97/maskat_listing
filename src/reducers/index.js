import React from 'react';
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import listingReducer from './listingReducer';
const reducers = combineReducers({
    auth: authReducer,
    listing: listingReducer
});
export default reducers;