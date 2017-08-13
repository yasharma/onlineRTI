import React from 'react';
import { Accordion, Panel } from "react-bootstrap";
import GirlIcon from '../../assets/images/rti-girl.png';

const HelpFaqs = () => (
	<div className="frequently-ask-question clearfix">
		<div className="rti-girl">
			<img src={GirlIcon} alt="GirlIcon"/>
		</div>
		<div className="rti-panel padding-top50 padding-sm-50">
			<div className="main-head-black">Frequently ask Question</div>
			<div className="padding-top50"></div>
			<Accordion>
			    <Panel bsStyle="primary" header="How will RTI Expert help you?" eventKey="1">
			    	<span className="italic-font">RTI Expert can understand your problem and suggest possible offices and questions you can ask to get information. They can also guide you on what cannot be asked under RTI and what are the best orders,laws,judgements and sections of the RTI Act to include to support your application. Using their help, you can send a strong RTI which makes your case compelling. This way the government officer is forced to reply and provide you with the information you are asking.</span>
			    </Panel>
			    <Panel bsStyle="primary" header="What is RTI drafting? Do I need it?" eventKey="2">
			    	<span className="italic-font">RTI Expert can understand your problem and suggest possible offices and questions you can ask to get information. They can also guide you on what cannot be asked under RTI and what are the best orders,laws,judgements and sections of the RTI Act to include to support your application. Using their help, you can send a strong RTI which makes your case compelling. This way the government officer is forced to reply and provide you with the information you are asking.</span>
			    </Panel>
			    <Panel bsStyle="primary" header="How can I see my application status?" eventKey="3">
			    	<span className="italic-font">RTI Expert can understand your problem and suggest possible offices and questions you can ask to get information. They can also guide you on what cannot be asked under RTI and what are the best orders,laws,judgements and sections of the RTI Act to include to support your application. Using their help, you can send a strong RTI which makes your case compelling. This way the government officer is forced to reply and provide you with the information you are asking.</span>
			    </Panel>
			  </Accordion>
		</div>
	</div>
);
export default HelpFaqs;