import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Griddle, {
  plugins,
  RowDefinition,
  ColumnDefinition,
} from 'griddle-react';

const NewLayout = ({ Table, Filter }) => (
  <div>
    <div style={{ paddingBottom: '10px' }}>
      <Filter />
    </div>
    <div>
      <Table />
    </div>
  </div>
);

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      submittedForms: [],
      forms: [],
      showPending: true,
      showApproved: true,
      showRejected: true,
    };

    this.initialize();
  }

  initialize () {
    Promise.all([
      axios.get('/api/submittedForm'),
      axios.get('/api/form?indexById=true'),
    ])
      .then(([ submittedForms, forms ]) => {
        this.setState({
          submittedForms: submittedForms.data,
          forms: forms.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  prepareTable () {
    const { submittedForms, forms } = this.state;

    if (!submittedForms.length) {
      return (
        <div>You have not submitted any forms yet.</div>
      );
    }

    const data = submittedForms.map((submittedForm) => {
      let status = 'Approved!';

      if (!submittedForm.approvedPaths.length) {
        status = [
          'Pending Supervisor Approval',
          'Pending Purchaser Approval',
        ];
      }

      if (submittedForm.approvedPaths.length === 1) {
        status = [
          'Pending Purchaser Approval',
        ];
      }

      return {
        form: forms[submittedForm.formId].title,
        submitted: moment(submittedForm.timestamp).format(' - LLLL'),
        status,
      };
    });

    return (
      <div>
        <Griddle
          data={data}
          plugins={[plugins.LocalPlugin]}
          components={{
            Layout: NewLayout,
          }}
        >
          <RowDefinition>
            <ColumnDefinition
              key='form'
              id='form'
              title='Form'
            />
            <ColumnDefinition
              key='submitted'
              id='submitted'
              title='Submitted'
            />
            <ColumnDefinition
              key='status'
              id='status'
              title='Status'
              customComponent={({ value }) => {
                return (
                  <ul>
                    { value.map((aValue) => {
                      return ( <li key={aValue}>{aValue}</li> );
                    })}
                  </ul>
                );
              }}
            />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }

  render () {
    return (
      <div>
        { this.prepareTable() }
        <hr />
        <div>
          <p>This is where you will be able to see the following:</p>
          <ul>
            <li>If you are a supervisor or purchaser, the forms that are pending your approval</li>
            <li>If you are a supervisor or purchaser, the forms that you have approved</li>
            <li>If you are a supervisor or purchaser, the forms that you have rejected</li>
          </ul>
        </div>
      </div>
    );
  }
}
