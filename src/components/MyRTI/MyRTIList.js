import React from 'react';
import {Button} from 'react-bootstrap';
import moment from 'moment';
import {LinkContainer} from 'react-router-bootstrap';
const MyRTIList = ({list, index}) => {
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{list.category.title}</td>
			<td>{list.plan.rs}</td>
			<td>{list.rtino}</td>
			<td>{list.status}</td>
			<td>{moment(list.created_at).format('MMM DD, YYYY')}</td>
			<td>
				<LinkContainer to={`/dashboard/app-progress/${list.rtino}`}>
					<Button bsStyle="info" bsSize="xsmall">Detail</Button>
				</LinkContainer>	
			</td>
		</tr>
	);
}

export default MyRTIList;