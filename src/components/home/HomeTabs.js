/* global IMAGE_PATH */
import React from 'react';

class HomeTabs extends React.Component {
    render() {
        let categories = this.props.categories;
        return (
            <div className="RTI-policy clearfix">
                <ul className="clearfix">
                    {categories ? (
                            categories.map((value, index) => {
                                return (
                                    <li key={index}>
                                        <a href={value.slug}>
                                            <img src={IMAGE_PATH + value.image} alt={value.title}/>
                                            <span>{value.title}</span>
                                        </a>
                                    </li>
                                );
                            })
                        ) : (
                            <li>Loading ... </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}    

export default HomeTabs;