import React, {Component, PropTypes} from 'react';
import {
  Grid,
  Col,
  Well,
  Button,
  FormGroup,
  FormControl,
  Alert
} from 'react-bootstrap';

import '../../css/Login.css';
import { apiCall } from '../../services/api';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      error: null
    }
  }

  componentDidMount() {
    if(localStorage.getItem('advisor')) {
      this.context.router.replace('dashboard');
    }
  }

  _login = () => {
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: this.state.username})
    }
    apiCall('/login', opts)
      .then(advisor => {
        localStorage.setItem('advisor', JSON.stringify(advisor));
        this.context.router.replace('dashboard');
      })
      .catch(e => this.setState({ error: e.message}));
  }

  render() {
    const { error } = this.state;

    return (

      <Grid className="Grid">
        <Col md={6} mdOffset={3} className="login-box">
          <Well>
            <h3 className="text-center">MavAdmin</h3>

            { error &&
              <Alert bsStyle="danger">{error}</Alert>
            }

            <FormGroup>
              <FormControl
                onChange={e => this.setState({username: e.target.value})}
                type="text"
                placeholder="Advisor Username" />
            </FormGroup>

            <Button 
              bsStyle="primary"
              className="btn-raised"
              block
              onClick={this._login}>
              Go Online
            </Button>
          </Well>
        </Col>
      </Grid>

    );
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };
}

export default Login;