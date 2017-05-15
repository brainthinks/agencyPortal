import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Griddle, {
  plugins,
  RowDefinition,
  ColumnDefinition,
} from 'griddle-react';

import {
  Table,
  RowApplier,
} from '~/components/table/';

export default class RelationshipsView extends React.Component {
  state = {
    relationships: [],
    loading: true,
  }

  componentDidMount () {
    this.initialize();
  }

  initialize () {
    axios.get(`/api/relationship`)
      .then(({ data }) => {
        this.setState({
          relationships: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  prepareRelationships () {
    return (
      <Griddle
        data={this.state.relationships}
        plugins={[plugins.LocalPlugin]}
        components={{ Layout: Table }}
      >
        <RowDefinition>
          <ColumnDefinition
            key='title'
            id='title'
            title='Title'
            customComponent={RowApplier(({ value, rowData }) => (
              <Link to={`/admin/relationships/${rowData.get('_id')}`}>{value}</Link>
            ))}
          />
          <ColumnDefinition
            key='description'
            id='description'
            title='Description'
          />
        </RowDefinition>
      </Griddle>
    );
  }

  render () {
    if (this.state.loading) {
      return (
        <p className='center'>Loading Relationships...</p>
      );
    }

    if (!this.state.relationships.length) {
      return (
        <p className='center'>No relationships have been defined yet.  <Link to='/admin/relationships/new'>Click here to create one</Link>.</p>
      );
    }

    return (
      <div>
        <h1>Relationships</h1>
        <p>Here are all of the currently defined relationships.  Click on a title to go to that relationship, or <Link to='/admin/relationships/new'>click here to create one</Link>.</p>
        { this.prepareRelationships() }
      </div>
    );
  }
}
