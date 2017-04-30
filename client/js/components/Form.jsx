import React from 'react';
import axios from 'axios';
import find from 'lodash/find';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';

import FieldGroup from './FieldGroup.jsx';

export default class Form extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      form: null,
      entries: [],
      submitted: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.initialize();
  }

  initialize () {
    Promise.all([
      axios.get('/api/form/5904b62d657c15c7225edf03'),
      axios.get('/api/entry'),
    ])
      .then(([ formResponse, entryResponse ]) => {
        this.setState({
          form: formResponse.data,
          entries: entryResponse.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onChange (name, value) {
    this.setState({ [name]: value });
  }

  onSubmit () {
    const {
      form,
      entries,
      submitted,
      ...submittedEntries,
    } = this.state;

    const record = {
      userId: window.userId,
      formId: form._id,
      submittedEntries,
    }

    console.log(record)

    // axios.post('/api/submittedForm', record)
    //   .then(() => {
    //     this.setState({ submitted: true });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  prepareEntry (id) {
    const entry = find(this.state.entries, { _id: id });

    switch (entry.type) {
      case 'singleChoice': {
        return (
          <FieldGroup
            key={id}
            id={id}
            type="radio"
            label={entry.text}
            description={entry.description}
            options={entry.choices}
            onChange={this.onChange}
            placeholder="Enter text"
          />
        );
      }
      case 'shortText': {
        return (
          <FieldGroup
            key={id}
            id={id}
            type="text"
            label={entry.text}
            description={entry.description}
            onChange={this.onChange}
            placeholder="Enter text"
          />
        );
      }
      case 'longText': {
        return (
          <FieldGroup
            key={id}
            id={id}
            type="textarea"
            label={entry.text}
            description={entry.description}
            onChange={this.onChange}
            placeholder="Enter text"
          />
        );
      }
      case 'dateRange': {
        return (
          <FieldGroup
            key={id}
            id={id}
            type="text"
            label={entry.text}
            description={entry.description}
            onChange={this.onChange}
            placeholder="Enter a date"
          />
        );
      }
      case 'number': {
        return (
          <FieldGroup
            key={id}
            id={id}
            type="text"
            label={entry.text}
            description={entry.description}
            onChange={this.onChange}
            placeholder="Enter a number"
          />
        );
      }
    }
  }

  render () {
    const {
      form,
      submitted,
    } = this.state;

    if (!form) {
      return (
        <div>
          <p>Loading....</p>
        </div>
      );
    }

    if (submitted) {
      return (
        <Redirect push to='/myForms'/>
      );
    }

    return (
      <div>
        <h1>{form.title}</h1>
        <p>{form.description}</p>
        <form>
          {form.entries.map((entryId) => this.prepareEntry(entryId))}
        </form>
        <Button
          bsStyle='primary'
          onClick={this.onSubmit}
        >Submit</Button>
      </div>
    );
  }
}
