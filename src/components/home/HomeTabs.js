/* global IMAGE_PATH */
import React from 'react';
import Http from '../../lib/Http';

class HomeTabs extends React.Component {
    constructor() {
      super();
      this.state = {
        categories: []
      }
    }
    componentDidMount() {
      Http.get('list-categories')
      .then(({data}) => this.setState({categories: data}))
      .catch(error => console.log(error));
    }
    render() {
        let categories = this.state.categories;
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