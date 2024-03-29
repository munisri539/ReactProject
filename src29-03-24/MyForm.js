import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {
        name: '',
        email: '',
        password: '',
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  validateForm = () => {
    let isValid = true;
    const errors = {
      name: '',
      email: '',
      password: '',
    };

    if (this.state.name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(this.state.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (this.state.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("test");

    if (this.validateForm()) {
      // Perform form submission
      alert('Form submitted successfully');
    } else {
      // Form has validation errors; do not submit
      alert('Form has errors. Please correct them.');
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <span className="error">{errors.name}</span>
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          <span className="error">{errors.email}</span>
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          <span className="error">{errors.password}</span>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
