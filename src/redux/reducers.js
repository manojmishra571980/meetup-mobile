import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';


export default combineReducers({ 
     fake: () => ['hello']
    });   //fake function reutrn an array