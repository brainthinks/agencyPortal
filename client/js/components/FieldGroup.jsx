import React from 'react';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Radio,
} from 'react-bootstrap';

export default class FieldGroup extends React.Component {
  constructor (props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
    const target = event.target;
    const name = target.name;
    let value;

    switch (target.type) {
      case 'radio': {
        value = target.getAttribute('data-value');
        break;
      }
      case 'checkbox': {
        // @todo
        value = target.checked;
        break;
      }
      default: {
        value = target.value;
      }
    }

    this.props.onChange(name, value);
  }

  render () {
    const {
      id,
      label,
      type,
      description,
      options,
      help,
      onChange,
      ...props
    } = this.props;

    let formControl;

    switch (type) {
      case 'radio': {
        formControl = options.map((choice, i) => {
          return (
            <Radio
              key={`${id}_${i}`}
              name={id}
              onChange={this.onChange}
              data-value={choice}
              {...props}
            >{choice}</Radio>
          );
        });

        break;
      }

      case 'textarea': {
        formControl = (
          <FormControl
            name={id}
            componentClass="textarea"
            placeholder="Tell us a little bit about it..."
            onChange={this.onChange}
            {...props}
          />
        );

        break;
      }

      case 'select': {
        formControl = (
          <FormControl
            name={id}
            componentClass='select'
            onChange={this.onChange}
            {...props}
          >
            <option
              key=''
              value=''
            >{props.placeholder}</option>
            {options.map((option, i) => {
              return (
                <option
                  key={i}
                  value={option.value}
                >{option.text}</option>
              );
            })}
          </FormControl>
        );

        break;
      }

      default: {
        formControl = (
          <FormControl
            name={id}
            onChange={this.onChange}
            {...props}
          />
        );
      }
    }

    return (
      <FormGroup>
        { label && <ControlLabel>{label}</ControlLabel> }
        { description && <p>{description}</p> }
        { formControl }
        { help && <HelpBlock>{help}</HelpBlock> }
      </FormGroup>
    );
  }
}
