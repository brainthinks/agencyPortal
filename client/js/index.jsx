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
import Admin from './components/Admin.jsx';

const BasicExample = () => (
  <Router>
    <div>
      <Nav bsStyle='pills'>
        <img
          src='/logo.png'
          style={{
            width: '120px',
            padding: '5px 10px',
          }}
        />
        <Link to='/' style={{ marginLeft: '50px' }}>Dashboard</Link>
        <Link to='/forms' style={{ marginLeft: '50px' }}>Forms</Link>
        <Link to='/admin' style={{ marginLeft: '50px' }}>Admin</Link>
      </Nav>

      <hr/>

      <Grid>
        <Row className='show-grid'>
          <Col md={1}>
          </Col>
          <Col md={10}>
            <Route exact path='/' component={Dashboard} />
            <Route path='/forms' component={Form} />
            <Route path='/admin' component={Admin} />
          </Col>
          <Col md={1}>
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
