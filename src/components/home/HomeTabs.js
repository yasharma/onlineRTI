/* global IMAGE_PATH, _ */
import React from 'react';
import Http from '../../lib/Http';
import { LinkContainer } from 'react-router-bootstrap';

class HomeTabs extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
    }
    componentDidMount() {
        Http.get('list-categories')
        .then(({data}) => this.setState({categories: data}))
        .catch(errors => console.log(errors));
    }
    render() {
        let categories = this.state.categories;
        if( !_.isEmpty(categories) ){
            return (
                <div className="RTI-policy clearfix">
                    <ul className="clearfix">
                        {categories.map((value, index) => {
                            return (
                                <li key={index}>
                                    <LinkContainer to={'apply/' + value.slug}>
                                        <a>
                                            <img src={IMAGE_PATH + value.image} alt={value.title}/>
                                            <span>{value.title}</span>
                                        </a>
                                    </LinkContainer>
                                </li>
                            );
                        }) }
                    </ul>
                </div>
            );
        } else {
            return null;
        }    
    }
}    

export default HomeTabs;