import { Component } from 'react'
import "./App.css"
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      secondName: '',
      email: '',
      confirmEmail: '',
      mobile: '',
      qualification: '',
      gender: 'male',
      address: '',
      city: '',
      district: '',
      errors: {
        firstName: '',
        secondName: '',
        email: '',
        confirmEmail: '',
        mobile: '',
        qualification: '',
        gender: '',
        address: '',
        city: '',
        district: '',
      },
    }
  }
  // define method as class propety
  handlerFirstnameChange = event => {
    this.setState({
      firstName: event.target.value
    })

  }

  handlerSecondChange = event => {
    this.setState({
      secondName: event.target.value
    })

  }
  handlerEmailChange = event => {
    this.setState({
      email: event.target.value
    })

  }

  handlerAddresssChange = event => {
    this.setState({
      address: event.target.value
    })
  }

  handelerGenderChange = event => {
    this.setState({
      gender: event.target.value
    })
  }
  handlerMobChange = event => {
    this.setState({
      mobile: event.target.value
    })
  }

  handelerQualifChange = event => {
    this.setState({
      qualification: event.target.value
    })
  }

  handleDistrictChange =  (event) => {
    const district = event.target.value;
    let city = '';

    if (district === 'TS') {
      city = 'Hyd';
    } else if (district === 'AP') {
      city = 'Viz';
    }
    
    this.setState({
      district,
      city,
      
    });
  }
  

  handleReset = () => {
    this.setState({
      firstName: '',
      secondName: '',
      email: '',
      confirmEmail: '',
      mobile: '',
      qualification: '',
      gender: '',
      address: '',
      city: '',
      district: '',
    })
  };

  validateForm = () => {
    let isValid = true;
    const errors = {
      firstName: '',
      secondName: '',
      email: '',
      confirmEmail: '',
      mobile: '',
      qualification: '',
      gender: '',
      address: '',
      city: '',
      district: '',
      
    }
    if (this.state.firstName.trim() === '') {
      errors.firstName = 'Name is required';
      isValid = false;
    }
    if (this.state.secondName.trim() === '') {
      errors.secondName = 'Name is required';
      isValid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(this.state.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }
    if (this.state.address.trim() === '') {
      errors.address = 'Address is required';
      isValid = false;
    }
    if (!/^\d+$/.test(this.state.mobile)) {
      errors.mobile = 'Mobile number must contain only numbers.';
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
      <h2>Rigistration form</h2>
        <>
          <label>firstName</label>
          <input type='text' value={this.state.firstName} onChange={this.handlerFirstnameChange} />
          <span className="error">{errors.firstName}</span>

        </>
        <>
          <label>SecondName</label>
          <input type='text' value={this.state.secondName} onChange={this.handlerSecondChange} />
          <span className="error">{errors.secondName}</span>

        </>
        <>
          <label>Email</label>
          <input type='email' value={this.state.email} onChange={this.handlerEmailChange} />
          <span className="error">{errors.email}</span>

        </>
        <>
          <label>Mobile</label>
          <input type='input' value={this.state.mobile} onChange={this.handlerMobChange} />
          <span className="error">{errors.mobile}</span>

        </>
        <>
          <label>Gender</label>
          <select value={this.state.gender}
            onChange={this.handelerGenderChange} >
            <option value="mail">mail</option>
            <option value="femail">femail</option>
          </select>
        </>
        <>
          <label>Address</label>
          <textarea value={this.state.address}
            onChange={this.handlerAddresssChange}></textarea>
                      <span className="error">{errors.address}</span>

        </>

        <>
          <label>Qualification</label>
          <select value={this.state.qualification}
            onChange={this.handelerQualifChange} >
            <option value="btech">Btech</option>
            <option value="inter">Inter</option>
            <option value="ssc">SSC</option>

          </select>
        </><br />
        <>
        
        <select value={this.state.district} onChange={this.handleDistrictChange}>
          <option value="default">Select District</option>
          <option value="ts">TS</option>
          <option value="ap">AP</option>
        </select>

        <input
          type="text"
          id="city"
          value={this.state.city}
          readOnly
        />.

        </><br />
        <>
          <button type="submit">Submit</button> <br /><br />
          <button type="button" onClick={this.handleReset}>Reset</button>
        </>
      </form>
    )
  };
}
export default App