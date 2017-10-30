import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserAddForm } from '../components/user-add.component';
import { saveUser } from '../action-creators';
import { withRouter } from 'react-router';

class UserAddContainer extends Component {
 render() {
   return (
     <UserAddForm onSubmit={this.props.saveUser}/>
   )
 }
}
let mapDispathToProps = (dispatch, ownProps) => {
 return {
   saveUser: (values) => dispatch(saveUser(ownProps.history, values))
 }
}

export default withRouter(connect(null, mapDispathToProps)(UserAddContainer));

