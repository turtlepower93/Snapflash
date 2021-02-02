import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again'});
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
        <p className="error-message">&nbsp;{this.state.error}</p>
          <form className="form-auth" autoComplete="off" onSubmit={this.handleSubmit}>
            <label className="label-auth">Name</label>
            <input className="input-auth" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label className="label-auth">Email</label>
            <input className="input-auth" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label className="label-auth">Password</label>
            <input className="input-auth" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label className="label-auth">Confirm</label>
            <input className="input-auth" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button className="button-auth" type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }
}