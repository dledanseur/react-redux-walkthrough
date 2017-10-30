import action_types from './action-types';

let load_users = () => {

 return {
   type: action_types.USER_LOADED,
   users: [{
     name: "John Doe",
     email: "john.doe@example.com"
   }]
 }}

export { load_users };
