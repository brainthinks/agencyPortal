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
      forms: {},
      directReports: {},
      directReportsSubmittedForms: {},
      showPending: true,
      showApproved: true,
      showRejected: true,
    };

    this.initialize();
  }

  initialize () {
    let submittedForms;
    let forms;
    let directReports;

    Promise.all([
      axios.get(`/api/submittedForm?userId=${window.userId}`),
      axios.get('/api/form?indexById=true'),
      axios.get(`/api/user?indexById=true&supervisors=${window.userId}`),
    ])
      .then(([ _submittedForms, _forms, _directReports ]) => {
        submittedForms = _submittedForms.data;
        forms = _forms.data;
        directReports = _directReports.data;

        const userIdsQuery = Object.keys(directReports).map((directReportId) => {
          return `userId[]=${directReportId}`;
        }).join('&');

        return axios.get(`/api/submittedForm?${userIdsQuery}&indexById=true`);
      })
      .then(({ data }) => {
        this.setState({
          submittedForms: submittedForms,
          forms: forms,
          directReports: directReports,
          directReportsSubmittedForms: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  prepareMySubmissions () {
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
        <h1>My Submission History</h1>
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

  prepareMyTasks () {
    const {
      directReports,
      directReportsSubmittedForms,
      forms,
    } = this.state;

    if (!Object.keys(directReports).length) {
      return (
        <div>
          <h1>My Pending Tasks</h1>
          <p>No direct reports found!</p>
        </div>
      );
    }

    if (!Object.keys(directReportsSubmittedForms).length) {
      return (
        <div>
          <h1>My Pending Tasks</h1>
          <p>You have no pending tasks</p>
        </div>
      );
    }

    const data = Object.keys(directReportsSubmittedForms).map((id) => {
      return {
        user: directReports[directReportsSubmittedForms[id].userId].username,
        form: forms[directReportsSubmittedForms[id].formId].title,
        timestamp: moment(directReportsSubmittedForms[id].timestamp).format(' - LLLL'),
      };
    });

    return (
      <div>
        <h1>My Pending Tasks</h1>
        <Griddle
          data={data}
          plugins={[plugins.LocalPlugin]}
          components={{
            Layout: NewLayout,
          }}
        >
          <RowDefinition>
            <ColumnDefinition
              key='user'
              id='user'
              title='Direct Report'
            />
            <ColumnDefinition
              key='form'
              id='form'
              title='Form'
            />
            <ColumnDefinition
              key='timestamp'
              id='timestamp'
              title='Submitted On'
            />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }

  render () {
    return (
      <div>
        { this.prepareMySubmissions() }
        { this.prepareMyTasks() }
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
