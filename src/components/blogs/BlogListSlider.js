import React from 'react';
import Slider from 'react-slick';
// import Blog_1_Icon from '../../assets/images/blog1.png';
// import Blog_2_Icon from '../../assets/images/blog2.png';
// import Blog_3_Icon from '../../assets/images/blog3.png';
import Http from '../../lib/Http';

class BlogListSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			blogs: []
		}
	}
	componentDidMount() {
		Http.get('blog/list/blog')
		.then(({records}) => this.setState({blogs: records.result}))
		.catch(error => console.log(error));
	}
	render () {
		let slides = this.state.blogs;
		
		const blog_content = slides.map((blogValue, index) => {
			return (
				<div className="item" key={index}>
					<div className="blogbox">
						<img src={process.env.PUBLIC_URL + blogValue.image.path} alt={blogValue.title} />
						<p className="italic-font">
							{blogValue.short_description}
						</p>
					</div>
				</div>
			);
		});
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
				<div>{blog_content}</div>
			</Slider>
		);
	}
}

export default BlogListSlider;