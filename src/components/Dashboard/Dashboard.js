import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import Sidebar from '../common/Sidebar';
import Http from '../../lib/Http';
import AppProgress from './AppProgress';
import AppStatus from './AppStatus';
import RTIApplication from './RTIApplication';
import EditProfile from './EditProfile';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	rtiinfo: {}
        }
    }
    componentDidMount() {
    	const {params} = this.props.match;
    	const {_id} = this.props.user;
    	Http.get(`/rti-info?_id=${_id}&rtino=${params.rtino}`)
    	.then(({data}) => this.setState({rtiinfo: data}))
    	.catch(errors => console.log(errors));
    }
    render() {
    	const { rtiinfo } = this.state; 
    	const { tab, rtino } = this.props.match.params;
        return (	
			<div className="dashborad-group padding-40">
				<div className="container">
					<div className="row">
						<Sidebar rtino={rtino}/>
						<div className="col-sm-7">
							{ tab === "app-progress" && <AppProgress rtiinfo={rtiinfo} /> }
							{ tab === "app-status" && <AppStatus rtiinfo={rtiinfo} /> }
							{ tab === "rti-application" && <RTIApplication rtiinfo={rtiinfo} /> }
							{ tab === "edit-profile" && <EditProfile initialValues={rtiinfo.rti} rtiinfo={rtiinfo} /> }
						</div>
					</div>
				</div>
			</div>	
		);
    }
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);
