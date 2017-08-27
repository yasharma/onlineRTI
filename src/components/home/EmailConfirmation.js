import React from 'react';
import {Modal} from "react-bootstrap";

class EmailConfirmation extends React.Component {
	constructor (props) { 
		super(props);
		this.state = {
			showConfirmModal: true,
			showFailedModal: true
		};	
	}
	close (modal) {
		// window.location.history.push({search: ''});
		if( modal === 'confirm' ) {
			this.setState({ showConfirmModal: false });
		} else if(modal === 'failed') {
			this.setState({ showFailedModal: false });
		} 
	}
	render() {
		const search = this.props.queryParams.search; // could be '?foo=bar'
		const params = new URLSearchParams(search);
		const emailVerified = params.get('emailVerified'); // bar
		if( emailVerified === 'true' ){
			return (
				<Modal className="login-popup" show={this.state.showConfirmModal} onHide={() => this.close('confirm')}>
					<Modal.Header closeButton>
				    	<Modal.Title>Confirmation</Modal.Title>
				    </Modal.Header>
			        <Modal.Body>
			        	<p>Your email has been verified successfully!!</p>
			        </Modal.Body>
		    	</Modal>
			);	
		} else if ( emailVerified === 'false' ) {
			return (
				<Modal className="login-popup" show={this.state.showFailedModal} onHide={() => this.close('failed')}>
					<Modal.Header closeButton>
				    	<Modal.Title>Confirm</Modal.Title>
				    </Modal.Header>
			        <Modal.Body>
			        	<p>Invalid or expired link</p>
			        </Modal.Body>
		    	</Modal>
			);
		} else {
			return null;
		}
	}
}

export default EmailConfirmation;