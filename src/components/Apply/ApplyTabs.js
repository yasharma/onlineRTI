import React from 'react';
import {Form} from "react-bootstrap";

const ApplyTabs = () => (
<div className="apply padding-40 clearfix">
      <div className="container">
        <div className="container">
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
                                          <a href="#tab1" data-toggle="tab" className="active"> <span className="step">1</span> <span className="title">Personal Details</span> </a>
                                      </li>
                                      <li data-target="#step2" className="">
                                          <a href="#tab2" data-toggle="tab"> <span className="step">2</span> <span className="title">RTI Details</span> </a>
                                      </li>
                                      <li data-target="#step3" className="">
                                          <a href="#tab3" data-toggle="tab"> <span className="step">3</span> <span className="title">Summary &amp; Details</span> </a>
                                      </li>
                                      <li data-target="#step4">
                                          <a href="#tab4" data-toggle="tab"> <span className="step">4</span> <span className="title">Save and Continue</span> </a>
                                      </li>
                                  </ul>
                                  <div className="clearfix"></div>
                              </div>
                              <div className="tab-content">
                                  <div className="tab-pane active" id="tab1">
                                      <br/>
                                      <div className="form-actions">
                                          <div className="row">
                                              <div className="col-sm-12">
                                                <div className="step-forms padding-top50">
                                                <Form>
                                                    <div className="main-head-black-mid">PERSONAL DETAILS</div>

                                                    <div className="row padding-top50">
                                                        <div className="col-sm-6">
                                                          <div className="form-group">
                                                            <input className="form-control" placeholder="First Name:" type="text"/>
                                                          </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                          <div className="form-group">
                                                            <input className="form-control" placeholder="Last Name:" type="text"/>
                                                          </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                          <div className="form-group">
                                                            <input className="form-control" placeholder="Email ID" type="text"/>
                                                          </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                          <div className="form-group">
                                                            <input className="form-control" placeholder="Phone:" type="text"/>
                                                          </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                          <div className="form-group">
                                                            <input className="form-control" placeholder="Phone:" type="text"/>
                                                          </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                          <div className="form-group">
                                                            <input className="form-control" placeholder="Pincode:" type="text"/>
                                                          </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                          <div className="form-group">
                                                            <textarea className="form-control" rows="3" placeholder="Address:"></textarea>
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
                                                          <a href="#" className="btn btn-lg btn-default"> Previous </a>
                                                      </li>
                                                      <li className="next">
                                                          <a href="#" className="btn btn-lg txt-color-darken"> Next </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
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
                                                          <a href="#" className="btn btn-lg btn-default"> Previous </a>
                                                      </li>
                                                      <li className="next">
                                                          <a href="#" className="btn btn-lg txt-color-darken"> Next </a>
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
                                                        <a href="#" className="btn btn-lg btn-default"> Previous </a>
                                                    </li>
                                                    <li className="next">
                                                        <a href="#" className="btn btn-lg txt-color-darken"> Next </a>
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
                                                          <a href="#" className="btn btn-lg btn-default"> Previous </a>
                                                      </li>
                                                      <li className="next disabled">
                                                          <a href="#" className="btn btn-lg txt-color-darken"> Next </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>


                              </div>
                          </div>
                      </Form>
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

export default ApplyTabs;