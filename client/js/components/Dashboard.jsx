import React from 'react';

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p>This is where you will be able to see the following:</p>
        <ul>
          <li>The forms you have submitted that are pending approval</li>
          <li>The forms you have submitted that have been approved</li>
          <li>The forms you have submitted that have been rejected</li>
          <li>If you are a supervisor or purchaser, the forms that are pending your approval</li>
          <li>If you are a supervisor or purchaser, the forms that you have approved</li>
          <li>If you are a supervisor or purchaser, the forms that you have rejected</li>
        </ul>
      </div>
    );
  }
}
