import React from 'react';
import Customer_1_Icon from '../../assets/images/cus_1.png';
import Customer_2_Icon from '../../assets/images/cus_2.png';
import ApostrophyIcon from '../../assets/images/apostrophy.png';
import RightArrowIcon from '../../assets/images/rightArrow.png';
import LeftArrowIcon from '../../assets/images/leftArrow.png';

const Testimonials = () => (
	<div className="our-happy-customer padding-40 clearfix">
		<div className="container">
			<div className="main-head-black-mid">Our Happy Customer</div>
			<div className="customer_slider padding-top50">
				<div className="happy-customer-slider owl-theme">
					<div className="item">
						<div className="customerbox">
							<div className="customer-sm">
								<img src={Customer_1_Icon} alt="CustomerIcon" />
								<span>Dr Ranjini C R</span>
							</div>
							<p>
								" I have been researching on RTI. This is a great effort to take RTI forward. Helpful associates, user-friendly online experience, quick responses and dedicated team of people. Well done!! "
							</p>
							<div className="aps_icon">
								<img src={ApostrophyIcon} alt="ApostrophyIcon" />
							</div>
						</div>
					</div>
					<div className="item">
						<div className="customerbox">
							<div className="customer-sm">
								<img src={Customer_2_Icon} alt="CustomerIcon" />
								<span>- Priti Bhende, Teacher from Mumbai</span>
							</div>
							<p>
								"It had been nearly 7 years that I was trying to get my PF account cleared then I learnt about RTI approached them online and got my PF cleared.Thanks to RTI "
							</p>
							<div className="aps_icon">
								<img src={ApostrophyIcon} alt="ApostrophyIcon" />
							</div>
						</div>
					</div>
					<div className="item">
						<div className="customerbox">
							<div className="customer-sm">
								<img src={Customer_1_Icon} alt="CustomerIcon" />
								<span>Dr Ranjini C R</span>
							</div>
							<p>
								" I have been researching on RTI. This is a great effort to take RTI forward. Helpful associates, user-friendly online experience, quick responses and dedicated team of people. Well done!! "
							</p>
							<div className="aps_icon">
								<img src={ApostrophyIcon} alt="ApostrophyIcon" />
							</div>
						</div>
					</div>
					<div className="item">
						<div className="customerbox">
							<div className="customer-sm">
								<img src={Customer_2_Icon} alt="CustomerIcon" />
								<span>- Priti Bhende, Teacher from Mumbai</span>
							</div>
							<p>
								"It had been nearly 7 years that I was trying to get my PF account cleared then I learnt about RTI approached them online and got my PF cleared.Thanks to RTI "
							</p>
							<div className="aps_icon">
								<img src={ApostrophyIcon} alt="ApostrophyIcon" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="left-arrow"><img src={RightArrowIcon} alt="right-arrow" /></div>
			<div className="right-arrow"><img src={LeftArrowIcon} alt="left-arrow" /></div>
		</div>
	</div>
);
export default Testimonials;