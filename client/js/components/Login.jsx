import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import FieldGroup from './FieldGroup.jsx';

export default class LoginView extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      loggedInUser: null,
    };

    this.onChange = this.onChange.bind(this);

    this.initialize();
  }

  initialize () {
    axios.get('/api/user')
      .then(({ data }) => {
        this.setState({ users: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  onChange (name, value) {
    window.userId = value;

    this.setState({ loggedInUser: value });
  }

  render () {
    const { users, loggedInUser } = this.state;

    if (loggedInUser) {
      return (
        <Redirect push to='/dashboard'/>
      );
    }

    if (!users.length) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    const id = 'users';

    return (
      <div>
        <FieldGroup
          key={id}
          id={id}
          type='select'
          label='Choose a user to login as'
          options={users.map((user) => {
            return {
              value: user._id,
              text: user.username,
            };
          })}
          onChange={this.onChange}
          placeholder='Choose One'
        />
      </div>
    );
  }
}
