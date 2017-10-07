import React from 'react';
import { Button} from "react-bootstrap";
import Steps from './Steps';
// import PersonalDetail from './PersonalDetail';
import RTIDetail from './RTIDetail';
import SummaryDetail from './SummaryDetail';

class ApplyByCategories extends React.Component {
  	render() {
  		const {category} = this.props;
  		const steps = [{
  			title: 'RTI Details',
  			active: true,
  			step: 1
  		},{
  			title: 'Personal Details',
  			active: false,
  			step: 2
  		},{
  			title: 'Summary & Details',
  			active: false,
  			step: 3
  		}];
    	return(
			<div className="apply padding-40 clearfix">
				<div className="container">
					<div className="container">
						<div className="row">
							<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
								<div id="wid-id-0">
								    <div className="widget-body">
								        <div className="row">
											<div id="bootstrap-wizard-1" className="col-sm-12">
												<Steps steps={steps}/>
												<div className="tab-content">
													{/*<div className="tab-pane active" id="tab1">
														<br/>
														<PersonalDetail />
													</div>*/}
													<div className="tab-pane active" id="tab2">
														<br/>
														<RTIDetail category={category}/>
													</div>
													<div className="tab-pane" id="tab3">
														<br/>
														<br/>
														<SummaryDetail />
													</div>
													<div className="tab-pane" id="tab4">
														<br/>
														<br/>
														<h1 className="text-center text-success"><strong><i className="fa fa-check fa-lg"></i> Complete</strong></h1>
														<h4 className="text-center">Click next to finish</h4>
														<br/>
														<br/>
														<div className="form-actions">
															<div className="row">
																<div className="col-sm-12">
																	<ul className="pager wizard no-margin">
																		<li className="previous">
																			<Button type="button" className="btn btn-lg btn-default"> Previous </Button>
																		</li>
																		<li className="next disabled">
																			<Button type="button" className="btn btn-lg txt-color-darken"> Next </Button>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
								        </div>
								    </div>
								</div>
							</article>
						</div>    
					</div>
				</div>
			</div>
    	);
  	}    
}

export default ApplyByCategories;