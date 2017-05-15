import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminView extends React.Component {
  render () {
    return (
      <div>
        <p>This is where you are able to edit all records in the system, if you have the necessary permissions</p>
        <ul>
          <li><Link to='/admin/forms'>Forms</Link></li>
          <li><Link to='/admin/users'>Users</Link></li>
          <li><Link to='/admin/relationships'>Relationships</Link></li>
        </ul>
      </div>
    );
  }
}
