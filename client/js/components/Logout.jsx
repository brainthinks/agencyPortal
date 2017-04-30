import React from 'react';
import { Redirect } from 'react-router';

export default class LogoutView extends React.Component {
  render () {
    window.userId = null;

    return (
      <Redirect push to='/'/>
    );
  }
}
