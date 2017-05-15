import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import {
  Nav,
  Col,
  Grid,
  Row,
} from 'react-bootstrap';

import Login from '~/components/Login';
import Logout from '~/components/Logout';

import Dashboard from '~/components/Dashboard';
import Form from '~/components/Form';
import Admin from '~/components/Admin';

import FOUR_OH_FOUR from './components/FOUR_OH_FOUR';

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
        <Link to='/logout' style={{ marginLeft: '50px' }}>Logout</Link>

        <Link to='/dashboard' style={{ marginLeft: '50px' }}>Dashboard</Link>
        <Link to='/forms' style={{ marginLeft: '50px' }}>Forms</Link>
        <Link to='/admin' style={{ marginLeft: '50px' }}>Admin</Link>
      </Nav>

      <hr/>

      <Grid>
        <Row className='show-grid'>
          <Col md={1}>
          </Col>
          <Col md={10}>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/logout' component={Logout} />

              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/forms' component={Form} />
              <Route exact path='/admin' component={Admin.Index} />

              <Route exact path='/admin/users' component={Admin.Users.Index} />
              <Route exact path='/admin/users/new' component={Admin.Users.Create} />
              <Route path='/admin/users/:id' component={Admin.Users.View} />

              <Route exact path='/admin/forms' component={Admin.Forms.Index} />
              <Route exact path='/admin/forms/new' component={Admin.Forms.Create} />
              <Route path='/admin/forms/:id' component={Admin.Forms.View} />

              <Route exact path='/admin/relationships' component={Admin.Relationships.Index} />
              <Route exact path='/admin/relationships/new' component={Admin.Relationships.Create} />
              <Route path='/admin/relationships/:id' component={Admin.Relationships.View} />

              <Route component={FOUR_OH_FOUR} />
            </Switch>
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
