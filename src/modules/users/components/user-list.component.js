import React from 'react';
let userRows = (users) => {
 return users.map( u => {
   return (
     <tr key={u.email}>
       <td>{u.name}</td>
       <td>{u.email}</td>
     </tr>
   )
 })
}
export let UserListComponent = (props) => {
 return (
   <table>
     <thead>
       <tr>
         <td>Name</td>
         <td>Email</td>
       </tr>
     </thead>
     <tbody>
       { userRows(props.users) }
     </tbody>
   </table>
 )
}
