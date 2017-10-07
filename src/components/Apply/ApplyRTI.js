import React, {Component} from 'react';
import Banner from './ApplyBanner';
import ApplyByCategories from './ApplyByCategories';
import Http from '../../lib/Http';

class ApplyRTI extends Component {
	constructor(){
		super();
		this.state = {
			category:{}
		}
	}
	componentDidMount() {
		const {match} = this.props;
		Http.get(`get-a-post?type=category&slug=${match.params.slug}`)
		.then(({data}) => this.setState({category: data}))
		.catch(error => console.log(error));
	}
	render() {
		const {category} = this.state;
		return(
			<div>
				<Banner categoryName={category.label}/>
				<ApplyByCategories category={category}/>
			</div>
		);	
	}
}	

export default ApplyRTI;