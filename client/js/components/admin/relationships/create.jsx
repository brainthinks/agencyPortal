import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';

import FieldGroup from '~/components/FieldGroup';

export default class RelationshipCreateView extends React.Component {
  state = {
    _submitted: false,
    name: '',
    title: '',
    description: '',
  }

  constructor (props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (name, value) {
    this.setState({ [name]: value });
  }

  onSubmit () {
    axios.post('/api/relationship', {
      name: this.state.name,
      title: this.state.title,
      description: this.state.description,
    })
      .then(() => {
        this.setState({ _submitted: true });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render () {
    const {
      _submitted,
      name,
      title,
      description,
    } = this.state;

    if (_submitted) {
      return (
        <Redirect push to='/admin/relationships'/>
      );
    }

    return (
      <div>
        <h1>Create New Relationship</h1>
        <p>Note that until relationships are better defined, creating a new record here will not result in any new functionality.  It is likely that since relationships are so tightly coupled to the business logic of this application, the admin section for relationships will be removed in a future release.</p>
        <form>
          <FieldGroup
            key='name'
            id='name'
            type='text'
            label='Name'
            description='The name of this relationship.'
            onChange={this.onChange}
            value={name}
            placeholder='Enter Name'
          />
          <FieldGroup
            key='title'
            id='title'
            type='text'
            label='Title'
            description='The title of this relationship.'
            onChange={this.onChange}
            value={title}
            placeholder='Enter Title'
          />
          <FieldGroup
            key='description'
            id='description'
            type='textarea'
            label='Description'
            description='The description of this relationship.'
            onChange={this.onChange}
            value={description}
            placeholder='Enter Description'
          />
        </form>
        <Button
          bsStyle='primary'
          onClick={this.onSubmit}
        >Submit</Button>
      </div>
    );
  }
}
