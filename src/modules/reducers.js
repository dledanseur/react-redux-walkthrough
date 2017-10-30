import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import users from './users/reducers';

export default combineReducers({
 users,
 form: formReducer 
});
