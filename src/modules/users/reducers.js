import user_actions from './action-types';

let listReducer = (state=[],action) => {
 switch (action.type) {
   case user_actions.USER_LOADED: return action.users;
   default: return state;
 }
}

let usersReducer = (state={},action) => {
 return {
   list: listReducer(state.list, action)
 }
}

export default usersReducer;
