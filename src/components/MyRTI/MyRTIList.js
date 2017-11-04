import React from 'react';
import {Button} from 'react-bootstrap';
const MyRTIList = ({list, index}) => {
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{list.category.title}</td>
			<td>{list.plan.rs}</td>
			<td>{list.rtino}</td>
			<td>{list.status}</td>
			<td>{list.created_at}</td>
			<td>
				<Button>Detail</Button>
			</td>
		</tr>
	);
}

export default MyRTIList;