/* global _ */
import React, {Component} from 'react';
import Banner from './ApplyBanner';
import ApplyByCategories from './ApplyByCategories';
import Http from '../../lib/Http';
import { connect } from "react-redux";

class ApplyRTI extends Component {
	constructor(){
		super();
		this.formSubmit = this.formSubmit.bind(this);      	
		this.state = {
			category:{},
			rtiFormStep: {}
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
		/*const { rtiFormStep } = this.props;
		if( rtiFormStep ) {
			this.setState({rtiFormStep: rtiFormStep});
		}*/
		return(
			<div>
				<Banner categoryName={category.label}/>
				<ApplyByCategories onSubmit={this.formSubmit} category={category}/>
			</div>
		);	
	}
	formSubmit(values) {
		Http.post('apply-rti', {
			category: this.state.category,
			rti: values,
			info: values
		})
		.then(response => console.log(response))
		.catch(error => console.log(error));
	}
}	

const mapStateToProps = (state) => {
	const {rtiFormStep} = state;
	if( !_.isEmpty(rtiFormStep.info) ) {
		return ({
			rtiFormStep
		});	
	} else {
		return ({});
	}
}

export default connect(mapStateToProps)(ApplyRTI);