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
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';

const BasicExample = () => (
  <Router>
    <div>
      <Nav bsStyle='pills'>
        <img
          src='/img/logo.png'
          style={{
            width: '120px',
            padding: '5px 10px',
          }}
        />
        <Link to='/' style={{ marginLeft: '50px' }}>Login</Link>
        <Link to='/dashboard' style={{ marginLeft: '50px' }}>Dashboard</Link>
        <Link to='/forms' style={{ marginLeft: '50px' }}>Forms</Link>
        <Link to='/admin' style={{ marginLeft: '50px' }}>Admin</Link>
        <Link to='/logout' style={{ marginLeft: '50px' }}>Logout</Link>
      </Nav>

      <hr/>

      <Grid>
        <Row className='show-grid'>
          <Col md={1}>
          </Col>
          <Col md={10}>
            <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/forms' component={Form} />
            <Route path='/admin' component={Admin} />
            <Route path='/logout' component={Logout} />
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

ReactDOM.render(BasicExample(), document.getElementById('app'));
