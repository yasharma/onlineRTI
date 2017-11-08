import React,{Component} from 'react';
import Http from '../../lib/Http';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import MyRTIList from './MyRTIList';
class MyRTI extends Component {
	constructor() {
		super();
		this.state = {
			myrti: [],
			processing: false
		}
	}
	componentDidMount() {
		const {_id} = this.props.user;
		this.setState({processing: true});
		Http.get(`my-rtis?_id=${_id}`)
		.then(({data}) => this.setState({myrti: data, processing: false}))
		.catch(error => console.log(error));
	}
	render() {
		const {myrti, processing} = this.state;
		return (
			<div className="container padding-40">
				<Table bordered striped responsive>
					<thead>
					    <tr>
					        <th>#</th>
					        <th>Category</th>
					        <th>Plan</th>
					        <th>RTI No</th>
					        <th>Status</th>
					        <th>Date</th>
					        <th>Action</th>
					    </tr>
					</thead>
					<tbody>
						{myrti.length > 0
						? 	myrti.map((list, index) => <MyRTIList list={list} index={index} key={index} />)
						: (processing) 
							? <tr><td colSpan="7" className="text-center">Loading ...</td></tr>
							: <tr><td colSpan="7" className="text-center">No Records</td></tr> }
					</tbody>
				</Table>
			</div>	
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(MyRTI);