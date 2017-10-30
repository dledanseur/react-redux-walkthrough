import React from 'react';
import {reduxForm, Field} from 'redux-form';

let UserAdd = (props) => (
 <form onSubmit={props.handleSubmit}>
   <div>
     <label htmlFor="name">First name</label>
     <Field name="name" component="input" type="text" />
   </div>
   <div>
     <label htmlFor="email">Email</label>
     <Field name="email" component="input" type="text" />
   </div>
   <button type="submit">Valider</button>
 </form>
)

let UserAddForm = reduxForm({
 form: 'useradd' // a unique name for this form
})(UserAdd);

export { UserAddForm };

