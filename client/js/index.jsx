import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import {
  Nav,
  Col,
  Grid,
  Row,
} from 'react-bootstrap';

import Form from './components/Form.jsx';
import Dashboard from './components/Dashboard.jsx';

const BasicExample = () => (
  <Router>
    <div>
      <Nav bsStyle="pills">
        <Link to="/" style={{ marginLeft: '50px' }}>Home</Link>
        <Link to="/myForms" style={{ marginLeft: '50px' }}>Dashboard</Link>
        <Link to="/newForm" style={{ marginLeft: '50px' }}>New Form</Link>
      </Nav>

      <hr/>

      <Grid>
        <Row className="show-grid">
          <Col md={2}>
          </Col>
          <Col md={8}>
            <Route exact path="/" component={Form} />
            <Route path="/myForms" component={Dashboard} />
            <Route path="/newForm" component={Form} />
          </Col>
          <Col md={2}>
          </Col>
        </Row>
      </Grid>

      <hr/>

      <div style={{ height: '50px' }}/>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

window.userId = '5904b38d960b537a3de2c8ca';

ReactDOM.render(BasicExample(), document.getElementById('app'));
