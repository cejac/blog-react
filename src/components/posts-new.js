import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
renderTitleField(field) {
  return (
    <div>
      <input
        type='text'
        {...field.input}
      />
    </div>
  )
}

  render() {
    return (
      <form>
        <Field
          name='title'
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm' //make sure this is unique so it does not share state with any other forms
})(PostsNew);
