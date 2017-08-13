import React from 'react';
import list1 from '../../assets/images/list1.png';
import list2 from '../../assets/images/list2.png';
import list3 from '../../assets/images/list3.png';
import list4 from '../../assets/images/list4.png';
import list5 from '../../assets/images/list5.png';
import list6 from '../../assets/images/list6.png';
import list7 from '../../assets/images/list7.png';
import list8 from '../../assets/images/list8.png';
import list9 from '../../assets/images/list9.png';
import list10 from '../../assets/images/list10.png';

const HomeTabs = () => (
<div className="RTI-policy clearfix">
      <ul className="clearfix">
        <li><a><img src={list1} alt="list1"/><span>Passport Delay</span></a></li>
        <li><a><img src={list2} alt="list2"/><span>IncomeTax Refund</span></a></li>
        <li><a><img src={list3} alt="list3"/><span>Police FIR Document</span></a></li>
        <li><a><img src={list4} alt="list4"/><span>EPF Transfer Status</span></a></li>
        <li><a><img src={list5} alt="list5"/><span>Home / Land Details</span></a></li>
        <li><a><img src={list6} alt="list6"/><span>Exam Answser Copy</span></a></li>
        <li><a><img src={list7} alt="list7"/><span>Marksheet Verification</span></a></li>
        <li><a><img src={list8} alt="list8"/><span>Occupancy Certificate</span></a></li>
        <li><a><img src={list9} alt="list9"/><span>Pension Application</span></a></li>
        <li><a><img src={list10} alt="list10"/><span>MLA Fund Utilization</span></a></li>
      </ul>
    </div>
);

export default HomeTabs;