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
          <p>As an employee, you will be able to:</p>
          <ul>
            <li>See your submission history</li>
            <li>Filter by approved</li>
            <li>Filter by rejected</li>
            <li>Filter by pending approval</li>
          </ul>
        </div>
        <hr />
        <div>
          <p>As a supervisor or purchaser, you will be able to see:</p>
          <ul>
            <li>the submission history for each of your direct reports</li>
            <li>your pending approvals</li>
            <li>approvals</li>
            <li>rejections</li>
          </ul>
        </div>
      </div>
    );
  }
}
