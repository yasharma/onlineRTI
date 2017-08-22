import React from 'react';
import Slider from 'react-slick';
import Blog_1_Icon from '../../assets/images/blog1.png';
import Blog_2_Icon from '../../assets/images/blog2.png';
import Blog_3_Icon from '../../assets/images/blog3.png';

class BlogListSlider extends React.Component {
	render () {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
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
						<div className="blogbox">
							<img src={Blog_1_Icon} alt="Blog_1_Icon" />
							<p className="italic-font">
								According to the rules of our constitution, taxpayers are obligated to receive a tax refund on their income tax, if the tax they owe is less than the sum total of their withheld taxes, the estimated taxes that they have paid, and investments which are tax-free and can be claimed.
							</p>
						</div>
					</div>
					<div className="item">
						<div className="blogbox">
							<img src={Blog_2_Icon} alt="Blog_2_Icon" />
							<p className="italic-font">
								According to the rules of our constitution, taxpayers are obligated to receive a tax refund on their income tax, if the tax they owe is less than the sum total of their withheld taxes, the estimated taxes that they have paid, and investments which are tax-free and can be claimed.
							</p>
						</div>
					</div>
					<div className="item">
						<div className="blogbox">
							<img src={Blog_3_Icon} alt="Blog_1_Icon" />
							<p className="italic-font">
								According to the rules of our constitution, taxpayers are obligated to receive a tax refund on their income tax, if the tax they owe is less than the sum total of their withheld taxes, the estimated taxes that they have paid, and investments which are tax-free and can be claimed.
							</p>
						</div>
					</div>
					<div className="item">
						<div className="blogbox">
							<img src={Blog_1_Icon} alt="Blog_1_Icon" />
							<p className="italic-font">
								According to the rules of our constitution, taxpayers are obligated to receive a tax refund on their income tax, if the tax they owe is less than the sum total of their withheld taxes, the estimated taxes that they have paid, and investments which are tax-free and can be claimed.
							</p>
						</div>
					</div>
			</Slider>
		);
	}
}

export default BlogListSlider;