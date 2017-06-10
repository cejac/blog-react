import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
renderField(field) {
  return (
    <div className='form-group'>
      <label>{field.label}</label>
      <input className='form-control'
        type='text'
        {...field.input}
      />
      {field.meta.error}
    </div>
  )
}

  render() {
    return (
      <form>
        <Field
          label="Title"
          name='title'
          component={this.renderField}
        />
        <Field
          label="Categories"
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Conent'
          name='content'
          component={this.renderField}
        />
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if(!values.title){
    errors.titile = 'Enter a title';
  }

  if(!value.categories) {
    errors.categories = 'Enter a category'
  }

  if(!values.content) {
    errors.conent = 'Enter conent'
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' //make sure this is unique so it does not share state with any other forms
})(PostsNew);
