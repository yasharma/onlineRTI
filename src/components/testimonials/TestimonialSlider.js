import React from 'react';
import Slider from 'react-slick';
import Http from '../../lib/Http';
// import Customer_1_Icon from '../../assets/images/cus_1.png';
// import Customer_2_Icon from '../../assets/images/cus_2.png';
import ApostrophyIcon from '../../assets/images/apostrophy.png';

class TestimonialSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			testimonials: []
		}
	}
	componentDidMount() {
		Http.get('testimonial/list')
		.then(({records}) => this.setState({testimonials: records.result}))
		.catch(error => console.log(error));
	}
	render () {
		let slides = this.state.testimonials,
		settings = {
			dots: false,
			infinite: false,
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
				{slides ?
					slides.map((value, index) => {
						return (
							<div className="item" key={index}>
								<div className="customerbox">
									<div className="customer-sm">
										<img src={process.env.PUBLIC_URL + value.image.path} alt={value.name} />
										<span>{value.name}</span>
									</div>
									<p>{value.description}</p>
									<div className="aps_icon">
										<img src={ApostrophyIcon} alt="ApostrophyIcon" />
									</div>
								</div>
							</div>
						);
					})
					: (
						<div>Loading ...</div>
					)
				}
			</Slider>
		);
	}
}

export default TestimonialSlider;