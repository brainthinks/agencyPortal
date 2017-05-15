import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';

import FieldGroup from '~/components/FieldGroup';

export default class RelationshipView extends React.Component {
  state = {
    initialState: null,
    record: null,
    loading: true,
    editing: false,
    returnToList: false,
  }

  constructor (props) {
    super(props);

    this.onChange         = this.onChange.bind(this);
    this.onEdit         = this.onEdit.bind(this);
    this.onReturnToList = this.onReturnToList.bind(this);
    this.onDelete       = this.onDelete.bind(this);
    this.onSave         = this.onSave.bind(this);
    this.onCancel       = this.onCancel.bind(this);
  }

  componentDidMount () {
    this.initialize();
  }

  initialize () {
    const id = this.props.match.params.id;

    axios.get(`/api/relationship/${id}`)
      .then(({ data }) => {
        this.setState({
          initialState: data,
          record: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onChange (name, value) {
    const updatedRecord = Object.assign({}, this.state.record, { [name]: value });

    this.setState({ record: updatedRecord });
  }

  onEdit () {
    this.setState({ editing: true });
  }

  onReturnToList () {
    this.setState({ returnToList: true });
  }

  onDelete () {
    const id = this.props.match.params.id;

    axios.delete(`/api/relationship/${id}`)
      .then(() => {
        this.setState({ returnToList: true });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onSave () {
    const id = this.props.match.params.id;

    axios.put(`/api/relationship/${id}`, this.state.record)
      .then(({ data }) => {
        console.log(data)
        this.setState({
          initialState: data,
          record: data,
          editing: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onCancel () {
    this.setState({
      record: this.state.initialState,
      editing: false,
    });
  }

  prepareHeader () {
    const { editing } = this.state;

    return (
      <div style={{ display: 'inline-block', width: '100%'}}>
        {editing
          ? <div>
              <div className='pull-left'>
                <Button
                  bsStyle='danger'
                  onClick={this.onDelete}
                >Delete - are you sure?</Button>
              </div>
              <div className='pull-right'>
                <Button
                  bsStyle='primary'
                  onClick={this.onSave}
                >Save</Button>
                <Button
                  bsStyle='default'
                  onClick={this.onCancel}
                >Cancel</Button>
              </div>
            </div>

          : <div>
              <div className='pull-right'>
                <Button
                  bsStyle='primary'
                  onClick={this.onEdit}
                >Edit</Button>
                <Button
                  bsStyle='default'
                  onClick={this.onReturnToList}
                >Return to List</Button>
              </div>
            </div>
        }
      </div>
    );
  }

  render () {
    const {
      initialState,
      record,
      loading,
      editing,
      returnToList,
    } = this.state;

    if (returnToList) {
      return (
        <Redirect push to='/admin/relationships'/>
      );
    }

    if (loading) {
      return (
        <div>
          <p className='center'>Loading...</p>
        </div>
      );
    }

    if (!initialState) {
      return (
        <div>
          <p className='center'>Failed to load this relationship!</p>
        </div>
      );
    }

    return (
      <div>
        { this.prepareHeader() }
        <div>
          <FieldGroup
            key='name'
            id='name'
            type='text'
            label='Name'
            description='The name of this relationship.'
            onChange={this.onChange}
            value={record.name}
            placeholder='Enter Name'
            disabled={!editing}
          />
          <FieldGroup
            key='title'
            id='title'
            type='text'
            label='Title'
            description='The title of this relationship.'
            onChange={this.onChange}
            value={record.title}
            placeholder='Enter Title'
            disabled={!editing}
          />
          <FieldGroup
            key='description'
            id='description'
            type='textarea'
            label='Description'
            description='The description of this relationship.'
            onChange={this.onChange}
            value={record.description}
            placeholder='Enter Description'
            disabled={!editing}
          />
        </div>
      </div>
    );
  }
}
