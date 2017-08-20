import React from 'react';
import Slider from 'react-slick';
import Customer_1_Icon from '../../assets/images/cus_1.png';
import Customer_2_Icon from '../../assets/images/cus_2.png';
import ApostrophyIcon from '../../assets/images/apostrophy.png';

class TestimonialSlider extends React.Component {
	render () {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [
		    {
		      breakpoint: 639,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }]

		};
		return (
			<Slider {...settings}>
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
			</Slider>
		);
	}
}

export default TestimonialSlider;