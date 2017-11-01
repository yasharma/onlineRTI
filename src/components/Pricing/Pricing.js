import React, { Component } from 'react';
import './Pricing.css';
import { Accordion, Panel } from "react-bootstrap";
import Yes from '../../assets/images/icon1.png';
import No from '../../assets/images/icon2.png';
class Pricing extends Component {
    render() {
        return (
            <div className="container padding-40">
        		<div className="text-center">
        			<div className="fillingCahrge">
        				<span>Calculate RTI filing charges for</span>
        				<select className="locationDrop form-control">
        				  <option>Center</option>
        				  <option>Delhi</option>
        				  <option>Delhi</option>
        				  <option>Delhi</option>
        				  <option>Delhi</option>
        				</select>
        			</div>
        		</div>
        		<div className="row">
        			<div className="col-sm-6">
        				<h3 className="blocktitle pricing">What we do for you?</h3>
        			    <ul className="block-list">
        			    	<li><h5 className="blocktitle">Qualified RTI Expert understands your problem and drafts your RTI</h5></li>
        			    	<li><h5 className="blocktitle">We identify exact office and pay government fees using recommended mode of payment</h5></li>
        			    	<li><h5 className="blocktitle">We send your RTI using speedpost/registeredpost/online options with all necessary attachments</h5></li>
        			    	<li><h5 className="blocktitle">We send timely updates on the status of your RTI by SMS/Email</h5></li>
        			    	<li><h5 className="blocktitle">Excellent Support is available to answer your application related questions </h5></li>
        			    </ul>
        			</div>
        			<div className="col-sm-6">
        				<h3 className="blocktitle pricing">Your fee breakup</h3>
        				<table className="table table-bordered pricetable"><tbody><tr className="head1"></tr><tr><td><div className="tablerow nd-pricinginfo tooltipstered"><div className="floatLeft"><p className="inline">Processing Charges</p></div><div className="floatRight hidden-phone"><p className="inline">₹ 49</p><div className="infoBubble inline">?</div></div></div></td><td className="price0"><div className="tablerow clickzero"><img src={Yes} alt="yes" className="planimg inline" /></div></td><td className="price1"><div className="tablerow clickno"><img src={Yes} className="planimg inline" alt="yes" /></div></td><td className="price2"><div className="tablerow clickyes"><img src={Yes} className="planimg inline" alt="yes" /></div></td></tr><tr><td><div className="tablerow nd-pricinginfo tooltipstered"><div className="floatLeft"><p className="inline">Shipping Charges</p></div><div className="floatRight hidden-phone"><p className="inline">₹ 100</p><div className="infoBubble inline">?</div></div></div></td><td className="price0"><div className="tablerow clickzero"><img src={Yes} className="planimg inline" alt="yes" /></div></td><td className="price1"><div className="tablerow clickno"><img src={Yes} className="planimg inline" alt="yes" /></div></td><td className="price2"><div className="tablerow clickyes"><img src={Yes} className="planimg inline" alt="yes" /></div></td></tr><tr><td><div className="tablerow nd-pricinginfo tooltipstered"><div className="floatLeft"><p className="inline">RTI Drafting Charges</p></div><div className="floatRight hidden-phone"><p className="inline">₹ 100</p><div className="infoBubble inline">?</div></div></div></td><td className="price0"><div className="tablerow clickzero"><img src={No} className="planimg inline" alt="" /></div></td><td className="price1"><div className="tablerow clickno"><img src={No} className="planimg inline" alt="yes" /></div></td><td className="price2"><div className="tablerow clickyes"><img src={Yes} className="planimg inline" alt="yes" /></div></td></tr><tr className="finalRow"><td><div className="tablerow nd-pricinginfo tooltipstered"><div className="floatLeft"><p className="inline">Phone from RTI Expert</p></div><div className="floatRight hidden-phone"><p className="inline">₹ 150</p><div className="infoBubble inline">?</div></div></div></td><td className="price0"><div className="tablerow clickzero"><img src={No} className="planimg inline" alt="yes" /></div></td><td className="price1"><div className="tablerow clickno"><img src={Yes} className="planimg inline clickno" alt="yes" /></div></td><td className="price2"><div className="tablerow clickyes"><img src={Yes} className="planimg inline clickyes" alt="yes" /></div></td></tr><tr className="lastrow"><td><div className="tablerow"><div className="floatRight"><h2 className="margin_right15 planselect">Total</h2></div></div></td><td className="price0"> <div className="tablerow"><p className="inline">₹ 149 </p></div></td><td className="price1"><div className="tablerow"><p className="inline">₹ 249</p></div></td><td className="price2"><div className="tablerow"><p className="inline">₹ 399 </p></div></td></tr></tbody></table>
        			</div>
        		</div>
            	<div className="faq padding-40 clearfix">
                  	<div className="container">
                    	<div className="main-head-black-mid">FAQ</div>
                    	<div className="padding-top50"></div>
						<Accordion>
						<Panel bsStyle="primary" header="1. What is RTI ?" eventKey="1">
						<span className="italic-font">Every citizen has a right to know how the Government is functioning. Right to Information empowers every citizen to seek any information from the Government.</span>
						</Panel>
						<Panel bsStyle="primary" header="2. What information can be asked using RTI ?" eventKey="2">
						<span className="italic-font">1. Get copies of answer sheet from any exam conducting board (Eg: GATE, IIM, UPSC etc)<br />2. Status of passport, driving license, ration card, aadhar card applications<br />3. PF withdrawl and transfer status<br />4. Pension and IT refund status<br />5. To know whether a college or course is UGC Approved or not<br />6. MP/MLA fund usage and Gram Panchayat expenditure details</span>
						</Panel>
						<Panel bsStyle="primary" header="3. What is OnlineRTI ?" eventKey="3">
						<span className="italic-font">OnlineRTI is a service for filing RTI application. We draft your application as per the rules, find the correct PIO address, pay the fees using IPO or Demand Draft and send the application using speed post.</span>
						</Panel>
						<Panel bsStyle="primary" header="4. How do I know you filed my RTI application?" eventKey="4">
						<span className="italic-font">You will receive registered post tracking link along with the soft copy of your application. As your application goes through different stages in our drafting process, you will be notified of the progress.</span>
						</Panel>
						<Panel bsStyle="primary" header="5. How does OnlineRTI work ?" eventKey="5">
						<span className="italic-font">After you file the application and pay the fees, our experts will draft the application as per RTI rules and file the application on your behalf. You will get the information by post from the concerned authority within 30 days.</span>
						</Panel>
						<Panel bsStyle="primary" header="6. Can you guarantee I will receive my information ?" eventKey="6">
						<span className="italic-font">RTI act guarantees that the PIO should respond to an application within 30 days. However in some cases, users never get the information sought. In scenarios where the information was not provided you can file for first appeal.</span>
						</Panel>
						</Accordion>
                  	</div>
                </div>
            </div>
        );
    }
}

export default Pricing
