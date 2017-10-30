import axios from 'axios';
import action_types from './action-types';

let load_users = () => {

  return (dispatch) => {
    axios.get('http://demo7403400.mockable.io/users').then( users => {
     
      dispatch({
        type: action_types.USER_LOADED,
        users: users.data
      })
     
    }).catch( (e) => {
      console.log(e);
    })
  }
}

export { load_users };
