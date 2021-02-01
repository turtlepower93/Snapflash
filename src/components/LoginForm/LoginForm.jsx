import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      { error !== '' ? <p className="error-message">&nbsp;{error}</p> : <></> }
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="form-auth" autoComplete="off" >
          <label className="label-auth">Email</label>
          <input className="input-auth" type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label className="label-auth">Password</label>
          <input className="input-auth" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button className="button-auth" type="submit">LOG IN</button>
        </form>
      </div>
    </div>
    </>
  );
}