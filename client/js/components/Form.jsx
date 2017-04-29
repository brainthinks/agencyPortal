import React from 'react';
import axios from 'axios';
import find from 'lodash/find';

import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Radio,
} from 'react-bootstrap';

function FieldGroup ({ id, label, description, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      { description && <p>{description}</p> }
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class Form extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      form: null,
      entries: [],
    };

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

  getValidationState () {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  prepareEntry (id) {
    const entry = find(this.state.entries, { _id: id });
    let formControl;

    switch (entry.type) {
      case 'singleChoice': {
        formControl = (
          <FormGroup
            key={id}
          >
            <ControlLabel>{entry.text}</ControlLabel>
            <p>{entry.description}</p>
            {entry.choices.map((choice, i) => {
              return (
                <Radio
                  key={`${id}_${i}`}
                  name={id}
                  inline>{choice}
                </Radio>
              );
            })}
          </FormGroup>
        );

        break;
      }
      case 'shortText': {
        formControl = (
          <FieldGroup
            key={id}
            type="text"
            label={entry.text}
            description={entry.description}
            placeholder="Enter text"
          />
        );

        break;
      }
      case 'longText': {
        formControl = (
          <FormGroup
            key={id}
          >
            <ControlLabel>{entry.text}</ControlLabel>
            <p>{entry.description}</p>
            <FormControl
              componentClass="textarea"
              placeholder="Tell us a little bit about it..."
            />
          </FormGroup>
        );

        break;
      }
      case 'dateRange': {
        formControl = (
          <FieldGroup
            key={id}
            type="text"
            label={entry.text}
            description={entry.description}
            placeholder="Enter a date"
          />
        );

        break;
      }
      case 'number': {
        formControl = (
          <FieldGroup
            key={id}
            type="text"
            label={entry.text}
            description={entry.description}
            placeholder="Enter a number"
          />
        );

        break;
      }
    }

    return formControl;
  }

  render () {
    const { form } = this.state;

    if (!form) {
      return (
        <div>
          <p>Loading....</p>
        </div>
      );
    }

    return (
      <div>
        <h1>{form.title}</h1>
        <p>{form.description}</p>
        <form>
          {form.entries.map((entryId) => this.prepareEntry(entryId))}
        </form>
        <Button bsStyle='primary'>Submit</Button>
      </div>
    );
  }
}
