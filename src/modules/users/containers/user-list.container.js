import React, { Component } from 'react';
import { UserListComponent } from '../components/user-list.component'
import { connect } from 'react-redux';
import { load_users } from '../action-creators';

export class UserListContainer extends Component {

 componentDidMount() {
   this.props.dispatch(load_users());
 }
  render() {
   return (
     <UserListComponent users={this.props.users} />
   )
 }

}

let mapStateToProps = (state) => {
 return {
   users: state.users.list
 }
}

export default connect(mapStateToProps)(UserListContainer)
