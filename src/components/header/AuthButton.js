import React, {Component} from 'react';
import {NavItem} from 'react-bootstrap';
import {connect} from 'react-redux';
class AuthButton extends Component {
	render() {
		const { token, showLogin } = this.props;
		return (
			token ? (
				<NavItem onClick={() => this.logout()} eventKey={1}>Logout</NavItem>
			) : (
				<NavItem onClick={showLogin} eventKey={1}>Login</NavItem>
			)
		);
	}
	logout() {
		//const { dispatch } = this.props;
	  	console.log('logout');
	}
}
const mapStateToProps = (state) => ({
	token: state.auth.token
});

export default connect(mapStateToProps)(AuthButton);