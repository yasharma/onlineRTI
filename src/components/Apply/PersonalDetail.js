import React from 'react';
import {Form, Button} from "react-bootstrap";

class PersonalDetail extends React.Component {
  render() {
    return (
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
                          <Button type="button" className="btn btn-lg btn-default pull-left"> Previous </Button>
                      </li>
                      <li className="next">
                          <Button type="button" className="btn btn-lg txt-color-darken pull-right"> Next </Button>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}

export default PersonalDetail;