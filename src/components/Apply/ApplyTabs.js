import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import PersonalDetail from './PersonalDetail';

class ApplyTabs extends React.Component {
  render() {
    return(
      <div className="apply padding-40 clearfix">
        <div className="container">
          <div className="container">
            <div className="row">
              <article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
                  <div id="wid-id-0">
                      <div role="content">
                          <div className="widget-body">

                              <div className="row">
                                  
                                <div id="bootstrap-wizard-1" className="col-sm-12">
                                    <div className="form-bootstrapWizard">
                                        <ul className="bootstrapWizard form-wizard">
                                            <li className="active" >
                                                <Link to="/apply-now?q=step-1" >
                                                  <span className="step">1</span> <span className="title">Personal Details</span> 
                                                </Link>
                                            </li>
                                            <li  className="">
                                                <Link to="/apply-now?q=step-2" className="active">
                                                  <span className="step">2</span> <span className="title">RTI Details</span> 
                                                </Link>
                                            </li>
                                            <li  className="">
                                                <Link to="/apply-now?q=step-3" >
                                                  <span className="step">3</span> <span className="title">Summary &amp; Details</span> 
                                                </Link>
                                            </li>
                                            <li >
                                                <Link to="/apply-now?q=step-4">
                                                  <span className="step">4</span> <span className="title">Save and Continue</span> 
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab1">
                                            <br/>
                                            <PersonalDetail />
                                        </div>
                                        <div className="tab-pane" id="tab2">
                                            <br/>
                                            <div className="form-actions">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                      <div className="step-forms padding-top50">
                                                      <Form className=" clearfix">
                                                          <div className="main-head-black-mid">RTI DETAILS</div>

                                                          <div className="row padding-top50">
                                                              <div className="col-sm-6">
                                                                <div className="form-group">
                                                                  <select className="form-control">
                                                                    <option> New RTI Query</option>
                                                                    <option> Exam Answer Copy</option>
                                                                    <option> Student</option>
                                                                    <option> Status of Complaint</option>
                                                                    <option> EPF Withdrawal Status</option>
                                                                  </select>
                                                                </div>
                                                              </div>
                                                              <div className="col-sm-6">
                                                                <div className="form-group">
                                                                  <select className="form-control">
                                                                    <option> Property Details</option>
                                                                    <option> Commencement Certificate</option>
                                                                    <option> Occupancy Certificate</option>
                                                                    <option> Owner of land/flat</option>
                                                                    <option> Others</option>
                                                                  </select>
                                                                </div>
                                                              </div>
                                                          </div>

                                                          <div className="row">
                                                              <div className="col-sm-6">
                                                                <div className="form-group">
                                                                  <select className="form-control">
                                                                    <option> Passport Status</option>
                                                                    <option> IncomeTax Refund</option>
                                                                    <option> FIR Status</option>
                                                                    <option> EPF Transfer Status</option>
                                                                    <option> EPF Withdrawal Status</option>
                                                                    <option> RoadTax Refund Status</option>
                                                                  </select>
                                                                </div>
                                                              </div>
                                                              <div className="col-sm-6">
                                                                <div className="form-group">
                                                                  <select className="form-control">
                                                                    <option> MP Fund Utilization</option>
                                                                    <option> MLA Fund Utilization</option>
                                                                    <option> Gram Panchayat</option>
                                                                    <option> Fund Utilization</option>
                                                                    <option> Tender Details</option>
                                                                    <option> Road Works</option>
                                                                  </select>
                                                                </div>
                                                              </div>
                                                          </div>

                                                          <h2 className="heading-rti">RTI Query for Commencement certificate of a building</h2>
                                                          <div className="row">
                                                              <div className="col-sm-6">
                                                                <div className="form-group">
                                                                  <input className="form-control" placeholder="Constituency" type="text"/>
                                                                </div>
                                                              </div>
                                                              <div className="col-sm-6">
                                                                <div className="form-group">
                                                                  <input className="form-control" placeholder="District" type="text"/>
                                                                </div>
                                                              </div>
                                                          </div>

                                                          <div className="row">
                                                              <div className="col-sm-6">
                                                                <div className="form-group">
                                                                  <input className="form-control" placeholder="From (Year)" type="text"/>
                                                                </div>
                                                              </div>
                                                              <div className="col-sm-6">
                                                                <div className="form-group">
                                                                  <input className="form-control" placeholder="To (Year)" type="text"/>
                                                                </div>
                                                              </div>
                                                          </div>

                                                          <div className="row">
                                                              <div className="col-sm-12">
                                                                <div className="form-group">
                                                                  <textarea className="form-control" rows="3" placeholder="More Information (optional)"></textarea>
                                                                </div>
                                                              </div>
                                                          </div>
                                                          <button type="button" className="btn btn-info btn-block italic-font">Submit</button>
                                                        </Form>
                                                    </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <ul className="pager wizard no-margin">
                                                            <li className="previous disabled">
                                                                <Button type="button" className="btn btn-lg btn-default"> Previous </Button>
                                                            </li>
                                                            <li className="next">
                                                                <Button type="button" className="btn btn-lg txt-color-darken"> Next </Button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="tab-pane" id="tab3">
                                          <br/>
                                          <br/>
                                          <div className="form-actions">
                                              <div className="row">
                                                  <div className="col-sm-12">
                                                    <div className="step-forms padding-top50">
                                                    <Form className=" clearfix">
                                                        <div className="main-head-black-mid">SUMMARY & DETAILS</div>

                                                        <div className="row padding-top50">
                                                            <div className="col-sm-6">
                                                              <div className="form-group">
                                                                <select className="form-control">
                                                                  <option> New RTI Query</option>
                                                                  <option> Exam Answer Copy</option>
                                                                  <option> Student</option>
                                                                  <option> Status of Complaint</option>
                                                                  <option> EPF Withdrawal Status</option>
                                                                </select>
                                                              </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                              <div className="form-group">
                                                                <select className="form-control">
                                                                  <option> Property Details</option>
                                                                  <option> Commencement Certificate</option>
                                                                  <option> Occupancy Certificate</option>
                                                                  <option> Owner of land/flat</option>
                                                                  <option> Others</option>
                                                                </select>
                                                              </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                              <div className="form-group">
                                                                <select className="form-control">
                                                                  <option> Passport Status</option>
                                                                  <option> IncomeTax Refund</option>
                                                                  <option> FIR Status</option>
                                                                  <option> EPF Transfer Status</option>
                                                                  <option> EPF Withdrawal Status</option>
                                                                  <option> RoadTax Refund Status</option>
                                                                </select>
                                                              </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                              <div className="form-group">
                                                                <select className="form-control">
                                                                  <option> MP Fund Utilization</option>
                                                                  <option> MLA Fund Utilization</option>
                                                                  <option> Gram Panchayat</option>
                                                                  <option> Fund Utilization</option>
                                                                  <option> Tender Details</option>
                                                                  <option> Road Works</option>
                                                                </select>
                                                              </div>
                                                            </div>
                                                        </div>

                                                        <h2 className="heading-rti">RTI Query for Commencement certificate of a building</h2>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                              <div className="form-group">
                                                                <input className="form-control" placeholder="Constituency" type="text"/>
                                                              </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                              <div className="form-group">
                                                                <input className="form-control" placeholder="District" type="text"/>
                                                              </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                              <div className="form-group">
                                                                <input className="form-control" placeholder="From (Year)" type="text"/>
                                                              </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                              <div className="form-group">
                                                                <input className="form-control" placeholder="To (Year)" type="text"/>
                                                              </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                              <div className="form-group">
                                                                <textarea className="form-control" rows="3" placeholder="More Information (optional)"></textarea>
                                                              </div>
                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn btn-info btn-block italic-font">Submit</button>
                                                      </Form>
                                                  </div>
                                                  </div>
                                                  <div className="col-sm-12">
                                                      <ul className="pager wizard no-margin">
                                                          <li className="previous disabled">
                                                              <Button type="button" className="btn btn-lg btn-default"> Previous </Button>
                                                          </li>
                                                          <li className="next">
                                                              <Button type="button" className="btn btn-lg txt-color-darken"> Next </Button>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
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

                  </div>

              </article>
            </div>    
          </div>
        </div>
      </div>
    )
  }    
}

export default ApplyTabs;