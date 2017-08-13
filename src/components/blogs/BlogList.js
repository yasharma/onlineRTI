import React from 'react';
import Blog_1_Icon from '../../assets/images/blog1.png';
import Blog_2_Icon from '../../assets/images/blog2.png';
import Blog_3_Icon from '../../assets/images/blog3.png';
import RightArrowIcon from '../../assets/images/rightArrow.png';
import LeftArrowIcon from '../../assets/images/leftArrow.png';

const BlogList = () => (
	<div className="our-recent-blog padding-40 clearfix">
		<div className="container">
			<div className="main-head-black-mid">Our Recent Blog</div>
			<div className="customer_slider customer_slider-second padding-top50">
				<div className="our-recent-slider owl-theme">
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
				</div>
			</div>
			<div className="left-turn"><img src={RightArrowIcon} alt="RightArrowIcon" /></div>
			<div className="right-turn"><img src={LeftArrowIcon} alt="RightArrowIcon" /></div>
		</div>
	</div>
);
export default BlogList;