import React from 'react';

const HelpFaqs = () => (
<div className="frequently-ask-question clearfix">
      <div className="rti-girl">
        <img src="assets/images/rti-girl.png" alt=""/>
      </div>
      <div className="rti-panel padding-top50 padding-sm-50">
          <div className="main-head-black">Frequently ask Question</div>
          <div className="padding-top50"></div>
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-primary">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How will RTI Expert help you?
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body italic-font">
                    RTI Expert can understand your problem and suggest possible offices and questions you can ask to get information. They can also guide you on what cannot be asked under RTI and what are the best orders,laws,judgements and sections of the RTI Act to include to support your application. Using their help, you can send a strong RTI which makes your case compelling. This way the government officer is forced to reply and provide you with the information you are asking.
                  </div>
                </div>
              </div>
              <div className="panel panel-primary">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What is RTI drafting? Do I need it?
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body italic-font">
                    RTI Expert can understand your problem and suggest possible offices and questions you can ask to get information. They can also guide you on what cannot be asked under RTI and what are the best orders,laws,judgements and sections of the RTI Act to include to support your application. Using their help, you can send a strong RTI which makes your case compelling. This way the government officer is forced to reply and provide you with the information you are asking.
                  </div>
                </div>
              </div>
              <div className="panel panel-primary">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How can I see my application status?
                  </a>
                </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div className="panel-body italic-font">
                  RTI Expert can understand your problem and suggest possible offices and questions you can ask to get information. They can also guide you on what cannot be asked under RTI and what are the best orders,laws,judgements and sections of the RTI Act to include to support your application. Using their help, you can send a strong RTI which makes your case compelling. This way the government officer is forced to reply and provide you with the information you are asking.
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
    export default HelpFaqs;