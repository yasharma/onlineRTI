import React from 'react';
import Http from '../../lib/Http';

class Aboutcontent extends React.Component {
	constructor() {
		super();
		this.state = {
			aboutContent: []
		}
	}
	componentDidMount() {
		Http.get('blog/list/about_us')
		.then(({records}) => this.setState({aboutContent: records.result}))
		.catch(error => console.log(error));
	}
	render() {
		let contentData = this.state.aboutContent;
		return (
			<div className="about-us-rti padding-40 clearfix">
		      <div className="container">
		        {contentData ? (
		        		contentData.map((value, index) => {
        					return (
        						<div className="row" key={index}>
        							<div className={"col-sm-6 " + ((index % 2) ? 'col-sm-push-6':'')}>
        								<div className="about-img">
        									<img src={process.env.PUBLIC_URL + value.image.path} alt={value.title}/>
        								</div>
        							</div>
        							<div className={"col-sm-6 " + ((index % 2) ? 'col-sm-pull-6':'')}>
        								<div className="about-content">
        									<h2>{value.title}</h2>
        				              		<p>{value.short_description}. <a>Read More</a></p>
        								</div>
        							</div>
        						</div>
        					);
        				})
		        	) : (
		        		<div>Loading ... </div>
		        	)
		        }
		      </div>
		    </div>
		);
	}
}	

export default Aboutcontent;