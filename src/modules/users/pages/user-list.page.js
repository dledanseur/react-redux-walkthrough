import React from 'react';
import UserListContainer from '../containers/user-list.container';
import UserAddContainer from '../containers/user-add.container';

import { Link, Route, Switch } from 'react-router-dom';

export let UserPage = (props) => {
  return (
    <div>
      <Link to="/users/add">Add user</Link>
      <Switch>
        <Route path="/users" exact component={UserListContainer}/>
        <Route path="/users/add" component={UserAddContainer} />
      </Switch>
    </div>
  )
}
