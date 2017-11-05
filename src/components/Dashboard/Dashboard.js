import React, { Component } from 'react';
import styles from './Dashboard.css';
import {Form} from 'react-bootstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (	
			<div className="dashborad-group padding-40">
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<ul className="dash-list">
								<li className="active"><a>App progress</a></li>
								<li><a>App Status</a></li>
								<li><a>RTI application</a></li>
								<li><a>Edit Profile</a></li>
								<li><a>Download</a></li>
								<li><a>Payment Infor &amp; Invoice</a></li>
								<li><a>First Appeal</a></li>
								<li><a>Tracking Details</a></li>
							</ul>
						</div>
						<div className="col-sm-7">
							<div className="dashboard-content">
								<div className="dash-head">Application progress</div>
								<div className="row">
									<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
									  <div id="wid-id-0">
									      <div role="content">
									          <div className="widget-body">

									              <div className="row">
									                  <Form >
									                      <div id="bootstrap-wizard-1" className="col-sm-12">
									                          <div className="form-bootstrapWizard">
									                              <ul className="bootstrapWizard form-wizard">
									                                  <li className="active" data-target="#step1">
									                                      <a href="#tab1" data-toggle="tab" className="active"> <span className="step">1</span> <span className="title">Started</span> </a>
									                                  </li>
									                                  <li data-target="#step2" className="">
									                                      <a href="#tab2" data-toggle="tab"> <span className="step">2</span> <span className="title">Approval</span> </a>
									                                  </li>
									                                  <li data-target="#step3" className="">
									                                      <a href="#tab3" data-toggle="tab"> <span className="step">3</span> <span className="title">Filed</span> </a>
									                                  </li>
									                              </ul>
									                              <div className="clearfix"></div>
									                          </div>
									                      </div>
									                  </Form>
									              </div>

									          </div>

									      </div>

									  </div>
									</article>
								</div>
								<div className="dash-head-sub">Your RTI Application has been filed.</div>
								<div className="tracking-num text-center">Tracking Number, EK352199231IN
									<div className="payment-details">Payment Details: 40F-42069</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		);
    }
}

export default Dashboard;
